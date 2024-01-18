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
  useBreakpointValue,
} from '@chakra-ui/react';
import { FC, ChangeEvent, useState } from 'react';
import { CharacterData } from '@/components/class/characterdata';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { SkillData } from '@/components/class/skilldata';

interface StepSkillProps {
  onNext: (data: CharacterData) => void;
  onPrev: (data: CharacterData) => void;
  data: CharacterData;
}

const StepSkill: FC<StepSkillProps> = ({ onNext, onPrev, data }) => {
  const [skillList, setSkillList] = useState(data.skills);

  const handleRanksChange = ({
    target,
    skilltag,
  }: {
    target: { skill: SkillData; value: string };
    skilltag: string;
  }): void => {
    target.skill.ranks = parseInt(target.value, 10) ?? target.skill.ranks;
    setSkillList((prevSkillList) => ({
      ...prevSkillList,
      skilltag: target.skill,
    }));
  };
  const handleIsClassChange = ({
    target,
    skilltag,
  }: {
    target: { skill: SkillData; e: ChangeEvent<HTMLInputElement> };
    skilltag: string;
  }): void => {
    target.skill.isClassSkill = target.e.target.checked;
    setSkillList((prevSkillList) => ({
      ...prevSkillList,
      skilltag: target.skill,
    }));
  };

  const handleModRacialChange = ({
    target,
    skilltag,
  }: {
    target: { skill: SkillData; value: string };
    skilltag: string;
  }): void => {
    if (target.skill.mod) {
      target.skill.mod.racial =
        parseInt(target.value, 10) ?? target.skill.mod.racial;
    }
    setSkillList((prevSkillList) => ({
      ...prevSkillList,
      skilltag: target.skill,
    }));
  };
  const handleModTraitChange = ({
    target,
    skilltag,
  }: {
    target: { skill: SkillData; value: string };
    skilltag: string;
  }): void => {
    if (target.skill.mod) {
      target.skill.mod.trait =
        parseInt(target.value, 10) ?? target.skill.mod.trait;
    }
    setSkillList((prevSkillList) => ({
      ...prevSkillList,
      skilltag: target.skill,
    }));
  };
  const handleModMiscChange = ({
    target,
    skilltag,
  }: {
    target: { skill: SkillData; value: string };
    skilltag: string;
  }): void => {
    if (target.skill.mod) {
      target.skill.mod.misc =
        parseInt(target.value, 10) ?? target.skill.mod.misc;
    }
    setSkillList((prevSkillList) => ({
      ...prevSkillList,
      skilltag: target.skill,
    }));
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  console.log(isWideVersion);
  return (
    <Box>
      <ButtonGroup display="flex" justifyContent="space-between">
        <Button
          onClick={() =>
            onPrev({
              ...data,
              copyFrom: (): void => {
                throw new Error('Function not implemented.');
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
                throw new Error('Function not implemented.');
              },
            })
          }
        >
          Siguiente
        </Button>
      </ButtonGroup>
      <Heading>Habilidades</Heading>
      <TableContainer mt={10}>
        <Table size="sm" variant="striped">
          <Thead>
            <Tr>
              <Th>Habilidad</Th>
              <Th>Clase</Th>
              <Th>Rangos</Th>
              {!isWideVersion ? (
                <Th>Mod</Th>
              ) : (
                <>
                  <Th>Modificadores de raza</Th>
                  <Th>Modificadores de dotes</Th>
                  <Th>Modificador varios</Th>
                </>
              )}
            </Tr>
          </Thead>
          <Tbody>
            {Object.entries(skillList).map(([skilltag, skillData], index) => (
              <Tr key={index}>
                <Td position={'relative'} whiteSpace="break-spaces">
                  {skillData.name}
                  <Box as="span" position={'absolute'} opacity={0.5} right={0}>
                    {skillData.modStat}
                  </Box>
                </Td>
                <Td textAlign={'center'}>
                  <Checkbox
                    defaultChecked={skillData.isClassSkill}
                    onChange={(e) =>
                      handleIsClassChange({
                        target: { skill: skillData, e },
                        skilltag,
                      })
                    }
                  ></Checkbox>
                </Td>
                <Td textAlign={'center'}>
                  <NumberInput
                    variant="flushed"
                    value={skillData.ranks}
                    onChange={(value) =>
                      handleRanksChange({
                        target: { skill: skillData, value },
                        skilltag,
                      })
                    }
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>

                {!isWideVersion ? (
                  <Td textAlign={'center'}>
                    <NumberInput
                      variant="flushed"
                      value={skillData['mod'].misc}
                      onChange={(value) =>
                        handleModMiscChange({
                          target: { skill: skillData, value },
                          skilltag,
                        })
                      }
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </Td>
                ) : (
                  <>
                    <Td textAlign={'center'}>
                      <NumberInput
                        variant="flushed"
                        value={skillData['mod'].racial}
                        onChange={(value) =>
                          handleModRacialChange({
                            target: { skill: skillData, value },
                            skilltag,
                          })
                        }
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
                        onChange={(value) =>
                          handleModTraitChange({
                            target: { skill: skillData, value },
                            skilltag,
                          })
                        }
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
                        onChange={(value) =>
                          handleModMiscChange({
                            target: { skill: skillData, value },
                            skilltag,
                          })
                        }
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
              <Th>Habilidad</Th>
              <Th>Clase</Th>
              <Th>Rangos</Th>
              {!isWideVersion ? (
                <Th>Mod</Th>
              ) : (
                <>
                  <Th>Modificadores de raza</Th>
                  <Th>Modificadores de dotes</Th>
                  <Th>Modificador varios</Th>
                </>
              )}
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StepSkill;
