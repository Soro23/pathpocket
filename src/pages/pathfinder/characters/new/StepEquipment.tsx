import { Box, Heading, Input, Button, ButtonGroup, Image, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, HStack, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, InputGroup, InputRightElement, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { FC, ChangeEvent, useState } from "react";
import { CharacterData } from "@/components/class/characterdata";
import CharacterAvatarEditor from "@/components/ui/molecules/CharacterAvatarEditor";
import { FaPlus, FaMinus } from "react-icons/fa";

interface StepEquipmentProps {
  onNext: (data: CharacterData) => void;
  onPrev: (data: CharacterData) => void;
  data: CharacterData;
}

const StepEquipment: FC<StepEquipmentProps> = ({ onNext, onPrev, data }) => {


  const [equipment, setEquipment] = useState(data.equipment);
  const [inputEquipment, setEquip] = useState("");
  const nuevoEquipo = () => {
    if (inputEquipment.trim() !== "") {
      setEquipment((prevEquipment) => [
        ...prevEquipment,
        inputEquipment.trim(),
      ]);
      setEquip("");
    }
  };
  const handleDeleteEquipment = (indexToDelete: number) => {
    setEquipment((prevEquipment) =>
      prevEquipment.filter((_, index) => index !== indexToDelete)
    );
  };
  const hasEquipment = equipment.length > 0;


  const [money, setMoney] = useState(data.money);
  const [totalGold, setTotalGold] = useState(0);
  const handleCooperChange = (v: number): void => { setMoney((prevMoney) => ({ ...prevMoney, cooper: +v, })); handleTotalGold() }
  const handleSilverChange = (v: number): void => { setMoney((prevMoney) => ({ ...prevMoney, silver: +v, })); handleTotalGold() }
  const handleGoldChange = (v: number): void => { setMoney((prevMoney) => ({ ...prevMoney, gold: +v, })); handleTotalGold() }
  const handlePlatiniumChange = (v: number): void => { setMoney((prevMoney) => ({ ...prevMoney, platinium: +v, })); handleTotalGold() }
  const handleTotalGold = (): void => {
    setTotalGold((Math.floor((money.cooper / 100) + (money.silver / 10) + money.gold + (money.platinium * 10))))
  }

  return (
    <Box>
      <ButtonGroup display="flex" justifyContent="space-between">
        <Button
          onClick={() =>
            onPrev({
              ...data,
              equipment: equipment,
              money: money,
              copyFrom: (): void => {
                throw new Error("Function not implemented.");
              },
            })
          }
        >
          Atrás
        </Button>
        <Button onClick={() => console.log(data)}>log</Button>
        <Button
          onClick={() =>
            onNext({
              ...data,
              equipment: equipment,
              money: money,
              copyFrom: (): void => {
                throw new Error("Function not implemented.");
              },
            })
          }
        >
          Siguiente
        </Button>
      </ButtonGroup>
      <Heading>Equipación</Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <HStack>
              <Box as="span" flex='1' textAlign='left'>
                Equipo
              </Box>
            </HStack>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <InputGroup size="md">
              <Input
                variant="flushed"
                pr="4.5rem"
                placeholder="Equipación"
                value={inputEquipment}
                onChange={(e) => setEquip(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={() => nuevoEquipo()}>
                  <FaPlus />
                </Button>
              </InputRightElement>
            </InputGroup>

            {hasEquipment ? (
              <>
                <TableContainer mt={10}>
                  <Table size="sm">
                    <Thead>
                      <Tr>
                        <Th>Equipación</Th>
                        <Th></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {equipment.map((equip, index) => (
                        <Tr key={index}>
                          <Td whiteSpace="break-spaces">{equip}</Td>
                          <Td textAlign="right">
                            <Button
                              size="xs"
                              onClick={() => handleDeleteEquipment(index)}
                            >
                              <FaMinus />
                            </Button>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                    <Tfoot>
                      <Tr>
                        <Th>Equipación</Th>
                      </Tr>
                    </Tfoot>
                  </Table>
                </TableContainer>
              </>
            ) : (
              <></>
            )}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton justifyContent='flex-end'>
            <Box as="span" flex='1' textAlign='left' justifySelf='flex-start'>
              Dinero
            </Box>
            <Box as="span" flex='1' textAlign='right'>
              Total en Oro
              <Box as="b" flex='1' textAlign='right'> {totalGold}</Box>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <HStack justifyContent={"space-between"}>
              <Box as="span">
                Cobre
              </Box>
              <NumberInput
                variant="flushed"
                value={money.cooper}
                onChange={(v) => handleCooperChange(v)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </HStack>
          </AccordionPanel>
          <AccordionPanel>
            <HStack justifyContent={"space-between"}>
              <Box as="span">
                Plata
              </Box>
              <NumberInput
                variant="flushed"
                value={money.silver}
                onChange={(v) => handleSilverChange(v)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </HStack>
          </AccordionPanel>
          <AccordionPanel>
            <HStack justifyContent={"space-between"}>
              <Box as="span">
                Oro
              </Box>
              <NumberInput
                variant="flushed"
                value={money.gold}
                onChange={(v) => handleGoldChange(v)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </HStack>
          </AccordionPanel>
          <AccordionPanel>
            <HStack justifyContent={"space-between"}>
              <Box as="span">
                Platino
              </Box>
              <NumberInput
                variant="flushed"
                value={money.platinium}
                onChange={(v) => handlePlatiniumChange(v)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </HStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default StepEquipment;
