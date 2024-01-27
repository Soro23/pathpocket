import type { NextPage } from 'next';
import { Flex, Text } from '@chakra-ui/layout';
import { Box, Button, Card, CardBody, Center, Heading, Input, InputGroup, InputRightElement, Select, SimpleGrid, Spacer, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr, VStack, useColorModeValue } from '@chakra-ui/react';
import { useAuth } from 'contexts/AuthUserContext';
import { CharacterData } from '@/components/class/characterdata';
import { createRace, getRaces } from "@/services/firebase/database";


import { useRouter } from 'next/router';
import { RaceData } from '@/components/class/racedata';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useEffect, useState } from 'react';


const Races: NextPage = () => {
    const { authUser } = useAuth();
    const router = useRouter();
    const headingColor = useColorModeValue('maroon', 'wheat');
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
                console.error("Error fetching characters:", error);
            })
    };
    useEffect(() => {
        fetchDataAndUpdate();
    }, []);

    return (
        <Box w="full" p={4}>
            <Box p="2">
                <Heading as="h3" size="lg" style={{ color: headingColor }}>
                    Razas
                </Heading>
            </Box>
            <Flex p={4}>
                <Button flex={1} bgColor={headingColor} onClick={() => {
                    router.push('/pathfinder/races/new')
                }}>Añadir/Editar Raza</Button>
            </Flex>
            {races.length > 0 && (
                <Flex alignItems="center" gap="2" p={4} border={'1px solid ' + headingColor}>
                    <SimpleGrid gap={5} columns={6}>
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
                    </SimpleGrid>
                </Flex>
            )}
        </Box >
    );
};

export default Races;

