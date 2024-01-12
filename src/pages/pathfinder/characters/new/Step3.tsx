// Step3.tsx
import {
  Box,
  Heading,
  Text,
  Select,
  Button,
  Input,
  ListItem,
  UnorderedList,
  InputGroup,
  InputRightElement,
  ButtonGroup,
} from "@chakra-ui/react";
import { FC, ChangeEvent, useState } from "react";
import { CharacterData } from "@/components/class/characterdata";
import { FaPlus } from "react-icons/fa";

interface Step3Props {
  onComplete: (data: CharacterData) => void;
  onPrev: (data: CharacterData) => void;
  data: CharacterData;
}

const Step3: FC<Step3Props> = ({ onComplete, onPrev, data }) => {
  const [equipment, setEquipment] = useState(data.equipment || []);
  const [inputValue, setInputValue] = useState("");

  const addEquipment = () => {
    if (inputValue.trim() !== "") {
      setEquipment((prevEquipment) => [...prevEquipment, inputValue.trim()]);
      setInputValue(""); // Limpiar el valor del Input
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const hayEquipo = equipment.length > 0;
  return (
    <Box>
      <ButtonGroup display='flex' justifyContent="space-between">
        <Button
          onClick={() =>
            onPrev({
              ...data,
              equipment,
              copyFrom: (): void => {
                throw new Error("Function not implemented.");
              },
            })
          }
        >
          Atrás
        </Button>
        <Button
          onClick={() =>
            onComplete({
              ...data,
              equipment,
              copyFrom: (): void => {
                throw new Error("Function not implemented.");
              },
            })
          }
        >
          Completar
        </Button>
      </ButtonGroup>
      <Heading>Equipo</Heading>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          placeholder="Equipación"
          value={inputValue}
          onChange={handleChange}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={() => addEquipment()}>
            <FaPlus />
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button onClick={() => console.log("Contenido del equipo:", equipment)}>
        log
      </Button>

      {hayEquipo ? (
        <UnorderedList>
          {equipment.map((elemento, index) => (
            <ListItem key={index}>
              <Text>{elemento}</Text>
            </ListItem>
          ))}
        </UnorderedList>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Step3;
