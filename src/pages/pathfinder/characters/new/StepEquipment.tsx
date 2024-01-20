import { Box, Heading, Input, Button, ButtonGroup, Image, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, HStack, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";
import { FC, ChangeEvent, useState } from "react";
import { CharacterData } from "@/components/class/characterdata";
import CharacterAvatarEditor from "@/components/ui/molecules/CharacterAvatarEditor";

interface StepEquipmentProps {
  onNext: (data: CharacterData) => void;
  onPrev: (data: CharacterData) => void;
  data: CharacterData;
}

const StepEquipment: FC<StepEquipmentProps> = ({ onNext, onPrev, data }) => {
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
            <Input placeholder="Nombre" />
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
