import { Box, Heading, Input, Button, ButtonGroup, Image, Select, Textarea, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Divider, FormControl, FormLabel, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, IconButton, Text, Center, HStack, VStack, InputGroup, InputRightElement, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { FC, ChangeEvent, useState } from "react"
import { CharacterData } from "@/components/class/characterdata"
import CharacterAvatarEditor from "@/components/ui/molecules/CharacterAvatarEditor"
import { GiInfo } from "react-icons/gi"
import { FaPlus, FaMinus } from "react-icons/fa"

interface StepDescriptionProps {
  onComplete: (data: CharacterData) => void
  onPrev: (data: CharacterData) => void
  data: CharacterData
}

const StepDescription: FC<StepDescriptionProps> = ({ onComplete, onPrev, data }) => {
  const [characterDetails, setCharacterDetails] = useState(data.character_details)
  const [name, setName] = useState(data.name)
  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

  }

  /**
   * Detalles del personaje
   */
  const handleAlignment = (e: ChangeEvent<HTMLSelectElement>) => {
    characterDetails.alignment = e.target.value
    setCharacterDetails(data.character_details)
  }
  const [deity, setDeity] = useState(data.character_details.deity)
  const handleDeity = (e: ChangeEvent<HTMLInputElement>) => {
    characterDetails.deity = e.target.value
    setCharacterDetails(data.character_details)
    setDeity(e.target.value);

  }
  const [languages, setLanguages] = useState(data.languages)
  const [inputLanguage, setLanguage] = useState("")
  const newLanguage = () => {
    if (inputLanguage.trim() !== "") {
      setLanguages((prevEquipment) => [
        ...prevEquipment,
        inputLanguage.trim(),
      ])
      setLanguage("")
    }
  }
  const handleDeleteLanguage = (indexToDelete: number) => {
    setLanguages((prevLanguages) =>
      prevLanguages.filter((_, index) => index !== indexToDelete)
    )
  }
  const hasLanguages = languages.length > 0

  /**
   * Caracteristicas Fisicas
      size: 0,
      genre: '',
      age: 0,
      height: 0,
      weight: 0,
      skin: '',
      hair: '',
      eyes: '',
   */
  const handleSize = (e: ChangeEvent<HTMLSelectElement>) => {
    characterDetails.appearance.size = +e.target.value
    setCharacterDetails(data.character_details)
  }
  const [genre, setGenre] = useState(data.character_details.appearance.genre)
  const handleGenre = (e: ChangeEvent<HTMLInputElement>) => {
    characterDetails.appearance.genre = e.target.value
    setCharacterDetails(data.character_details)
    setGenre(e.target.value);
  }
  const [age, setAge] = useState(data.character_details.appearance.age)
  const handleAge = (e: ChangeEvent<HTMLInputElement>) => {
    characterDetails.appearance.height = +e.target.value
    setCharacterDetails(data.character_details)
    setAge(+e.target.value);
  }
  const [height, setHeight] = useState(data.character_details.appearance.height)
  const handleHeight = (e: ChangeEvent<HTMLInputElement>) => {
    characterDetails.appearance.height = +e.target.value
    setCharacterDetails(data.character_details)
    setHeight(+e.target.value);
  }
  const [weight, setWeight] = useState(data.character_details.appearance.weight)
  const handleWeight = (e: ChangeEvent<HTMLInputElement>) => {
    characterDetails.appearance.weight = +e.target.value
    setCharacterDetails(data.character_details)
    setWeight(+e.target.value);
  }
  const [skin, setSkin] = useState(data.character_details.appearance.genre)
  const handleSkin = (e: ChangeEvent<HTMLInputElement>) => {
    characterDetails.appearance.skin = e.target.value
    setCharacterDetails(data.character_details)
    setSkin(e.target.value);
  }
  const [hair, setHair] = useState(data.character_details.appearance.hair)
  const handleHair = (e: ChangeEvent<HTMLInputElement>) => {
    characterDetails.appearance.hair = e.target.value
    setCharacterDetails(data.character_details)
    setHair(e.target.value);
  }
  const [eyes, setEyes] = useState(data.character_details.appearance.eyes)
  const handleEyes = (e: ChangeEvent<HTMLInputElement>) => {
    characterDetails.appearance.eyes = e.target.value
    setCharacterDetails(data.character_details)
    setEyes(e.target.value);
  }

  return (
    <Box>
      <ButtonGroup display="flex" justifyContent="space-between">
        <Button
          onClick={() =>
            onPrev({
              ...data,
              name: name,
              languages: languages,
              character_details: characterDetails,
              copyFrom: (): void => {
                throw new Error("Function not implemented.")
              },
            })
          }
        >
          Atrás
        </Button>
        <Button onClick={() => console.log(data)}>log</Button>
        <Button
          onClick={() =>
            onComplete({
              ...data,
              copyFrom: (): void => {
                throw new Error("Function not implemented.")
              },
            })
          }
        >
          Siguiente
        </Button>
      </ButtonGroup>
      <Heading>Información básica</Heading>
      <HStack my={4}>
        <VStack>
          <Image
            src='https://firebasestorage.googleapis.com/v0/b/soro-dashboard.appspot.com/o/users%2FdE3IicCMypbQNL0ojqIBdDGXdxE3%2Fpublic%2Fcharacters%2FT3?alt=media&token=914e6c5d-c018-488a-8b10-ce76f6f0cae3'
            alt={name}
            borderRadius="lg"

          />
          <CharacterAvatarEditor name={name} buttonName="Añadir Imagen" />
        </VStack>
        <VStack alignItems={"flex-start"}>
          <Text as="span" size='xs'>Nombre</Text>
          <Input variant="flushed" placeholder="Nombre" value={name} onChange={handleName} />
        </VStack>
      </HStack>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Detalles del personaje
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Select variant="flushed" placeholder='Alineamiento' onChange={handleAlignment} defaultValue={characterDetails.alignment}>
              <option value='LB'>Legal Bueno</option>
              <option value='NB'>Neutral Bueno</option>
              <option value='CB'>Caotico Bueno</option>
              <option value='LN'>Legal Neutral</option>
              <option value='NN'>Neutral Neutral</option>
              <option value='CN'>Caotico Neutral</option>
              <option value='LM'>Legal Maligno</option>
              <option value='NM'>Neutral Maligno</option>
              <option value='CM'>Caotico Maligno</option>
            </Select>
            <Divider my={4} />
            <Input variant="flushed" placeholder="Deidad" value={characterDetails.deity} onChange={handleDeity} />
            <Divider my={4} />
            <InputGroup size="md">
              <Input
                variant="flushed"
                pr="4.5rem"
                placeholder="Idiomas"
                value={inputLanguage}
                onChange={(e) => setLanguage(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={() => newLanguage()}>
                  <FaPlus />
                </Button>
              </InputRightElement>
            </InputGroup>

            {hasLanguages ? (
              <>
                <TableContainer mt={10}>
                  <Table size="sm" variant='striped'>
                    <Thead>
                      <Tr>
                        <Th>Idiomas</Th>
                        <Th></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {languages.map((language, index) => (
                        <Tr key={index}>
                          <Td whiteSpace="break-spaces">{language}</Td>
                          <Td textAlign="right">
                            <Button
                              size="xs"
                              onClick={() => handleDeleteLanguage(index)}
                            >
                              <FaMinus />
                            </Button>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </>
            ) : (
              <></>
            )}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Características físicas
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Center height='50px'>
              <VStack alignItems={"flex-start"}>
                <Text as="span" size='xs'>Tamaño</Text>
                <Select variant="flushed" placeholder='Tamaño' onChange={handleSize} defaultValue={characterDetails.appearance.size}>
                  <option value='-8'>Minúsculo </option>
                  <option value='-4'>Diminuto </option>
                  <option value='-2'>Menudo </option>
                  <option value='-1'>Pequeño </option>
                  <option value='0'>Mediano </option>
                  <option value='1'>Grande </option>
                  <option value='2'>Enorme </option>
                  <option value='4'>Gargantuesco </option>
                  <option value='8'>Colosal </option>
                </Select>
              </VStack>
              <Divider orientation='vertical' mx={2} />
              <VStack alignItems={"flex-start"}>
                <Text as="span" size='xs'>Genero</Text>
                <Input variant="flushed" placeholder="Genero" onChange={handleGenre} value={characterDetails.appearance.genre} />
              </VStack>
            </Center>
            <Center height='100px'>
              <VStack alignItems={"flex-start"}>
                <Text>Peso</Text>
                <Input variant="flushed" placeholder="Peso" onChange={handleWeight} value={characterDetails.appearance.weight} />
              </VStack>
              <Divider orientation='vertical' mx={2} />
              <VStack alignItems={"flex-start"}>
                <Text>Altura</Text>
                <Input variant="flushed" placeholder="Altura" onChange={handleHeight} value={characterDetails.appearance.height} />
              </VStack>
            </Center>
            <Center height='100px'>
              <VStack alignItems={"flex-start"}>
                <Text>Edad</Text>
                <Input variant="flushed" placeholder="Edad" onChange={handleAge} value={characterDetails.appearance.age} />
              </VStack>
              <Divider orientation='vertical' mx={2} />
              <VStack alignItems={"flex-start"}>
                <Text>Piel</Text>
                <Input variant="flushed" placeholder="Piel" onChange={handleSkin} value={characterDetails.appearance.skin} />
              </VStack>
            </Center>
            <Center height='100px'>
              <VStack alignItems={"flex-start"}>
                <Text>Ojos</Text>
                <Input variant="flushed" placeholder="Ojos" onChange={handleEyes} value={characterDetails.appearance.eyes} />
              </VStack>
              <Divider orientation='vertical' mx={2} />
              <VStack alignItems={"flex-start"}>
                <Text>Cabello</Text>
                <Input variant="flushed" placeholder="Cabello" onChange={handleHair} value={characterDetails.appearance.hair} />
              </VStack>
            </Center>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Lore
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text as="span" size='xs'>Origen y Contexto</Text>
            <Popover isLazy>
              <PopoverTrigger>
                <IconButton
                  isRound={true} icon={<GiInfo />} aria-label={"Info"} variant='ghost' bg='transparent' _hover={{ bg: 'transparent' }} _active={{ bg: 'transparent' }} _focus={{ bg: 'transparent' }} />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  ¿De dónde viene el personaje?<br />
                  ¿Cuál es su lugar de nacimiento?<br />
                  ¿Cómo fue su infancia y adolescencia?<br />
                  ¿Cuál es el contexto cultural y social en el que creció?
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Textarea variant="flushed" rows={5} />
            <Divider my={4} />
            <Text as="span" size='xs'>Motivaciones y Objetivos</Text>
            <Popover isLazy>
              <PopoverTrigger>
                <IconButton
                  isRound={true} icon={<GiInfo />} aria-label={"Info"} variant='ghost' bg='transparent' _hover={{ bg: 'transparent' }} _active={{ bg: 'transparent' }} _focus={{ bg: 'transparent' }} />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  ¿Cuáles son las metas y aspiraciones del personaje?<br />
                  ¿Qué eventos o experiencias han dado forma a sus deseos y objetivos?
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Textarea variant="flushed" rows={5} />
            <Divider my={4} />
            <Text as="span" size='xs'>Relaciones Personales</Text>
            <Popover isLazy>
              <PopoverTrigger>
                <IconButton
                  isRound={true} icon={<GiInfo />} aria-label={"Info"} variant='ghost' bg='transparent' _hover={{ bg: 'transparent' }} _active={{ bg: 'transparent' }} _focus={{ bg: 'transparent' }} />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  ¿Qué conexiones tiene el personaje con otros personajes en el lore?
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Textarea variant="flushed" rows={5} />
            <Divider my={4} />
            <Text as="span" size='xs'>Eventos Significativos</Text>
            <Popover isLazy>
              <PopoverTrigger>
                <IconButton
                  isRound={true} icon={<GiInfo />} aria-label={"Info"} variant='ghost' bg='transparent' _hover={{ bg: 'transparent' }} _active={{ bg: 'transparent' }} _focus={{ bg: 'transparent' }} />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  ¿Cuáles son los momentos clave en la vida del personaje?<br />
                  ¿Cómo han afectado estos eventos a su desarrollo y personalidad?
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Textarea variant="flushed" rows={5} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default StepDescription
