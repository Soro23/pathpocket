import {
  Box,
  Heading,
  Input,
  Button,
  ButtonGroup,
  Text,
  InputGroup,
  InputRightElement,
  ListItem,
  UnorderedList,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC, ChangeEvent, useState } from "react";
import { CharacterData } from "@/components/class/characterdata";
import CharacterAvatarEditor from "@/components/ui/molecules/CharacterAvatarEditor";
import { FaMinus, FaPlus } from "react-icons/fa";

interface StepClassProps {
  onNext: (data: CharacterData) => void;
  onPrev: (data: CharacterData) => void;
  data: CharacterData;
}

const StepClass: FC<StepClassProps> = ({ onNext, onPrev, data }) => {
  const [classList, setClassList] = useState(data.class);
  const [classLevelList, setClassLevelList] = useState(data.class_level);
  const [inputNewClass, setNewClass] = useState<string>("");
  const [inputNewClassLevel, setNewClassLevel] = useState<number>(1);

  const newClass = () => {
    if (inputNewClass.trim() !== "") {
      setClassList((prevClass) => [...prevClass, inputNewClass.trim()]);
      setClassLevelList((prevClassLevel) => [
        ...prevClassLevel,
        inputNewClassLevel,
      ]);
      setNewClass("");
      setNewClassLevel(1);
    }
  };

  function handleDeleteClass(indexToDelete: number): void {
    setClassList((prevClass) =>
      prevClass.filter((_, index) => index !== indexToDelete)
    );
    setClassLevelList((prevClassLevel) =>
      prevClassLevel.filter((_, index) => index !== indexToDelete)
    );
  }

  const totalClassLevel = classLevelList.reduce((acc, level) => acc + level, 0);
  const hasClassList = classList.length > 0;
  return (
    <Box>
      <ButtonGroup display="flex" justifyContent="space-between">
        <Button
          onClick={() =>
            onPrev({
              ...data,
              class: classList,
              class_level: classLevelList,
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
              class: classList,
              class_level: classLevelList,
              copyFrom: (): void => {
                throw new Error("Function not implemented.");
              },
            })
          }
        >
          Siguiente
        </Button>
      </ButtonGroup>
      <Heading>Clases</Heading>
      <Text as="i">Añade clases</Text>
      <HStack>
        <Input
          variant="flushed"
          pr="4.5rem"
          placeholder="Clase"
          value={inputNewClass}
          onChange={(e) => setNewClass(e.target.value)}
        />
        <NumberInput
          value={inputNewClassLevel}
          onChange={(v, value) => setNewClassLevel(value)}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Button h="1.75rem" width="4.5rem" size="sm" onClick={() => newClass()}>
          <FaPlus />
        </Button>
      </HStack>
      {hasClassList ? (
        <>
          <TableContainer mt={10}>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Clases</Th>
                  <Th isNumeric>Nivel</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {classList.map((_class, index) => (
                  <Tr key={index}>
                    <Td whiteSpace="break-spaces">{_class}</Td>
                    <Td isNumeric>{classLevelList[index]}</Td>
                    <Td textAlign="right">
                      <Button
                        size="xs"
                        onClick={() => handleDeleteClass(index)}
                      >
                        <FaMinus />
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Nivel Total</Th>
                  <Th isNumeric>{totalClassLevel}</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default StepClass;
