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
  Icon,
} from "@chakra-ui/react";

import { useAuth } from "contexts/AuthUserContext";
import { CharacterData } from "@/components/class/characterdata";
import { useRouter } from "next/router";
import { Button as CButton } from "@/components/ui/atoms/Button";
import { useState } from "react";
import { RiArrowLeftDoubleLine } from "react-icons/ri";

interface CharacterProps {
  CharData: CharacterData;
}

export function TopHeader({ CharData = new CharacterData() }: CharacterProps) {
  const { authUser, signOut, loading: loadingAuth } = useAuth();
  const headingColor = useColorModeValue("maroon", "wheat");
  const router = useRouter();
  const handleGoBack = () => {
    router.push("/pathfinder/characters"); // Redirige a la página de personajes después de editar
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  const level = 0;

  return (
    <ChakraProvider resetCSS>
      {/* Mobil */}
      {!isWideVersion ? (
        <Flex justifyContent="space-between" px={3}>
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <Avatar src={CharData.imagesrc} />
            <Flex flexDirection="column" px={2} py={2}>
              <Heading as="h3" size="lg" style={{ color: headingColor }}>
                {CharData.name}
              </Heading>
              <Text fontSize={"xs"}>
                {CharData.race} -{" "}
                {CharData.class.map((cl, i) => {
                  return (
                    cl +
                    " " +
                    CharData.class_level[i] +
                    (CharData.class.length - 1 <= i ? "" : " | ")
                  );
                })}
              </Text>
              <Text fontSize={"small"}>
                Nivel{" "}
                {CharData.class_level.reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  level
                )}
              </Text>
            </Flex>
          </Box>
          <Box display="flex" alignItems="center">
            <CButton onClick={handleGoBack} cvariant={true}>
              <RiArrowLeftDoubleLine />
            </CButton>
          </Box>
        </Flex>
      ) : (
        <Flex justifyContent="space-between" p={5}>
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <Avatar src={CharData.imagesrc} />
            <Flex flexDirection="column" p={5}>
              <Heading as="h3" size="lg" style={{ color: headingColor }}>
                {CharData.name}
              </Heading>
              <Text fontSize={"xs"}>
                {CharData.race} -{" "}
                {CharData.class.map((cl, i) => {
                  return (
                    cl +
                    " " +
                    CharData.class_level[i] +
                    (CharData.class.length - 1 <= i ? "" : " | ")
                  );
                })}
              </Text>
              <Text fontSize={"small"}>
                Nivel{" "}
                {CharData.class_level.reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  level
                )}
              </Text>
            </Flex>
          </Box>
          <Box display="flex" alignItems="center">
            <ButtonGroup gap="2">
              <CButton onClick={handleGoBack} cvariant={true}>
                Volver
              </CButton>
            </ButtonGroup>
          </Box>
        </Flex>
      )}
    </ChakraProvider>
  );
}
