import type { NextPage } from "next";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  SimpleGrid,
  Stack,
  Image,
  Text,
  Center,
  IconButton,
  useColorModeValue,
  Flex,
  Spacer,
  color,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthUserContext";
import { getUserCharacters } from "@/services/firebase/database";
import CharacterAvatarEditor from "@/components/ui/molecules/CharacterAvatarEditor";
import { CharacterData } from "@/components/class/characterdata";
import { Button as CButton } from "@/components/ui/atoms/Button";
import { RiAddFill } from "react-icons/ri";
import { useRouter } from "next/router";

const Characters: NextPage = () => {
  const { authUser } = useAuth();
  const [characters, setCharacters] = useState<any[]>([]);
  const router = useRouter();

  const gColumns = useBreakpointValue({
    base: 2,
    md: 3,
    lg: 5,
  });

  useEffect(() => {
    if (authUser) {
      getUserCharacters(authUser.uid)
        .then((characters) => {
          if (Array.isArray(characters)) {
            setCharacters(characters);
          } else {
            // const charactersArray = Object.entries(characters).map(
            //   ([key, val]) => ({ key, val })
            // );

            // Creas un nuevo array de objetos CharacterData utilizando Object.entries y el método map.
            const charactersArray = Object.entries(characters).map(
              // Para cada entrada (key, val) del objeto 'characters', se crea un nuevo objeto CharacterData.
              ([key, val]) => {
                let oldval = val;
                val = new CharacterData();
                // Se utiliza el método copyFrom para copiar las propiedades de 'val' al nuevo objeto CharacterData.
                val.copyFrom(oldval as CharacterData | undefined);
                return { key, val };
              }
            );
            setCharacters(charactersArray);
          }
        })
        .catch((error) => {
          // Manejar errores de lectura de la base de datos
          console.error("Error fetching characters:", error);
        });
    }
  }, [authUser]);

  const headingColor = useColorModeValue("maroon", "wheat");

  const navigateToEditPage = (characterId: string) => {
    router.push(`/pathfinder/characters/${characterId}`);
  };
  const logthis = (log: any) => {
    console.log(log);
  };

  return (
    <Box w="full" p={4}>
      <Flex minWidth="max-content" alignItems="center" gap="2" p={4}>
        <Box p="2">
          <Heading as="h3" size="lg" style={{ color: headingColor }}>
            Personajes
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <CButton cvariant={true} rightIcon={<RiAddFill />}>
            Nuevo
          </CButton>
        </ButtonGroup>
      </Flex>
      <SimpleGrid columns={gColumns} spacing={5}>
        {characters.map((character) => (
          <Card key={character.key} maxW="sm">
            <CardBody>
              <Image
                src={character.val.imagesrc}
                alt={character.val.name}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" onClick={() => logthis(character)}>
                  <Center>{character.val.name}</Center>
                </Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter minWidth="max-content" justify={"space-between"}>
              <CButton onClick={() => navigateToEditPage(character.key)}>
                Edit
              </CButton>
              <CharacterAvatarEditor name={character.val.name} />
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Characters;
