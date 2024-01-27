import type { NextPage } from 'next';
import { Flex, Text } from '@chakra-ui/layout';
import { AbsoluteCenter, Box, Button, Card, CardBody, CardFooter, Center, Divider, Heading, Input, InputGroup, InputRightElement, Select, SimpleGrid, Spacer, Spinner, Stack, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, VStack, useColorModeValue } from '@chakra-ui/react';
import { useAuth } from 'contexts/AuthUserContext';
import { SoroLogo } from '@/utils/soro-logo';
import { ChangeEvent, SetStateAction, useEffect, useState } from 'react';
import { CharacterData } from '@/components/class/characterdata';
import { TopHeader } from '@/components/ui/organisms/Character/TopHeader';
import { createRace, getRaces } from "@/services/firebase/database";


import { useRouter } from 'next/router';
import { RaceData } from '@/components/class/racedata';
import characters from '../../characters';
import { FaPlus, FaMinus } from 'react-icons/fa';


const NewCharacter: NextPage = () => {
    const { authUser } = useAuth();
    const router = useRouter();
    const headingColor = useColorModeValue('maroon', 'wheat');
    const [races, setRaces] = useState<any[]>([]);
    const [raceData, setRaceData] = useState<RaceData>(() => ({
        ...new RaceData(),
    }));
    const [inputLanguage, setLanguage] = useState("")
    const [inputSense, setSense] = useState("")
    const [inputOTrait, setOTrait] = useState("")
    const [inputDTrait, setDTrait] = useState("")
    const [inputFeat, setFeat] = useState("")
    const [inputSpell, setSpell] = useState("")
    const characterData = new CharacterData()


    useEffect(() => {
        getRaces()
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
                console.error("Error fetching characters:", error);
            })
    }, []);




    const createNewRace = (race: RaceData) => {
        if (authUser) {
            createRace(race)
            router.push({
                pathname: "/pathfinder/races/new",
            });
        }
    };
    return (
        <Box w="full" p={4}>
            {races.length > 0 ? (
                <Flex minWidth="max-content" alignItems="center" gap="2" p={4} border={'1px solid ' + headingColor}>
                    <Flex gap={5}>
                        {races.map((race) => (
                            <Card key={race.key} maxW="sm" onClick={() => console.log(race)}>
                                <CardBody>
                                    <Stack mt="6" spacing="3">
                                        <Heading size="md">
                                            <Center>{race.val.name}</Center>
                                        </Heading>
                                    </Stack>
                                </CardBody>
                            </Card>
                        ))}
                    </Flex>
                </Flex>
            ) : (<></>)
            }

            <Box p="2">
                <Heading as="h3" size="lg" style={{ color: headingColor }}>
                    Añadir Raza
                </Heading>
            </Box>
            <Spacer />
            <Flex p={4} gap={4}>
                <VStack flex={1} p={4} border={'1px solid ' +headingColor} borderRadius={4}>
                    <Text as="i">Introduce el nombre de la raza</Text>
                    <Input
                        variant="flushed"
                        pr="4.5rem"
                        placeholder="Raza"
                        value={raceData.name}
                        onChange={(e) => setRaceData(prevRaceData => ({ ...prevRaceData, name: e.target.value }))}
                    />

                </VStack>
                <VStack flex={1} p={4} border={'1px solid ' +headingColor} borderRadius={4}>
                    <Text as="i">Introduce el la categoria de la raza</Text>
                    <Input
                        variant="flushed"
                        pr="4.5rem"
                        placeholder="Categoria"
                        value={raceData.race_category}
                        onChange={(e) => { setRaceData(prevRaceData => ({ ...prevRaceData, race_category: e.target.value })) }}
                    />
                </VStack>
                <VStack flex={1} p={4} border={'1px solid ' +headingColor} borderRadius={4}>
                    <Text as="i">Introduce los puntos de la raza</Text>
                    <Input
                        variant="flushed"
                        pr="4.5rem"
                        placeholder="Raza"
                        value={raceData.race_points}
                        onChange={(e) => { setRaceData(prevRaceData => ({ ...prevRaceData, race_points: +e.target.value })) }}
                    />
                </VStack>
            </Flex>

            <Flex p={4} gap={4}>
                <VStack flex={1} p={4} border={'1px solid ' +headingColor} borderRadius={4}>

                    <Text as="i">Añade caracterisitcas positivas</Text>
                    <Select variant="flushed" placeholder='Puntuaciones Positivas' onChange={(e) => {
                        const ability = e.target.value
                        e.target.value = ''
                        setRaceData(prevRaceData => ({ ...prevRaceData, ability_plus: [...prevRaceData.ability_plus, ability] }))
                    }}>
                        <option value='STR'>STR </option>
                        <option value='DEX'>DEX </option>
                        <option value='CON'>CON</option>
                        <option value='INT'>INT</option>
                        <option value='SAB'>SAB</option>
                        <option value='CAR'>CAR</option>
                    </Select>

                    {raceData.ability_plus.length > 0 && (
                        <TableContainer mt={10}>
                            <Table size="sm" variant='striped'>
                                <Thead>
                                    <Tr>
                                        <Th>ability_plus</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {raceData.ability_plus.map((ability, index) => (
                                        <Tr key={index}>
                                            <Td whiteSpace="break-spaces">{ability}</Td>
                                            <Td textAlign="right"><Button size="xs" onClick={() => setRaceData(prevRaceData => ({ ...prevRaceData, ability_plus: prevRaceData.ability_plus.filter((_: any, i: any) => i !== index) }))} ><FaMinus /></Button></Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    )}
                </VStack>
                <VStack flex={1} p={4} border={'1px solid ' +headingColor} borderRadius={4}>
                    <Text as="i">Añade caracterisitcas negativas</Text>
                    <Select variant="flushed" placeholder='Puntuaciones Negativas' onChange={(e) => {
                        const ability = e.target.value
                        e.target.value = ''
                        setRaceData(prevRaceData => ({ ...prevRaceData, ability_minus: [...prevRaceData.ability_minus, ability] }))
                    }}>
                        <option value='STR'>STR </option>
                        <option value='DEX'>DEX </option>
                        <option value='CON'>CON</option>
                        <option value='INT'>INT</option>
                        <option value='SAB'>SAB</option>
                        <option value='CAR'>CAR</option>
                    </Select>

                    {raceData.ability_minus.length > 0 && (
                        <TableContainer mt={10}>
                            <Table size="sm" variant='striped'>
                                <Thead>
                                    <Tr>
                                        <Th>ability_minus</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {raceData.ability_minus.map((ability, index) => (
                                        <Tr key={index}>
                                            <Td whiteSpace="break-spaces">{ability}</Td>
                                            <Td textAlign="right"><Button size="xs" onClick={() => setRaceData(prevRaceData => ({ ...prevRaceData, ability_minus: prevRaceData.ability_minus.filter((_: any, i: any) => i !== index) }))}><FaMinus /></Button></Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    )}
                </VStack>
            </Flex>
            <Flex p={4} gap={4}>
                <VStack flex={1} p={4} border={'1px solid ' +headingColor} borderRadius={4}>
                    <Text as="span" size='xs'>Tamaño</Text>
                    <Select variant="flushed" placeholder='Elige un tamaño' onChange={(e) => setRaceData(prevRaceData => ({ ...prevRaceData, size: +e.target.value }))} defaultValue={raceData.size}>
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
                </VStack>
                <VStack flex={1} p={4} border={'1px solid ' +headingColor} borderRadius={4}>
                    <Text as="i">Introduce el subtipo de la raza</Text>
                    <Input
                        variant="flushed"
                        pr="4.5rem"
                        placeholder="Subtipo"
                        value={raceData.subtype}
                        onChange={(e) => setRaceData(prevRaceData => ({ ...prevRaceData, subtype: e.target.value }))}
                    />
                </VStack>
                <VStack flex={1} p={4} border={'1px solid ' +headingColor} borderRadius={4}>
                    <Text as="i">Introduce la velocidad de la raza</Text>
                    <Input
                        variant="flushed"
                        pr="4.5rem"
                        placeholder="Velocidad"
                        value={raceData.speed}
                        onChange={(e) => setRaceData(prevRaceData => ({ ...prevRaceData, speed: +e.target.value }))}
                    />
                </VStack>
            </Flex>
            {/* Idiomas */}
            <Flex p={4} gap={4}>
                <VStack flex={1} p={4} border={'1px solid ' +headingColor} borderRadius={4}>
                    <Text as="i">Introduce los idiomas base de la raza</Text>
                    <InputGroup size="md">
                        <Input
                            id='lang'
                            variant="flushed"
                            pr="4.5rem"
                            placeholder="Idiomas"
                            value={inputLanguage}
                            onChange={(e) => setLanguage(e.target.value)}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={() => {
                                if (inputLanguage.trim() !== "") {
                                    setRaceData((prevRaceData) => ({
                                        ...prevRaceData,
                                        languages: [...prevRaceData.languages, inputLanguage],
                                    }));

                                    setLanguage("")
                                }
                            }}>
                                <FaPlus />
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    {raceData.languages.length > 0 && (
                        <TableContainer mt={10}>
                            <Table size="sm" variant='striped'>
                                <Thead>
                                    <Tr>
                                        <Th>Idiomas</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {raceData.languages.map((language, index) => (
                                        <Tr key={index}>
                                            <Td whiteSpace="break-spaces">{language}</Td>
                                            <Td textAlign="right">
                                                <Button size="xs" onClick={() => setRaceData(prevRaceData => ({ ...prevRaceData, languages: prevRaceData.languages.filter((_: any, i: any) => i !== index) }))}><FaMinus /></Button>
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    )}
                </VStack>
                <VStack flex={1} p={4} border={'1px solid ' +headingColor} borderRadius={4}>
                    {/* Senses */}
                    <Text as="i">Introduce los sentidos de la raza</Text>
                    <InputGroup size="md">
                        <Input
                            id='lang'
                            variant="flushed"
                            pr="4.5rem"
                            placeholder="Sentidos"
                            value={inputSense}
                            onChange={(e) => setSense(e.target.value)}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={() => {
                                if (inputSense.trim() !== "") {
                                    setRaceData((prevRaceData) => ({
                                        ...prevRaceData,
                                        senses: [...prevRaceData.senses, inputSense],
                                    }));

                                    setSense("")
                                }
                            }}>
                                <FaPlus />
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    {raceData.senses.length > 0 && (
                        <TableContainer mt={10}>
                            <Table size="sm" variant='striped'>
                                <Thead>
                                    <Tr>
                                        <Th>Sentidos</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {raceData.senses.map((sense, index) => (
                                        <Tr key={index}>
                                            <Td whiteSpace="break-spaces">{sense}</Td>
                                            <Td textAlign="right">
                                                <Button size="xs" onClick={() => setRaceData(prevRaceData => ({ ...prevRaceData, senses: prevRaceData.senses.filter((_: any, i: any) => i !== index) }))}><FaMinus /></Button>
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    )}
                </VStack>
            </Flex>
            <Flex p={4} gap={4}>
                <VStack flex={1} p={4} border={'1px solid ' +headingColor} borderRadius={4}>
                    {/* OTraits */}
                    <Text as="i">Introduce los rasgos ofensivos de la raza</Text>
                    <InputGroup size="md">
                        <Input
                            id='lang'
                            variant="flushed"
                            pr="4.5rem"
                            placeholder="Rasgos ofensivos"
                            value={inputOTrait}
                            onChange={(e) => setOTrait(e.target.value)}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={() => {
                                if (inputOTrait.trim() !== "") {
                                    setRaceData((prevRaceData) => ({
                                        ...prevRaceData,
                                        offensive_traits: [...prevRaceData.offensive_traits, inputOTrait],
                                    }));

                                    setOTrait("")
                                }
                            }}>
                                <FaPlus />
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    {raceData.offensive_traits.length > 0 && (
                        <TableContainer mt={10}>
                            <Table size="sm" variant='striped'>
                                <Thead>
                                    <Tr>
                                        <Th>Rasgos Ofensivos</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {raceData.offensive_traits.map((trait, index) => (
                                        <Tr key={index}>
                                            <Td whiteSpace="break-spaces">{trait}</Td>
                                            <Td textAlign="right">
                                                <Button size="xs" onClick={() => setRaceData(prevRaceData => ({ ...prevRaceData, offensive_traits: prevRaceData.offensive_traits.filter((_: any, i: any) => i !== index) }))}><FaMinus /></Button>
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    )}
                </VStack>
                <VStack flex={1} p={4} border={'1px solid ' +headingColor} borderRadius={4}>
                    {/* DTraits */}
                    <Text as="i">Introduce los rasgos defensivos base de la raza</Text>
                    <InputGroup size="md">
                        <Input
                            id='lang'
                            variant="flushed"
                            pr="4.5rem"
                            placeholder="Rasgos defensivos"
                            value={inputDTrait}
                            onChange={(e) => setDTrait(e.target.value)}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={() => {
                                if (inputDTrait.trim() !== "") {
                                    setRaceData((prevRaceData) => ({
                                        ...prevRaceData,
                                        defensive_traits: [...prevRaceData.defensive_traits, inputDTrait],
                                    }));

                                    setDTrait("")
                                }
                            }}>
                                <FaPlus />
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    {raceData.defensive_traits.length > 0 && (
                        <TableContainer mt={10}>
                            <Table size="sm" variant='striped'>
                                <Thead>
                                    <Tr>
                                        <Th>Rasgos defensivos</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {raceData.defensive_traits.map((trait, index) => (
                                        <Tr key={index}>
                                            <Td whiteSpace="break-spaces">{trait}</Td>
                                            <Td textAlign="right">
                                                <Button size="xs" onClick={() => setRaceData(prevRaceData => ({ ...prevRaceData, defensive_traits: prevRaceData.defensive_traits.filter((_: any, i: any) => i !== index) }))}><FaMinus /></Button>
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    )}
                </VStack>
            </Flex>
            {/* Feats */}
            <Flex p={4} gap={4}>
                <VStack flex={1} p={4} border={'1px solid ' +headingColor} borderRadius={4}>
                    <Text as="i">Introduce los dotes adicionales de la raza</Text>
                    <InputGroup size="md">
                        <Input
                            id='lang'
                            variant="flushed"
                            pr="4.5rem"
                            placeholder="Dotes adicionales"
                            value={inputFeat}
                            onChange={(e) => setFeat(e.target.value)}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={() => {
                                if (inputFeat.trim() !== "") {
                                    setRaceData((prevRaceData) => ({
                                        ...prevRaceData,
                                        feat_bonuses: [...prevRaceData.feat_bonuses, inputFeat],
                                    }));

                                    setFeat("")
                                }
                            }}>
                                <FaPlus />
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    {raceData.feat_bonuses.length > 0 && (
                        <TableContainer mt={10}>
                            <Table size="sm" variant='striped'>
                                <Thead>
                                    <Tr>
                                        <Th>Dotes</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {raceData.feat_bonuses.map((feat, index) => (
                                        <Tr key={index}>
                                            <Td whiteSpace="break-spaces">{feat}</Td>
                                            <Td textAlign="right">
                                                <Button size="xs" onClick={() => setRaceData(prevRaceData => ({ ...prevRaceData, feat_bonuses: prevRaceData.feat_bonuses.filter((_: any, i: any) => i !== index) }))}><FaMinus /></Button>
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    )}
                </VStack>
                <VStack flex={1} p={4} border={'1px solid ' +headingColor} borderRadius={4}>
                    {/* Spell */}
                    <Text as="i">Introduce los conjuros adicionales de la raza</Text>
                    <InputGroup size="md">
                        <Input
                            id='lang'
                            variant="flushed"
                            pr="4.5rem"
                            placeholder="Conjuros Adicionales"
                            value={inputSpell}
                            onChange={(e) => setSpell(e.target.value)}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={() => {
                                if (inputSpell.trim() !== "") {
                                    setRaceData((prevRaceData) => ({
                                        ...prevRaceData,
                                        spell_bonuses: [...prevRaceData.spell_bonuses, inputSpell],
                                    }));

                                    setSpell("")
                                }
                            }}>
                                <FaPlus />
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    {raceData.spell_bonuses.length > 0 && (
                        <TableContainer mt={10}>
                            <Table size="sm" variant='striped'>
                                <Thead>
                                    <Tr>
                                        <Th>Conjuros</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {raceData.spell_bonuses.map((spell, index) => (
                                        <Tr key={index}>
                                            <Td whiteSpace="break-spaces">{spell}</Td>
                                            <Td textAlign="right">
                                                <Button size="xs" onClick={() => setRaceData(prevRaceData => ({ ...prevRaceData, spell_bonuses: prevRaceData.spell_bonuses.filter((_: any, i: any) => i !== index) }))}><FaMinus /></Button>
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    )}
                </VStack>
            </Flex>
            <Flex p={4} gap={4}>
                <VStack flex={1} p={4} border={'1px solid ' +headingColor} borderRadius={4}>
                    <Text as="i">Añade habilidades de classe</Text>
                    <Select variant="flushed" placeholder='Habilidades' onChange={(e) => {
                        let selectedIndex = +e.target.value
                        e.target.value = ''
                        let skill = Object.values(characterData.skills)[selectedIndex]
                        skill.isClassSkill = true
                        setRaceData(prevRaceData => ({ ...prevRaceData, skill_bonuses: [...prevRaceData.skill_bonuses, skill] }))
                    }}>
                        {Object.values(characterData.skills).map((skill, index) => (
                            <option key={index} value={index}>
                                {skill.name}
                            </option>
                        ))}
                    </Select>

                    {raceData.skill_bonuses.length > 0 && (
                        <TableContainer mt={10}>
                            <Table size="sm" variant='striped'>
                                <Thead>
                                    <Tr>
                                        <Th>Habilidades</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {raceData.skill_bonuses.map((skill, index) => (
                                        <Tr key={index}>
                                            <Td whiteSpace="break-spaces">{skill.name}</Td>
                                            <Td textAlign="right"><Button size="xs" onClick={() => setRaceData(prevRaceData => ({ ...prevRaceData, skill_bonuses: prevRaceData.skill_bonuses.filter((_: any, i: any) => i !== index) }))}><FaMinus /></Button></Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    )}
                </VStack>
            </Flex>
            <Flex>
            <Button flex={1} bgColor={headingColor} onClick={() => {
                console.log(raceData)
                createRace(raceData)
            }}>Crear</Button>
            </Flex>

        </Box >
    );
};

export default NewCharacter;

