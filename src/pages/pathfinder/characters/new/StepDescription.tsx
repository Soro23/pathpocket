import { Box, Heading, Input, Button, ButtonGroup, Image, Select, Textarea } from "@chakra-ui/react";
import { FC, ChangeEvent, useState } from "react";
import { CharacterData } from "@/components/class/characterdata";
import CharacterAvatarEditor from "@/components/ui/molecules/CharacterAvatarEditor";

interface StepDescriptionProps {
  onComplete: (data: CharacterData) => void;
  onPrev: (data: CharacterData) => void;
  data: CharacterData;
}

const StepDescription: FC<StepDescriptionProps> = ({ onComplete, onPrev, data }) => {
  const [name, setName] = useState(data.name);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // genero, edad, altura, peso, color ojos, color pelo

  return (
    <Box>
      <ButtonGroup display="flex" justifyContent="space-between">
        <Button
          onClick={() =>
            onPrev({
              ...data,
              copyFrom: (): void => {
                throw new Error("Function not implemented.");
              },
            })
          }
        >
          Atrás
        </Button>
        <Button onClick={() => console.log(data)}>log</Button>
        <Button
          onClick={() =>
            onComplete({
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
      <CharacterAvatarEditor name={name} buttonName="Añadir Imagen" />
      <Input placeholder="Nombre" value={name} onChange={handleChange} />
      <Select placeholder='Selecciona Alineamiento'>
        <option value='LB'>Legal Bueno</option>
        <option value='NB'>Neutral Bueno</option>
        <option value='CB'>Caotico Bueno</option>
        <option value='LB'>Legal Neutral</option>
        <option value='NB'>Neutral Neutral</option>
        <option value='CB'>Caotico Neutral</option>
        <option value='LB'>Legal Maligno</option>
        <option value='NB'>Neutral Maligno</option>
        <option value='CB'>Caotico Maligno</option>
      </Select>
      <Input placeholder="Deidad" onChange={handleChange} />
      <Textarea placeholder='Procedencia' />
      
      <Select placeholder='Tamaño'>
        <option value='-8'>Minúsculo </option>
        <option value='-4'>Diminuto </option>
        <option value='-2'>Menudo </option>
        <option value='-1'>Pequeño </option>
        <option value='0'>Mediano </option>
        <option value='1'>Grande </option>
        <option value='2'>Enorme </option>
        <option value='4'>Gargantuesco </option>
        <option value='8'>Colosal </option>
      </Select>
      <Input placeholder="Genero"  onChange={handleChange} />

    </Box>
  );
};

export default StepDescription;
