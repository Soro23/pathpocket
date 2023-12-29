// src/pages/edit-character/[characterId].tsx

import { Flex, Heading, Spacer, ButtonGroup, Tabs, TabList, Tab, TabPanels, TabPanel, FormControl, FormLabel, Input, FormErrorMessage, Box, useColorModeValue, Image, Container } from '@chakra-ui/react';
import { Button as CButton } from '@/components/ui/atoms/Button';
import { useRouter } from 'next/router';
import { getUserCharacter } from '@/services/firebase/database';
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthUserContext';
import { NextPage } from 'next';
import { ParsedUrlQuery, stringify } from 'querystring';
import charmock from '@/components/mock/characterinfo.json'


const EditCharacterPage: NextPage = () => {
  const { authUser } = useAuth();
  const [character, setCharacter] = useState<any[]>([]);
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
  if(!isLoading && isError){
    return (
      <h2>Something went wrong</h2>
    )
  }
  // console.log(character.stats)
  return (
    <Box w="full" h="full" p={4} >
      {/* {character.map((charinfo) => ( */}
      <><Flex minWidth='max-content' alignItems='center' gap='2' p={4}>
        <Box p='2'>
          <Heading as='h3' size='lg' style={{ color: headingColor }}>{params.characterId}</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
          <CButton onClick={handleGoBack} cvariant={true}>Volver</CButton>
        </ButtonGroup>
      </Flex><Tabs
        size="md"
        variant="enclosed"
        align="start"
        orientation="horizontal"
        isLazy
        isFitted
      >
          <TabList p={0}>
            <Tab>Basic</Tab>
            <Tab>Ataques</Tab>
            <Tab>Conjuros</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex flexDirection="row" alignItems="stretch">
                <Container maxW={250}>
                  <Image
                    sizes='250px'
                    src={character?.imagesrc}
                    alt={character?.name}
                  />
                </Container>
                <Container>
                  <FormControl display="inline-flex" alignItems={'center'}>
                    <FormLabel display="inline" w={10} py={2}>FUE</FormLabel>
                    <Input size="md" display="inline" value={character.stats?.strength} w={12} mr={3}/>
                    <FormLabel display="inline" w={12} py={2} fontSize={10}>MOD FUE</FormLabel>
                    <Input disabled size="md" display="inline" value={Math.floor(Math.max(-5,(character.stats?.strength-10)/2))} w={12}/>
                  </FormControl>
                  <FormControl display="inline-flex" alignItems={'center'}>
                    <FormLabel display="inline" w={10} py={2}>DES</FormLabel>
                    <Input size="md" display="inline" value={character.stats?.dexterity} w={12}  mr={3}/>
                    <FormLabel display="inline" w={12} py={2} fontSize={10}>MOD DES</FormLabel>
                    <Input disabled size="md" display="inline" value={Math.floor(Math.max(-5, (character.stats?.dexterity-10)/2))} w={12}/>
                  </FormControl>
                  <FormControl display="inline-flex" alignItems={'center'}>
                    <FormLabel display="inline" w={10} py={2}>CON</FormLabel>
                    <Input size="md" display="inline" value={character.stats?.constitution} w={12}  mr={3}/>
                    <FormLabel display="inline" w={12} py={2} fontSize={10}>MOD CON</FormLabel>
                    <Input disabled size="md" display="inline" value={Math.floor(Math.max(-5, (character.stats?.constitution-10)/2))} w={12}/>
                  </FormControl>
                  <FormControl display="inline-flex" alignItems={'center'}>
                    <FormLabel display="inline" w={10} py={2}>INT</FormLabel>
                    <Input size="md" display="inline" value={character.stats?.intelligence} w={12}  mr={3}/>
                    <FormLabel display="inline" w={12} py={2} fontSize={10}>MOD INT</FormLabel>
                    <Input disabled size="md" display="inline" value={Math.floor(Math.max(-5, (character.stats?.intelligence-10)/2))} w={12}/>
                  </FormControl>
                  <FormControl display="inline-flex" alignItems={'center'}>
                    <FormLabel display="inline" w={10} py={2}>SAB</FormLabel>
                    <Input size="md" display="inline" value={character.stats?.wisdom} w={12}  mr={3}/>
                    <FormLabel display="inline" w={12} py={2} fontSize={10}>MOD SAB</FormLabel>
                    <Input disabled size="md" display="inline" value={Math.floor(Math.max(-5, (character.stats?.wisdom-10)/2))} w={12}/>
                  </FormControl>
                  <FormControl display="inline-flex" alignItems={'center'}>
                    <FormLabel display="inline" w={10} py={2}>CAR</FormLabel>
                    <Input size="md" display="inline" value={character.stats?.charisma} w={12}  mr={3}/>
                    <FormLabel display="inline" w={12} py={2} fontSize={10}>MOD CAR</FormLabel>
                    <Input disabled size="md" display="inline" value={Math.floor(Math.max(-5, (character.stats?.charisma-10)/2))} w={12}/>
                  </FormControl>
                </Container>
              </Flex>
            </TabPanel>
            <TabPanel>Two !</TabPanel>
          </TabPanels>
        </Tabs></>
      {/* ))} */}
    </Box>
  );
};

export default EditCharacterPage;