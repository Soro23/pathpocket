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
  Spacer,
  Divider,
} from "@chakra-ui/react";

import { useAuth } from "contexts/AuthUserContext";
import { CharacterData } from "@/components/class/characterdata";
import { useRouter } from "next/router";
import { Button as CButton } from "@/components/ui/atoms/Button";

interface CharacterProps {
  CharData: CharacterData;
}

export function SectionStats({ CharData = new CharacterData() }: CharacterProps) {
  const { authUser, signOut, loading: loadingAuth } = useAuth();
  const headingColor = useColorModeValue("maroon", "wheat");
  const textColor = useColorModeValue("white", "black");
  const rTextColor = useColorModeValue("black", "white");
  const router = useRouter();
  const handleGoBack = () => {
    router.push("/pathfinder/characters"); // Redirige a la página de personajes después de editar
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const modSTR = (Math.floor((CharData.stats.strength - 10) / 2))
  const modDEX = (Math.floor((CharData.stats.dexterity - 10) / 2))
  const modCON = (Math.floor((CharData.stats.constitution - 10) / 2))
  const modINT = (Math.floor((CharData.stats.intelligence - 10) / 2))
  const modWIS = (Math.floor((CharData.stats.wisdom - 10) / 2))
  const modCHA = (Math.floor((CharData.stats.charisma - 10) / 2))

  return (
    <ChakraProvider resetCSS>
      {/* Mobil */}
      {!isWideVersion ? (
        <><Flex justifyContent="space-around" p={6} color={textColor}>
          <Flex flexDirection="column-reverse" alignItems="center" w={24} p={2} border={'1px solid ' + headingColor} rounded={20} color={rTextColor}>
            <Heading as="h6" size="lg">{CharData.stats.strength < 10 ? "" : "+"}{modSTR}</Heading>
            <Text fontSize={'xs'} textAlign={"center"}>FUE</Text>
            <Text fontSize={'xs'} textAlign={"center"}>{CharData.stats.strength}</Text>
          </Flex>
          <Flex flexDirection="column-reverse" alignItems="center" w={24} p={2} border={'1px solid ' + headingColor} rounded={20} color={rTextColor}>
            <Heading as="h6" size="lg">{CharData.stats.dexterity < 10 ? "" : "+"}{modDEX}</Heading>
            <Text fontSize={'xs'} textAlign={"center"}>DEX</Text>
            <Text fontSize={'xs'} textAlign={"center"}>{CharData.stats.dexterity}</Text>
          </Flex>
          <Flex flexDirection="column-reverse" alignItems="center" w={24} p={2} border={'1px solid ' + headingColor} rounded={20} color={rTextColor}>
            <Heading as="h6" size="lg">{CharData.stats.constitution < 10 ? "" : "+"}{modCON}</Heading>
            <Text fontSize={'xs'} textAlign={"center"}>CON</Text>
            <Text fontSize={'xs'} textAlign={"center"}>{CharData.stats.constitution}</Text>
          </Flex>
        </Flex>
          <Flex justifyContent="space-around" p={6} color={textColor}>
            <Flex flexDirection="column-reverse" alignItems="center" w={24} p={2} border={'1px solid ' + headingColor} rounded={20} color={rTextColor}>
              <Heading as="h6" size="lg">{CharData.stats.intelligence < 10 ? "" : "+"}{modINT}</Heading>
              <Text fontSize={'xs'} textAlign={"center"}>INT</Text>
              <Text fontSize={'xs'} textAlign={"center"}>{CharData.stats.intelligence}</Text>
            </Flex>
            <Flex flexDirection="column-reverse" alignItems="center" w={24} p={2} border={'1px solid ' + headingColor} rounded={20} color={rTextColor}>
              <Heading as="h6" size="lg">{CharData.stats.wisdom < 10 ? "" : "+"}{modWIS}</Heading>
              <Text fontSize={'xs'} textAlign={"center"}>SAB</Text>
              <Text fontSize={'xs'} textAlign={"center"}>{CharData.stats.wisdom}</Text>
            </Flex>
            <Flex flexDirection="column-reverse" alignItems="center" w={24} p={2} border={'1px solid ' + headingColor} rounded={20} color={rTextColor}>
              <Heading as="h6" size="lg">{CharData.stats.charisma < 10 ? "" : "+"}{modCHA}</Heading>
              <Text fontSize={'xs'} textAlign={"center"}>CAR</Text>
              <Text fontSize={'xs'} textAlign={"center"}>{CharData.stats.charisma}</Text>
            </Flex>
          </Flex>
          <Divider backgroundColor={headingColor} p={0.5}></Divider>
          <Flex alignItems={'center'} flexDirection={"column"} gap={3} p={6} color={textColor}>
            <Flex justifyContent={'center'} alignItems="center" w={32} p={2} border={'1px solid ' + headingColor} rounded={20} color={rTextColor}>
              <Text fontSize={'xs'} textAlign={"center"}>FORTALEZA</Text>
              <Heading as="h6" size="lg">{CharData.stats.constitution < 10 ? "" : "+"}{modCON + CharData.saving_throws.fortitude}</Heading>
            </Flex>
            <Flex justifyContent={'center'} alignItems="center" w={32} p={2} border={'1px solid ' + headingColor} rounded={20} color={rTextColor}>
              <Text fontSize={'xs'} textAlign={"center"}>REFLEJOS</Text>
              <Heading as="h6" size="lg">{CharData.stats.dexterity < 10 ? "" : "+"}{modDEX + CharData.saving_throws.reflex}</Heading>
            </Flex>
            <Flex justifyContent={'center'} alignItems="center" w={32} p={2} border={'1px solid ' + headingColor} rounded={20} color={rTextColor}>
              <Text fontSize={'xs'} textAlign={"center"}>VOLUNTAD</Text>
              <Heading as="h6" size="lg">{CharData.stats.wisdom < 10 ? "" : "+"}{modWIS + CharData.saving_throws.will}</Heading>
            </Flex>
          </Flex>
        </>
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
