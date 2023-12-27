import type { NextPage } from 'next'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, SimpleGrid, Stack, Image, Text, Center } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthUserContext";
import { getUserCharacters } from "@/services/firebase/database";
import CharacterAvatarEditor from '@/components/ui/molecules/CharacterAvatarEditor';

const Characters: NextPage = () => {
  const { authUser } = useAuth();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (authUser) {
      getUserCharacters(authUser.uid)
        .then((characters) => {
          if (Array.isArray(characters)) {
            setCharacters(characters);
          } else {
            const charactersArray = Object.entries(characters).map(([key, val]) => ({ key, val }));
            setCharacters(charactersArray);
          }
        })
        .catch((error) => {
          // Manejar errores de lectura de la base de datos
          console.error("Error fetching characters:", error);
        });
    }
  }, [authUser]);

  // Renderizar la lista de personajes en tu componente

  return (
    <Box w="full">
      <Heading as='h4' size='md'>
        Characters
      </Heading>
      <SimpleGrid columns={5} spacing={10}>
        {characters.map((character) => (
          <Card maxW='sm'>
            <CardBody>
              <Image
                src={character.val.imagesrc}
                alt={character.val.name}
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'><Center>{character.val.name}</Center></Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button variant='ghost' colorScheme='blue'>
                Edit
              </Button>
              <CharacterAvatarEditor name={character.val.name} />
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box >
  );
}

export default Characters;
