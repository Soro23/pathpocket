// StepStats.tsx
import {
  Box,
  Heading,
  Checkbox,
  Button,
  Input,
  Text,
  ButtonGroup,
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
      <Heading>Habilidades</Heading>
      <Text>Fuerza</Text>
      <Input
        value={stats.strength}
        data-stat="strength"
        onChange={handleInputChange}
      />
      <Text>Destreza</Text>
      <Input
        value={stats.dexterity}
        data-stat="dexterity"
        onChange={handleInputChange}
      />
      <Text>Constitucion</Text>
      <Input
        value={stats.constitution}
        data-stat="constitution"
        onChange={handleInputChange}
      />
      <Text>Inteligencia</Text>
      <Input
        value={stats.intelligence}
        data-stat="intelligence"
        onChange={handleInputChange}
      />
      <Text>Sabiduria</Text>
      <Input
        value={stats.wisdom}
        data-stat="wisdom"
        onChange={handleInputChange}
      />
      <Text>Carisma</Text>
      <Input
        value={stats.charisma}
        data-stat="charisma"
        onChange={handleInputChange}
      />
      {/* Agrega más habilidades según sea necesario */}
    </Box>
  );
};

export default StepStats;
