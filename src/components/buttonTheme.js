import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const lightButton = defineStyle({
    // background: 'orange.500',
    // color: 'white',
    // fontFamily: 'serif',
    // fontWeight: 'normal',
    background: '#BEE3F8',
    color: '#2C5282',
    variant: 'outline',
    _hover: { bg: "blue.500", color: " white" },
    // _hover={{ bg: "teal.600" }}

    // fontFamily: 'serif',
})

export const buttonTheme = defineStyleConfig({
    variants: { lightButton },
})