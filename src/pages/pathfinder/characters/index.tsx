import type { NextPage } from "next";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  SimpleGrid,
  Stack,
  Image,
  Text,
  Center,
  IconButton,
  useColorModeValue,
  Flex,
  Spacer,
  color,
  useBreakpointValue,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthUserContext";
import { getUserCharacters } from "@/services/firebase/database";
import CharacterAvatarEditor from "@/components/ui/molecules/CharacterAvatarEditor";
import { CharacterData } from "@/components/class/characterdata";
import { Button as CButton } from "@/components/ui/atoms/Button";
import { RiAddFill } from "react-icons/ri";
import { useRouter } from "next/router";

const Characters: NextPage = () => {
  const { authUser } = useAuth();
  const [characters, setCharacters] = useState<any[]>([]);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const gColumns = useBreakpointValue({
    base: 2,
    md: 3,
    lg: 5,
  });
  const [name, setName] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleGoNew = () => {
    if(name !== ''){
      router.push({
        pathname: "/pathfinder/characters/new",
        query: {name: name}
      });
    }else{
      alert("Introduce un nombre");
    }
  };

  useEffect(() => {
    if (authUser) {
      getUserCharacters(authUser.uid)
        .then((characters) => {
          if (Array.isArray(characters)) {
            setCharacters(characters);
          } else {
            const charactersArray = Object.entries(characters).map(
              ([key, val]) => {
                let nval: CharacterData = new CharacterData();
                nval.copyFrom(val as CharacterData | undefined);
                return { key, val };
              }
            );
            setCharacters(charactersArray);
          }
        })
        .catch((error) => {
          // Manejar errores de lectura de la base de datos
          console.error("Error fetching characters:", error);
        });
    }
  }, [authUser]);

  const headingColor = useColorModeValue("maroon", "wheat");

  const navigateToEditPage = (characterId: string) => {
    router.push(`/pathfinder/characters/${characterId}`);
  };
  const logthis = (log: any) => {
    console.log(log);
  };

  return (
    <Box w="full" p={4}>
      <Flex minWidth="max-content" alignItems="center" gap="2" p={4}>
        <Box p="2">
          <Heading as="h3" size="lg" style={{ color: headingColor }}>
            Personajes
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <CButton onClick={onOpen} cvariant={true} rightIcon={<RiAddFill />}>
            Nuevo
          </CButton>
          <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Introduce un nombre</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Input
                  placeholder="Nombre"
                  value={name}
                  onChange={handleChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleGoNew}>
                  Continuar
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </ButtonGroup>
      </Flex>
      <SimpleGrid columns={gColumns} spacing={5}>
        {characters.map((character) => (
          <Card key={character.key} maxW="sm">
            <CardBody>
              <Image
                src={character.val.imagesrc}
                alt={character.val.name}
                borderRadius="lg"
                onClick={() => logthis(character)}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" onClick={() => logthis(character)}>
                  <Center>{character.key}</Center>
                </Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter minWidth="max-content" justify={"space-between"}>
              <CButton onClick={() => navigateToEditPage(character.key)}>
                Edit
              </CButton>
              <CharacterAvatarEditor name={character.val.name} />
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Characters;
