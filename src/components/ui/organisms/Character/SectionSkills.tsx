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
  Checkbox,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Center,
} from "@chakra-ui/react";

import { useAuth } from "contexts/AuthUserContext";
import { CharacterData } from "@/components/class/characterdata";
import { useRouter } from "next/router";
import { Button as CButton } from "@/components/ui/atoms/Button";

interface CharacterProps {
  CharData: CharacterData;
}

export function SectionSkills({ CharData = new CharacterData() }: CharacterProps) {
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
      <Heading as={'h6'} color={headingColor}><Center>Habilidades</Center></Heading>
      <TableContainer mt={10}>
        <Table size="sm" variant="striped" sx={{ borderCollapse: 'collapse' }}>
          <Thead>
            <Tr>
              <Th>Clase</Th>
              <Th>Habilidad</Th>
              <Th>Total</Th>
              {isWideVersion && (
                <>
                  <Th>Rangos</Th>
                  <Th>Modificadores de raza</Th>
                  <Th>Modificadores de dotes</Th>
                  <Th>Modificador varios</Th>
                </>
              )}
            </Tr>
          </Thead>
          <Tbody>
            {Object.entries(CharData.skills).map(([skilltag, skillData], index) => (
              <Tr key={index}>
                <Td textAlign={'center'} >
                  <Checkbox
                    defaultChecked={skillData.isClassSkill}
                    isDisabled
                  ></Checkbox>
                </Td>
                <Td position={'relative'} whiteSpace="break-spaces">
                  {skillData.name}
                  <Box as="span" position={'absolute'} opacity={0.5} right={0}>
                    {skillData.modStat}
                  </Box>
                </Td>
                <Td textAlign={'center'}>
                  {!skillData.isTrainedRequired ? (
                    skillData.ranks + skillData['mod'].racial + skillData['mod'].trait + skillData['mod'].misc + (skillData.isClassSkill ? 3 : 0) + (CharData.getStatValue ? CharData.getStatValue(skillData?.modStat || '') : 0)
                  ) : (
                    skillData.ranks > 0 ? (
                      skillData.ranks + skillData['mod'].racial + skillData['mod'].trait + skillData['mod'].misc + (skillData.isClassSkill ? 3 : 0) + (CharData.getStatValue ? CharData.getStatValue(skillData?.modStat || '') : 0)
                    ) : (
                      <Box color={'red.300'}>0</Box>
                    )
                  )}
                </Td>

                {isWideVersion && (
                  <>
                    <Td textAlign={'center'}>
                      <NumberInput
                        variant="flushed"
                        value={skillData.ranks}
                        isDisabled
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </Td>
                    <Td textAlign={'center'}>
                      <NumberInput
                        variant="flushed"
                        value={skillData['mod'].racial}
                        isDisabled
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </Td>
                    <Td textAlign={'center'}>
                      <NumberInput
                        variant="flushed"
                        value={skillData['mod'].trait}
                        isDisabled
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </Td>
                    <Td textAlign={'center'}>
                      <NumberInput
                        variant="flushed"
                        value={skillData['mod'].misc}
                        isDisabled
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </Td>
                  </>
                )}
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Clase</Th>
              <Th>Habilidad</Th>
              <Th>Total</Th>
              {isWideVersion && (
                <>
                  <Th>Rangos</Th>
                  <Th>Modificadores de raza</Th>
                  <Th>Modificadores de dotes</Th>
                  <Th>Modificador varios</Th>
                </>
              )}
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </ChakraProvider>
  );
}
