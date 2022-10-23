import { extendTheme } from '@chakra-ui/react'

export const themeObj = {
    dark: {
        background: '#022f52',
        text: '#ACBCFF'
    }
};

const theme = extendTheme({
    semanticTokens: {
        ...themeObj
    }
    // background: '#BEE3F8',
    // color: '#2C5282',
    // variant: 'outline',
    // _hover: { bg: "blue.500", color: " white" },
});

export default theme;
