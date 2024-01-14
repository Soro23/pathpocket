import {
  Box,
  Heading,
  Text,
  Select,
  Button,
  Input,
  ListItem,
  UnorderedList,
  InputGroup,
  InputRightElement,
  ButtonGroup,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Checkbox,
} from "@chakra-ui/react";
import { FC, ChangeEvent, useState } from "react";
import { CharacterData } from "@/components/class/characterdata";
import { FaMinus, FaPlus } from "react-icons/fa";
import { SkillData } from "@/components/class/skilldata";

interface StepSkillProps {
  onNext: (data: CharacterData) => void;
  onPrev: (data: CharacterData) => void;
  data: CharacterData;
}

const StepSkill: FC<StepSkillProps> = ({ onNext, onPrev, data }) => {
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

  // New
  const [skillList, setSkillList] = useState(data.skills)

  const handleRanksChange = ({ target }: { target: { skill: SkillData, value: string } }): void => {
    // Accede a skilltag aquí
    console.log(target);
    const currentSkill = new SkillData()
    setSkillList((prevSkillList) => ({
      ...prevSkillList,
    }));
    // Resto de tu lógica...
  };
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
      <Heading>Habilidades</Heading>
      <TableContainer mt={10}>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Habilidad</Th>
              <Th>Clase</Th>
              <Th>Mod</Th>
              <Th>Rangos</Th>
              <Th>Modificadores de raza</Th>
              <Th>Modificadores de dotes</Th>
              <Th>Modificador varios</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.entries(skillList).map(([skilltag, skillData], index) => (
              <Tr key={index}>
                <Td whiteSpace="break-spaces">{skillData.name}</Td>
                <Td><Checkbox defaultChecked={skillData.isClassSkill}></Checkbox></Td>
                <Td>{skillData.modStat}</Td>
                <Td>
                  <NumberInput
                    variant="flushed"
                    value={skillData.ranks}
                    onChange={(value) => handleRanksChange({ target: { skill: skillData, value } })}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
                <Td>
                  <NumberInput
                    variant="flushed"
                    value={skillData['mod'].racial}
                    onChange={(value) => handleSkillChange({ target: { skill: skillData, value }, skilltag })}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
                <Td>
                  <NumberInput
                    variant="flushed"
                    value={skillData['mod'].trait}
                    onChange={(value) => handleSkillChange({ target: { skill: skillData, value }, skilltag })}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
                <Td>
                  <NumberInput
                    variant="flushed"
                    value={skillData['mod'].misc}
                    onChange={(value) => handleSkillChange({ target: { skill: skillData, value }, skilltag })}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Habilidad</Th>
              <Th>Clase</Th>
              <Th>Mod</Th>
              <Th>Rangos</Th>
              <Th>Modificadores de raza</Th>
              <Th>Modificadores de dotes</Th>
              <Th>Modificador varios</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StepSkill;
