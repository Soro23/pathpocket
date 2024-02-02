import type { NextPage } from 'next'
import { Flex } from '@chakra-ui/layout';
import { useColorModeValue, Heading, Spacer, Text, Box, Link, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, VStack, List, ListItem, OrderedList, UnorderedList, ListIcon } from '@chakra-ui/react';
import { GiCheckMark, GiCircle, GiSoundOn } from 'react-icons/gi';

const RoadMap: NextPage = () => {
    const headingColor = useColorModeValue('maroon', 'wheat');
    return (
        <Box w="full" p={4}>
            <Flex minWidth="max-content" alignItems="center" gap="2" p={4}>
                <Box p="2">
                    <Heading as="h3" size="lg" style={{ color: headingColor }}>
                        RoadMap
                    </Heading>
                </Box>
                <Spacer />
            </Flex>

            <VStack spacing={8} align="stretch">
                <Accordion allowMultiple>
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                Fase 1: Estructura Básica y Hoja de Personaje
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <VStack spacing={4} align="stretch">
                                <OrderedList>
                                    <ListItem>
                                        <Text>Configuración del Proyecto:</Text>
                                        <List>
                                            <ListItem><ListIcon as={GiCheckMark} color='green.500' />Inicializar un nuevo proyecto Next.js con TypeScript. Integrando Chakra UI y React Icons para gestionar el diseño de la apliación</ListItem>
                                            <ListItem><ListIcon as={GiCheckMark} color='green.500' />Configurar la navegación entre las páginas de la aplicación utilizando Next Router añadiendo navegación solo para administrador</ListItem>
                                            <ListItem><ListIcon as={GiCheckMark} color='green.500' />Configurar Firebase para autenticación de usuarios.</ListItem>
                                            <ListItem><ListIcon as={GiCheckMark} color='green.500' />Implementar la capacidad de crear, leer, actualizar y eliminar hojas de personaje en la base de datos de Firebase.</ListItem>
                                        </List>
                                    </ListItem>
                                    <ListItem>
                                        <Text>Hojas de Personaje</Text>
                                        <List>
                                            <ListItem><ListIcon as={GiCircle} color='green.500' />Diseñar la estructura de la hoja de personaje para que se vea en tres modos distintos, el modo hoja de pesonaje, el modo edición, y el modo combate</ListItem>
                                            <ListItem><ListIcon as={GiCheckMark} color='green.500' />Construir formulario interactivo para crear hoja de personajes introduciendo los datos de forma manual</ListItem>
                                        </List>
                                    </ListItem>
                                    <ListItem>
                                        <Text>Listado de Recursos:</Text>
                                        <List>
                                            <ListItem><ListIcon as={GiCircle} color='green.500' />Mostrar un listado de recursos útiles para la creación y dirección de partidas de Pathfinder.</ListItem>
                                            <ListItem><ListIcon as={GiCircle} color='green.500' />Posibilidad de categorizar los recursos por temas como reglas, aventuras, mapas, etc.</ListItem>
                                        </List>
                                    </ListItem>
                                </OrderedList>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                Fase 2: Funcionalidades Adicionales (Opcionales)
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <VStack spacing={4} align="stretch">
                                <List>
                                    <ListItem><ListIcon as={GiCircle} color='green.500' />Añadir la información de razas, clases,... para que la creación de pesonaje sea mas ágil</ListItem>
                                    <ListItem><ListIcon as={GiCircle} color='green.500' />Agregar la capacidad de compartir hojas de personaje con otros usuarios.</ListItem>
                                    <ListItem><ListIcon as={GiCircle} color='green.500' />Implementar un sistema de comentarios o foros para que los usuarios puedan discutir sobre las hojas de personaje y los recursos útiles.</ListItem>
                                    <ListItem><ListIcon as={GiCircle} color='green.500' />Explorar la posibilidad de integrar otras herramientas útiles para los jugadores de Pathfinder, como calculadoras de estadísticas, generadores de nombres, etc.</ListItem>
                                </List>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem isDisabled>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                Fase 3: Beta y Pulido
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <VStack spacing={4} align="stretch">
                                <Text>Friends and Family:</Text>
                                <Text>Realiza una versión beta de la aplicación y compártela con amigos y familiares para obtener retroalimentación inicial.</Text>
                                <Text>Validaciones y Mensajes de Error:</Text>
                                <Text>Implementa validaciones en los formularios para mejorar la experiencia del usuario.</Text>
                                <Text>Muestra mensajes de error claros y descriptivos.</Text>
                                <Text>Optimización de Rendimiento:</Text>
                                <Text>Optimiza el rendimiento de la aplicación, utilizando herramientas como React.memo, useMemo, y otras estrategias para evitar renderizaciones innecesarias.</Text>
                                <Text>Documentación:</Text>
                                <Text>Documenta tu código utilizando comentarios claros y genera documentación para las funciones y componentes clave.</Text>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem isDisabled>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                Fase 4: Pruebas y Despliegue
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <VStack spacing={4} align="stretch">
                                <Text>Pruebas Unitarias y de Integración:</Text>
                                <Text>Implementa pruebas unitarias y de integración utilizando herramientas como Jest y Testing Library.</Text>
                                <Text>Despliegue:</Text>
                                <Text>Despliega la aplicación en una plataforma como Vercel o Netlify.</Text>
                                <Text>Configura variables de entorno para manejar claves y configuraciones sensibles.</Text>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>


                </Accordion>
            </VStack>
        </Box>
    );
}

export default RoadMap;
