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
  const [name, setName] = useState(data.name);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleGoldChange = (value:any) => {

  }
  return (
    <Box>
      <ButtonGroup display="flex" justifyContent="space-between">
        <Button
          onClick={() =>
            onPrev({
              ...data,
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
            <Input placeholder="Nombre" value={name} onChange={handleChange} />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton justifyContent='flex-end'>
            <Box as="span" flex='1' textAlign='left' justifySelf='flex-start'>
              Dinero
            </Box>
            <Box as="span" flex='1' textAlign='right'>
              Total en Oro
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <HStack justifyContent={"space-between"}>
              <Box as="span">
                Platino
              </Box>
              <NumberInput
                variant="flushed"
                value={data.gold}
                onChange={(value) => handleGoldChange(value)}
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
