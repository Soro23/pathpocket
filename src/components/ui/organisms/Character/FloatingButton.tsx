import { useState } from 'react';
import { Box, Button, HStack, useColorModeValue } from '@chakra-ui/react';
import { GiAxeSword, GiPapers, GiPencil, GiAtomicSlashes } from 'react-icons/gi';

export const FloatingButton = () => {
    const [showOptions, setShowOptions] = useState(false);
    const headingColor = useColorModeValue('maroon', 'wheat')
    const borderColor = useColorModeValue('wheat','maroon')
    const textColor = useColorModeValue('white', 'black')

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (
        <HStack
            position="fixed"
            bottom="50px"
            right="50px"
            spacing={4}
            align="flex-end"
        >
            {showOptions ? (
                <>
                    <Button
                        w="75px"
                        h="75px"
                        position="absolute"
                        bottom="25px"
                        right="-12px"
                        borderRadius="100% 100% 0 0"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 50% 100%, 50% 100%)',
                            transform: 'rotate(0deg)',
                            transformOrigin: 'bottom',
                            alignItems: 'start',
                            paddingTop: '20px'
                        }}
                        backgroundColor={headingColor}
                    >
                        <GiAxeSword style={{ color: textColor }} />

                    </Button>
                    <Button

                        w="75px"
                        h="75px"
                        backgroundColor={headingColor}
                        // onClick={toggleOptions}
                        position="absolute"
                        bottom="25px"
                        right="-12px"
                        borderRadius="100% 100% 0 0"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 50% 100%, 50% 100%)',
                            transform: 'rotate(305deg)',
                            transformOrigin: 'bottom',
                            alignItems: 'start',
                            paddingTop: '20px'
                        }}
                    >
                        <GiPapers style={{ color: textColor }} />
                    </Button>
                    <Button
                        w="75px"
                        h="75px"
                        backgroundColor={headingColor}
                        position="absolute"
                        bottom="25px"
                        right="-12px"
                        borderRadius="100% 100% 0 0"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 50% 100%, 50% 100%)',
                            transform: 'rotate(250deg)',
                            transformOrigin: 'bottom',
                            alignItems: 'start',
                            paddingTop: '20px'
                        }}
                    >
                        <GiPencil style={{ color: textColor }} />
                    </Button>
                </>
            ) : null}

            <Button
                colorScheme="fill"
                borderRadius="full"
                onClick={toggleOptions}
                backgroundColor={headingColor}
                h="50px"
                w="50px"
                border="2px solid"
                borderColor={textColor}
            >
                <GiAtomicSlashes style={{ color: textColor }} />
            </Button>
        </HStack >
    );
};