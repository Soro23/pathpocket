import { useCallback, useState, useRef } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { useToast } from "@chakra-ui/toast";
import AvatarEditor from "react-avatar-editor";
import FileUpload from "../../atoms/FileUpload";

import { storage } from "services/firebase";
import { useAuth } from "contexts/AuthUserContext";
import { updateCharacterAvatar } from "@/services/firebase/database";


export default function CharacterAvatarEditor({ name, buttonName, newCharacter = false, onPhotoURLChange }: { name: string, buttonName?: string, newCharacter?: boolean, onPhotoURLChange?: (newPhotoURL: string) => void }) {
  const [photoURL, setPhotoURL] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [saving, setSaving] = useState(false);
  const imageEditorRef = useRef<AvatarEditor>(null);

  const { authUser, updateCurrentUserProfile } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleStartEdit = useCallback(
    (fileDataUrl: string) => {
      fileDataUrl && setImageUrl(fileDataUrl);
      onOpen();
    },
    [onOpen]
  );

  const handleSave = useCallback(async () => {
    setSaving(true);
    try {
      const editor = imageEditorRef.current;
      if (!editor) return;
      const dataString = editor.getImageScaledToCanvas().toDataURL();
      const imageStoragePath = `/users/${authUser?.uid}/public/characters/${name}`;

      await storage.uploadString(imageStoragePath, dataString, "data_url");
      const photoURL = await storage.getDownloadURL(imageStoragePath);
      // await updateCurrentUserProfile({ photoURL });
      if (!newCharacter) {
        updateCharacterAvatar(authUser?.uid, name, photoURL)
      } else {
        if (onPhotoURLChange)
          onPhotoURLChange(photoURL)
      }
      onClose();
    } catch (err) {
      toast({
        title: "Error",
        description: "Se ha producido un error al guardar",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
    setSaving(false);
  }, [imageEditorRef, updateCurrentUserProfile, onClose]);


  return (
    <>
      <FileUpload
        placeholder={buttonName ? buttonName : "Foto"}
        acceptedFileTypes={["image/*"]}
        onChange={handleStartEdit}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar foto de personaje</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx='auto'>
            <AvatarEditor
              ref={imageEditorRef}
              image={imageUrl}
              width={250}
              height={250}
              border={50}
              color={[255, 255, 255, 0.8]} // RGBA
              scale={1.2}
              rotate={0}
              borderRadius={200}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              mr={3}
              onClick={handleSave}
              isLoading={saving}
            >
              Salvar
            </Button>
            <Button variant="ghost" onClick={onClose} disabled={saving}>
              Cancelar edición
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
