import type { NextPage } from 'next'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, SimpleGrid, Stack, Image, Text, Center, IconButton, useColorModeValue, Flex, Spacer, color } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthUserContext";
import { getUserCharacters } from "@/services/firebase/database";
import CharacterAvatarEditor from '@/components/ui/molecules/CharacterAvatarEditor';
import { Button as CButton } from '@/components/ui/atoms/Button';
import { RiAddFill } from 'react-icons/ri';
import { useRouter } from 'next/router';



const Characters: NextPage = () => {
  const { authUser } = useAuth();
  const [characters, setCharacters] = useState<any[]>([]);
  const router = useRouter();

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

  const headingColor = useColorModeValue('maroon', 'wheat')

  const navigateToEditPage = (characterId: string) => {
    router.push(`/pathfinder/characters/${characterId}`);
  };

  return (
    <Box w="full" p={4}>
      <Flex minWidth='max-content' alignItems='center' gap='2' p={4}>
        <Box p='2'>
          <Heading as='h3' size='lg' style={{ color: headingColor }}>Personajes</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
          <CButton cvariant={true} rightIcon={<RiAddFill />}>Nuevo</CButton>
        </ButtonGroup>
      </Flex>
      <SimpleGrid columns={5} spacing={10}>
        {characters.map((character) => (
          <Card key={character.key} maxW='sm'>
            <CardBody>
              <Image
                src={character.val.imagesrc ?? 'https://firebasestorage.googleapis.com/v0/b/soro-dashboard.appspot.com/o/users%2FdE3IicCMypbQNL0ojqIBdDGXdxE3%2Fpublic%2Fcharacters%2FT3?alt=media&token=914e6c5d-c018-488a-8b10-ce76f6f0cae3'}
                alt={character.val.name}
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'><Center>{character.val.name}</Center></Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter minWidth='max-content' justify={'space-between'}>
              <CButton onClick={() => navigateToEditPage(character.key)}>Edit</CButton>
              <CharacterAvatarEditor name={character.val.name} />
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box >
  );
}

export default Characters;
