// src/pages/edit-character/[characterId].tsx

import { Flex, Heading, Spacer, ButtonGroup, Tabs, TabList, Tab, TabPanels, TabPanel, FormControl, FormLabel, Input, FormErrorMessage, Box, useColorModeValue, Image, Container, Text, Badge, Alert, AlertDescription, AlertIcon, AlertTitle, Button, Grid, InputGroup, InputLeftAddon, HStack, VStack, GridItem, FormHelperText, Textarea } from '@chakra-ui/react';
import { Button as CButton } from '@/components/ui/atoms/Button';
import { useRouter } from 'next/router';
import { getUserCharacter } from '@/services/firebase/database';
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthUserContext';
import { NextPage } from 'next';
import { ParsedUrlQuery, stringify } from 'querystring';
import { CharacterData } from '@/components/class/characterdata'



const EditCharacterPage: NextPage = () => {
  const { authUser } = useAuth();
  const [character, setCharacter] = useState<CharacterData>();
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const router = useRouter();
  const params = Array.isArray(router.query) ? router.query[0] : router.query



  useEffect(() => {
    setIsLoading(true)
    if (authUser) {
      getUserCharacter(authUser.uid, params.characterId)
        .then((character) => {
          setCharacter(character);
          console.log(character)
        })
        .catch((error) => {
          // Manejar errores de lectura de la base de datos
          console.error("Error fetching characters:", error);
          setIsError(true)
        });
    }
    setIsLoading(false)
  }, [authUser]);

  // Ejemplo de cómo puedes manejar la navegación
  const handleGoBack = () => {
    router.push('/pathfinder/characters'); // Redirige a la página de personajes después de editar
  };

  const headingColor = useColorModeValue('maroon', 'wheat')


  if (isLoading && !character) {
    return (
      <h2>Loading...</h2>
    )
  }
  if (!isLoading && isError) {
    return (
      <h2>Something went wrong</h2>
    )
  }
  let chardata = new CharacterData()
  chardata.copyFrom(character)

  return (
    <Box w="full" h="full" p={4} >
      <Grid templateColumns="1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr" templateRows="1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr" gap={2} p={5}
        templateAreas={`
        "head head head head head head head head head head head head"
        "stats stats stats stats stats stats stats stats stats stats stats stats"
        "saves saves saves hab hab hab ca ca ca ca ca ca"
        "saves saves saves hab hab hab atk-spell atk-spell atk-spell atk-spell atk-spell atk-spell"
        "feats feats feats hab hab hab atk-spell atk-spell atk-spell atk-spell atk-spell atk-spell"
        "feats feats feats hab hab hab atk-spell atk-spell atk-spell atk-spell atk-spell atk-spell"
        "feats feats feats hab hab hab atk-spell atk-spell atk-spell atk-spell atk-spell atk-spell"
        "feats feats feats hab hab hab atk-spell atk-spell atk-spell atk-spell atk-spell atk-spell"
        "feats feats feats hab hab hab atk-spell atk-spell atk-spell atk-spell atk-spell atk-spell"
        "lang lang lang hab hab hab atk-spell atk-spell atk-spell atk-spell atk-spell atk-spell"
        "lang lang lang hab hab hab atk-spell atk-spell atk-spell atk-spell atk-spell atk-spell"
        "lang lang lang hab hab hab atk-spell atk-spell atk-spell atk-spell atk-spell atk-spell"; 
        `}>
        {/* Fila Imagen */}
        <GridItem area={'head'}>
          <Grid templateColumns="12fr" gap={6} p={5} pb={2} borderBottom="2px solid wheat">
            <Box display="flex" gap={6} justifyContent="space-between">
              <Box display="flex" justifyContent="center" alignItems="center" gap={6}>
                <Image
                  height="100px"
                  width="100px"
                  src="https://firebasestorage.googleapis.com/v0/b/soro-dashboard.appspot.com/o/users%2FdE3IicCMypbQNL0ojqIBdDGXdxE3%2Fpublic%2Fcharacters%2FSaya?alt=media&token=9493848b-b3bf-4122-8a17-af1a62e44a96"
                  fallbackSrc="https://firebasestorage.googleapis.com/v0/b/soro-dashboard.appspot.com/o/users%2FdE3IicCMypbQNL0ojqIBdDGXdxE3%2Fpublic%2Fcharacters%2FT3?alt=media&token=914e6c5d-c018-488a-8b10-ce76f6f0cae3"
                  display="block"
                />
                <Box>
                  <Heading as='h3' size='lg' style={{ color: headingColor }}>{params.characterId}</Heading>
                  <Text>[Raza] - [Clase] - [Nivel Clase]</Text>
                  <Text>[Nivel Total]</Text>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <ButtonGroup gap='2'>
                  <Button variant="solid" size="md">Editar / No Editar</Button>
                  <CButton onClick={handleGoBack} cvariant={true}>Volver</CButton>
                </ButtonGroup>
              </Box>
            </Box>
          </Grid>
        </GridItem>
        {/* Fila Stats */}
        <GridItem area={'stats'} >
          <Grid templateColumns="1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 4fr" gap={6} p={5}>
            <Box >
              <InputGroup border="1px solid white" display="flex" flexDirection="column" alignItems="center">
                <Text fontSize="xs">FUERZA</Text>
                <Text textAlign="center" width={16} fontSize="xl">{(chardata.stats.strength < 10) ? '' : '+'}{Math.floor((chardata.stats.strength - 10) / 2)}</Text>
                <Input value={chardata.stats.strength} variant='filled' textAlign="center" width={14} fontSize="md" />
              </InputGroup>
            </Box>
            <Box>
              <InputGroup border="1px solid white" display="flex" flexDirection="column" alignItems="center">
                <Text fontSize="xs">DESTREZA</Text>
                <Text textAlign="center" width={16} fontSize="xl">{chardata.stats.dexterity < 10 ? '' : '+'}{Math.floor((chardata.stats.dexterity - 10) / 2)}</Text>
                <Input value={chardata.stats.dexterity} variant='filled' textAlign="center" width={14} fontSize="md" />
              </InputGroup>
            </Box>
            <Box>
              <InputGroup border="1px solid white" display="flex" flexDirection="column" alignItems="center">
                <Text fontSize="xs">CONSTITUCION</Text>
                <Text textAlign="center" width={16} fontSize="xl">{chardata.stats.constitution < 10 ? '' : '+'}{Math.floor((chardata.stats.constitution - 10) / 2)}</Text>
                <Input variant='filled' value={chardata.stats.constitution} textAlign="center" width={14} fontSize="md" />
              </InputGroup>
            </Box>
            <Box>
              <InputGroup border="1px solid white" display="flex" flexDirection="column" alignItems="center">
                <Text fontSize="xs">INTELIGENCIA</Text>
                <Text textAlign="center" width={16} fontSize="xl">{chardata.stats.intelligence < 10 ? '' : '+'}{Math.floor((chardata.stats.intelligence - 10) / 2)}</Text>
                <Input variant='filled' value={chardata.stats.intelligence} textAlign="center" width={14} fontSize="md" />
              </InputGroup>
            </Box>
            <Box>
              <InputGroup border="1px solid white" display="flex" flexDirection="column" alignItems="center">
                <Text fontSize="xs">SABIDURIA</Text>
                <Text textAlign="center" width={16} fontSize="xl">{chardata.stats.wisdom < 10 ? '' : '+'}{Math.floor((chardata.stats.wisdom - 10) / 2)}</Text>
                <Input variant='filled' value={chardata.stats.wisdom} textAlign="center" width={14} fontSize="md" />
              </InputGroup>
            </Box>
            <Box>
              <InputGroup border="1px solid white" display="flex" flexDirection="column" alignItems="center">
                <Text fontSize="xs">CARISMA</Text>
                <Text textAlign="center" width={16} fontSize="xl">{chardata.stats.charisma < 10 ? '' : '+'}{Math.floor((chardata.stats.charisma - 10) / 2)}</Text>
                <Input variant='filled' value={chardata.stats.charisma} textAlign="center" width={14} fontSize="md" />
              </InputGroup>
            </Box>
            <Box />
            <Box />
            <HStack border="1px solid white" p={5}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Button variant="outline" size="xs" width={100} backgroundColor='green.500'>CURAR</Button>
                <Input fontSize="xs" width={100} />
                <Button variant="outline" size="xs" width={100} backgroundColor='red.500'>DAÑAR</Button>
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center" width={100} flex={1}>
                <Heading as='h3' size='2xl' style={{ color: headingColor }}>11/11</Heading>
              </Box>
            </HStack>
          </Grid>
        </GridItem>
        {/* Fila Stats */}
        <GridItem area={'saves'}>
          <FormControl
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Box
              display="block"
              flexDirection="column"
              alignItems="flex-start"
              p={2}
              minWidth={120}
              textAlign="center"
            >
              <FormLabel width="100%" textAlign="center">
                FORTALEZA
              </FormLabel>
              <FormHelperText fontSize="xs" textAlign="center">
                CON
              </FormHelperText>
            </Box>
            <Box>
              <Input width={14} />
            </Box>
          </FormControl>
          <FormControl
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Box
              display="block"
              flexDirection="column"
              alignItems="flex-start"
              p={2}
              minWidth={120}
              textAlign="center"
            >
              <FormLabel width="100%" textAlign="center">
                REFLEJOS
              </FormLabel>
              <FormHelperText fontSize="xs" textAlign="center">
                DES
              </FormHelperText>
            </Box>
            <Box>
              <Input width={14} />
            </Box>
          </FormControl>
          <FormControl
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Box
              display="block"
              flexDirection="column"
              alignItems="flex-start"
              p={2}
              minWidth={120}
            >
              <FormLabel width="100%" textAlign="center">
                VOLUNTAD
              </FormLabel>
              <FormHelperText fontSize="xs" textAlign="center">
                SAB
              </FormHelperText>
            </Box>
            <Box>
              <Input width={14} />
            </Box>
          </FormControl>
          <Textarea rows={5} placeholder='Bonificaciones de salvaciones' />
        </GridItem>
        <GridItem pl='2' bg='orange.300' area={'ca'}>
          ca
        </GridItem>
        <GridItem pl='2' bg='orange.300' area={'atk-spell'}>
          atk-spell
        </GridItem>
        <GridItem pl='2' bg='orange.300' area={'hab'}>
          hab
        </GridItem>
        <GridItem area={'feats'}>
          <Textarea rows={5} placeholder='Dotes' />
        </GridItem>
        <GridItem area={'lang'}>
          <Textarea rows={5} placeholder='Idiomas' />
        </GridItem>

      </Grid>
    </Box>
  )
};

export default EditCharacterPage;