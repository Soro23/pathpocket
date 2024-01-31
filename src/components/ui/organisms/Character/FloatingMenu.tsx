// components/FloatingMenu.js

import { Button, HStack, VStack, useColorModeValue } from '@chakra-ui/react';
import { RiAccountCircleFill, RiAccountCircleLine } from 'react-icons/ri';


interface FloatingMenuProps {
    onOptionClick: (option: string) => void;
}

const FloatingMenu: React.FC<FloatingMenuProps> = ({ onOptionClick }) => {


    const bgColor = useColorModeValue("maroon", "wheat");
    const textColor = useColorModeValue("white", "black");

    const handleOptionClick = (option: string) => {
        onOptionClick(option);
    };

    return (
        <VStack
            position="fixed"
            bottom="80px"
            right="20px"
            left="20px"
            spacing="4"
            zIndex={999}

        >
            <Button border={'1px solid ' + textColor}
                size={'md'}
                width={'full'}
                onClick={() => handleOptionClick('stats')}
                leftIcon={<RiAccountCircleFill />}
                color={textColor}
                bgColor={bgColor}
                mt={4}
                p={6}
            >
                Caracteristicas y Salvaciones
            </Button>

            <HStack
                width={'full'}
            >

                <Button border={'1px solid ' + textColor}
                    size="md"
                    width={'full'}
                    onClick={() => handleOptionClick('skills')}
                    leftIcon={<RiAccountCircleLine />}
                    color={textColor}
                    bgColor={bgColor}
                    p={6}

                >
                    Habilidades
                </Button>
                <Button border={'1px solid ' + textColor}
                    size="md"
                    width={'full'}
                    onClick={() => handleOptionClick('attacks')}
                    leftIcon={<RiAccountCircleLine />}
                    color={textColor}
                    bgColor={bgColor}
                    p={6}

                >
                    Ataques
                </Button>
            </HStack>
            <HStack
                width={'full'}
            >

                <Button border={'1px solid ' + textColor}
                    size="md"
                    width={'full'}
                    onClick={() => handleOptionClick('inventory')}
                    leftIcon={<RiAccountCircleLine />}
                    color={textColor}
                    bgColor={bgColor}
                    p={6}

                >
                    Inventario
                </Button>
                <Button border={'1px solid ' + textColor}
                    size="md"
                    width={'full'}
                    onClick={() => handleOptionClick('spells')}
                    leftIcon={<RiAccountCircleLine />}
                    color={textColor}
                    bgColor={bgColor}
                    p={6}

                >
                    Hechizos
                </Button>
            </HStack>
            <HStack
                width={'full'}
            >

                <Button border={'1px solid ' + textColor}
                    size="md"
                    width={'full'}
                    onClick={() => handleOptionClick('feats')}
                    leftIcon={<RiAccountCircleLine />}
                    color={textColor}
                    bgColor={bgColor}
                    p={6}

                >
                    Caracteristicas de clase <br /> dotes
                </Button>
                <Button border={'1px solid ' + textColor}
                    size="md"
                    width={'full'}
                    onClick={() => handleOptionClick('languages')}
                    leftIcon={<RiAccountCircleLine />}
                    color={textColor}
                    bgColor={bgColor}
                    p={6}
                >
                    Competencias  <br /> idiomas
                </Button>
            </HStack>
            <Button border={'1px solid ' + textColor}
                size="md"
                width={'full'}
                onClick={() => handleOptionClick('description')}
                leftIcon={<RiAccountCircleLine />}
                color={textColor}
                bgColor={bgColor}
                p={6}
                mb={4}
            >
                Descripción
            </Button>
            {/* Agrega más botones según sea necesario */}
        </VStack>
    );
};

export default FloatingMenu;
