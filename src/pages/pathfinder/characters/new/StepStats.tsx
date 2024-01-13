// StepStats.tsx
import {
  Box,
  Heading,
  Checkbox,
  Button,
  Input,
  Text,
  ButtonGroup,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { ChangeEvent, FC, useState } from "react";
import { CharacterData } from "@/components/class/characterdata";

interface StepStatsProps {
  onNext: (data: CharacterData) => void;
  onPrev: (data: CharacterData) => void;
  data: CharacterData;
}

const StepStats: FC<StepStatsProps> = ({ onNext, onPrev, data }) => {
  const [stats, setStats] = useState(data.stats);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, dataset } = e.target;
    const statName = dataset.stat;
    setStats((prevStats) => ({
      ...prevStats,
      [statName as string]: +value,
    }));
  };
  const handleStatChange = (event: any) => {
    setStats((prevStats) => ({
      ...prevStats,
      [event.target.name as string]: +event.target.value,
    }));
  }

  return (
    <Box>
      <ButtonGroup display="flex" justifyContent="space-between">
        <Button onClick={() => console.log(data)}>log</Button>
        <Button
          onClick={() =>
            onPrev({
              ...data,
              stats: stats,
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
            onNext({
              ...data,
              stats: stats,
              copyFrom: (): void => {
                throw new Error("Function not implemented.");
              },
            })
          }
        >
          Siguiente
        </Button>
      </ButtonGroup>
      <Heading>Puntuaciones de Caracteristica</Heading>
      <Text>Fuerza</Text>
      <NumberInput
        variant="flushed"
        value={stats.strength}
        onChange={(value) => handleStatChange({ target: { name: 'strength', value } })}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text>Destreza</Text>
      <NumberInput
        variant="flushed"
        value={stats.dexterity}
        onChange={(value) => handleStatChange({ target: { name: 'dexterity', value } })}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text>Constitucion</Text>
      <NumberInput
        variant="flushed"
        value={stats.constitution}
        onChange={(value) => handleStatChange({ target: { name: 'constitution', value } })}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text>Inteligencia</Text>
      <NumberInput
        variant="flushed"
        value={stats.intelligence}
        onChange={(value) => handleStatChange({ target: { name: 'intelligence', value } })}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text>Sabiduria</Text>
      <NumberInput
        variant="flushed"
        value={stats.wisdom}
        onChange={(value) => handleStatChange({ target: { name: 'wisdom', value } })}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text>Carisma</Text>
      <NumberInput
        variant="flushed"
        value={stats.charisma}
        onChange={(value) => handleStatChange({ target: { name: 'charisma', value } })}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      {/* Agrega más habilidades según sea necesario */}
    </Box>
  );
};

export default StepStats;
