import { Box, Heading, Input, Button, ButtonGroup, Image } from "@chakra-ui/react";
import { FC, ChangeEvent, useState } from "react";
import { CharacterData } from "@/components/class/characterdata";
import CharacterAvatarEditor from "@/components/ui/molecules/CharacterAvatarEditor";

interface StepEquipmentProps {
  onNext: (data: CharacterData) => void;
  onPrev: (data: CharacterData) => void;
  data: CharacterData;
}

const StepEquipment: FC<StepEquipmentProps> = ({ onNext, onPrev, data }) => {
  const [name, setName] = useState(data.name);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Box>
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button
          onClick={() =>
            onNext({
              ...data,
              name,
              copyFrom: (): void => {
                throw new Error("Function not implemented.");
              },
            })
          }
        >
          Siguiente
        </Button>
      </ButtonGroup>
      <Heading>Información básica</Heading>
      <Image
        src='https://firebasestorage.googleapis.com/v0/b/soro-dashboard.appspot.com/o/users%2FdE3IicCMypbQNL0ojqIBdDGXdxE3%2Fpublic%2Fcharacters%2FT3?alt=media&token=914e6c5d-c018-488a-8b10-ce76f6f0cae3'
        alt={name}
        borderRadius="lg"
      />
      <CharacterAvatarEditor name={name} buttonName="Añadir Imagen"/>
      <Input placeholder="Nombre" value={name} onChange={handleChange} />
    </Box>
  );
};

export default StepEquipment;
