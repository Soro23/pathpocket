import {
  Flex,
  Box,
  Text,
  Avatar,
  Button,
  ButtonGroup,
  Heading,
  useColorModeValue,
  ChakraProvider,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useAuth } from "contexts/AuthUserContext";
import { CharacterData } from "@/components/class/characterdata";
import { useRouter } from "next/router";
import { Button as CButton } from "@/components/ui/atoms/Button";

interface CharacterProps {
  CharData: CharacterData;
}

export function Header({ CharData = new CharacterData() }: CharacterProps) {
  const { authUser, signOut, loading: loadingAuth } = useAuth();
  const headingColor = useColorModeValue("maroon", "wheat");
  const textColor = useColorModeValue("white", "black");
  const router = useRouter();
  const handleGoBack = () => {
    router.push("/pathfinder/characters"); // Redirige a la página de personajes después de editar
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <ChakraProvider resetCSS>
      {/* Mobil */}
      {!isWideVersion ? (
        <Flex justifyContent="space-around" px={3} backgroundColor={headingColor} color={textColor}>
          <Flex flexDirection="column-reverse" alignItems="center" w={24} p={2}>
            <Heading as="h6" size="lg">{CharData.race.speed}</Heading>
            <Text fontSize={'xs'} textAlign={"center"}>Velocidad movimiento</Text>
          </Flex>
          <Flex flexDirection="column-reverse" alignItems="center" w={24} p={2}>
            <Heading as="h6" size="lg">{CharData.stats.dexterity < 10 ? "" : "+"}{Math.floor((CharData.stats.dexterity - 10) / 2)}</Heading>
            <Text fontSize={'xs'} textAlign={"center"}>Iniciativa</Text>
          </Flex>
          <Flex flexDirection="column-reverse" alignItems="center" w={24} p={2}>
            <Heading as="h6" size="lg">{CharData.armor_class}</Heading>
            <Text fontSize={'xs'} textAlign={"center"}>CA</Text>
          </Flex>
          <Flex flexDirection="column-reverse" alignItems="center" w={24} p={2}>
            <Heading as="h6" size="lg">{CharData.hit_points}</Heading>
            <Text fontSize={'xs'} textAlign={"center"}>PG</Text>
          </Flex>
        </Flex>
      ) : (
        <Flex justifyContent="space-between" p={5}>
          <Flex flexDirection="column" alignItems="center">
            <Text fontSize="lg">Velocidad de movimiento</Text>
            <Heading as="h6" size="lg">
              {CharData.race.speed}
            </Heading>
          </Flex>
          <Flex flexDirection="column" alignItems="center">
            <Text fontSize="lg">Iniciativa</Text>
            <Heading as="h6" size="lg">
              {CharData.stats.dexterity < 10 ? "" : "+"}
              {Math.floor((CharData.stats.dexterity - 10) / 2)}
            </Heading>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Text fontSize="lg">CA</Text>
            <Heading as="h6" size="lg">
              {CharData.armor_class}
            </Heading>
          </Flex>
        </Flex>
      )}
    </ChakraProvider>
  );
}
