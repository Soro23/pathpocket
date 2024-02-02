import {
  Box,
  Heading,
  Input,
  Button,
  ButtonGroup,
  Text,
  InputGroup,
  InputRightElement,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Link,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC, ChangeEvent, useState, useEffect } from "react";
import { CharacterData } from "@/components/class/characterdata";
import CharacterAvatarEditor from "@/components/ui/molecules/CharacterAvatarEditor";
import { FaMinus, FaPlus } from "react-icons/fa";
import { getRaces } from "@/services/firebase/database";
import { RaceData } from "@/components/class/racedata";

interface StepRaceProps {
  onNext: (data: CharacterData) => void;
  data: CharacterData;
}

const StepRace: FC<StepRaceProps> = ({ onNext, data }) => {
  const headingColor = useColorModeValue("maroon", "wheat");

  const [race, setRace] = useState(data.race);
  // const handleRaceChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setRace(e.target.value);
  // };

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

  const [races, setRaces] = useState<any[]>([]);
  const fetchDataAndUpdate = async () => {
    const newData = await getRaces()
      .then((race) => {
        if (Array.isArray(race)) {
          setRaces(races);
        } else {
          const racesArray = Object.entries(race).map(
            ([key, val]) => {
              return { key, val };
            }
          );
          setRaces(racesArray);
        }
      })
      .catch((error) => {
        console.error("Error fetching races:", error);
      })
  };
  useEffect(() => {
    fetchDataAndUpdate();
  }, []);

  // console.log(races[Object.values(races).findIndex((race) => race.key === data.race.name)]?.val.defensive_traits)
  return (
    <Box>
      <ButtonGroup display="flex" justifyContent="space-between">
        <Box></Box>
        <Button onClick={() => console.log(data)}>log</Button>
        <Button
          onClick={() =>
            onNext({
              ...data,
              race: race,
              feats: {
                ...data.feats,
                racefeats: raceFeats,
              }
            })
          }
        >
          Siguiente
        </Button>
      </ButtonGroup>

      <Link href="https://www.d20pfsrd.com/races/"><Heading>Raza</Heading></Link>
      <Text as="i">Introduce el nombre de la raza</Text>
      {/* <Input
        variant="flushed"
        pr="4.5rem"
        placeholder="Raza"
        value={race}
        onChange={handleRaceChange}
      /> */}
      <Select variant="flushed" placeholder='Razas'
        value={race.name}
        onChange={(e) => {
          let indexSelectedRace = Object.values(races).findIndex((race) => race.key === e.target.value)
          let selectedRace: RaceData = races[indexSelectedRace].val
          setRace(selectedRace)
          data.race = selectedRace
        }}>
        {Object.values(races).map((race, index) => (
          <option key={index} value={race.key}>
            {race.key}
          </option>
        ))}
      </Select>
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

      {(raceFeats.length > 0
        || races[Object.values(races).findIndex((race) => race.key === data.race.name)]?.val.defensive_traits?.length > 0
        || races[Object.values(races).findIndex((race) => race.key === data.race.name)]?.val.offensive_traits?.length > 0) && (
          <>
            <TableContainer mt={10}>
              <Table size="sm">
                <Tbody>
                  {races[Object.values(races).findIndex((race) => race.key === data.race.name)]?.val.offensive_traits?.length > 0 && (
                    <><Tr >
                      <Td textAlign={'center'} textTransform={'uppercase'} color={headingColor} borderColor={headingColor} >Ofensivos</Td>
                      <Th borderColor={headingColor}></Th>
                    </Tr>
                      {races[Object.values(races).findIndex((race) => race.key === data.race.name)]?.val.offensive_traits.map((trait: any, index: number) => (
                        <Tr key={index}>
                          <Td whiteSpace="break-spaces">{trait}</Td>
                          <Td textAlign="right">
                            <Button
                              size="xs"
                              onClick={() => handleDeleteRaceFeat(index)} isDisabled
                            >
                              <FaMinus />
                            </Button>
                          </Td>
                        </Tr>
                      ))}
                    </>)}
                  {races[Object.values(races).findIndex((race) => race.key === data.race.name)]?.val.defensive_traits?.length > 0 && (
                    <><Tr>
                      <Td textAlign={'center'} textTransform={'uppercase'} color={headingColor} borderColor={headingColor} pt={10}>Defensivos</Td>
                      <Th borderColor={headingColor}></Th>
                    </Tr>
                      {races[Object.values(races).findIndex((race) => race.key === data.race.name)]?.val.defensive_traits.map((trait: any, index: number) => (
                        <Tr key={index}>
                          <Td whiteSpace="break-spaces">{trait}</Td>
                          <Td textAlign="right">
                            <Button
                              size="xs"
                              onClick={() => handleDeleteRaceFeat(index)} isDisabled
                            >
                              <FaMinus />
                            </Button>
                          </Td>
                        </Tr>
                      ))}
                    </>)}
                  {raceFeats?.length > 0 && (
                    <><Tr>
                      <Td textAlign={'center'} textTransform={'uppercase'} color={headingColor} borderColor={headingColor} pt={10}>Adicionales</Td>
                      <Th borderColor={headingColor}></Th>
                    </Tr>
                      {raceFeats?.map((feat, index) => (
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
                    </>
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </>
        )
      }
    </Box >
  );
};

export default StepRace;
