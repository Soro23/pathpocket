import { Button as ChakraButton, ButtonProps as ChakraButtonProps, defineStyle, defineStyleConfig, forwardRef, useColorModeValue } from '@chakra-ui/react'
import { ForwardRefRenderFunction } from 'react';

// const outline = defineStyle({
//     border: '2px dashed', // change the appearance of the border
//     borderRadius: 0, // remove the border radius
//     fontWeight: 'semibold', // change the font weight
// })

// export const buttonTheme = defineStyleConfig({
//     variants: { outline },
// })

interface ButtonProps extends ChakraButtonProps {
    cvariant?: boolean;
    // label?: string;
    // error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

const ButtonBase: ForwardRefRenderFunction<HTMLInputElement, ButtonProps> = (
    { cvariant = false, ...rest },
    ref
) => {
    const inactiveLinkColor = useColorModeValue('gray.300', 'gray.50')
    const activeLinkColor = useColorModeValue('maroon', 'wheat')
    const bgColor = useColorModeValue('gray.50', 'gray.700')
    const hoverColor = useColorModeValue('gray.50', 'gray.600')

    return (
        <ChakraButton
            focusBorderColor="red.500"
            color={cvariant ? hoverColor : activeLinkColor}
            bgColor={cvariant ? activeLinkColor : bgColor}
            _hover={{
                bgColor: cvariant ? bgColor : activeLinkColor,
                color: cvariant ? activeLinkColor : hoverColor
            }}
            ref={ref}
            {...rest}
        />
    );
};

export const Button = forwardRef(ButtonBase);
