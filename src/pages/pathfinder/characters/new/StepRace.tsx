import {
  Box,
  Heading,
  Input,
  Button,
  ButtonGroup,
  Text,
  InputGroup,
  InputRightElement,
  ListItem,
  UnorderedList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC, ChangeEvent, useState } from "react";
import { CharacterData } from "@/components/class/characterdata";
import CharacterAvatarEditor from "@/components/ui/molecules/CharacterAvatarEditor";
import { FaMinus, FaPlus } from "react-icons/fa";

interface StepRaceProps {
  onNext: (data: CharacterData) => void;
  data: CharacterData;
}

const StepRace: FC<StepRaceProps> = ({ onNext, data }) => {
  const [race, setRace] = useState(data.race);
  const handleRaceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRace(e.target.value);
  };

  const [raceFeats, setRaceFeats] = useState(data.feats.racefeats);
  const [inputRaceFeats, setRaceFeat] = useState("");
  const nuevoDoteRacial = () => {
    if (inputRaceFeats.trim() !== "") {
      setRaceFeats((prevRaceFeats) => [
        ...prevRaceFeats,
        inputRaceFeats.trim(),
      ]);
      setRaceFeat("");
    }
  };
  const handleDeleteRaceFeat = (indexToDelete: number) => {
    setRaceFeats((prevRaceFeats) =>
      prevRaceFeats.filter((_, index) => index !== indexToDelete)
    );
  };
  const hasRaceFeats = raceFeats.length > 0;
  return (
    <Box>
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button onClick={() => console.log(data)}>log</Button>
        <Button
          onClick={() =>
            onNext({
              ...data,
              race: race,
              feats: {
                ...data.feats,
                racefeats: raceFeats,
              },
              copyFrom: (): void => {
                throw new Error("Function not implemented.");
              },
            })
          }
        >
          Siguiente
        </Button>
      </ButtonGroup>
      <Heading>Raza</Heading>
      <Text as="i">Introduce el nombre de la raza</Text>
      <Input
        variant="flushed"
        pr="4.5rem"
        placeholder="Raza"
        value={race}
        onChange={handleRaceChange}
      />
      <Text as="i">Añade los dotes raciales</Text>
      <InputGroup size="md">
        <Input
          variant="flushed"
          pr="4.5rem"
          placeholder="Dotes Raciales"
          value={inputRaceFeats}
          onChange={(e) => setRaceFeat(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={() => nuevoDoteRacial()}>
            <FaPlus />
          </Button>
        </InputRightElement>
      </InputGroup>

      {hasRaceFeats ? (
        <>
          <TableContainer mt={10}>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Dotes</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {raceFeats.map((feat, index) => (
                  <Tr key={index}>
                    <Td whiteSpace="break-spaces">{feat}</Td>
                    <Td textAlign="right">
                      <Button
                        size="xs"
                        onClick={() => handleDeleteRaceFeat(index)}
                      >
                        <FaMinus />
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Dotes</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default StepRace;
