import { extendTheme } from '@chakra-ui/react'
import "@fontsource/raleway"

export const themeObj = {
    dark: {
        palette: {
            primary: {
                main: "#022f52" // background
            },
            secondary: {
                main: "#ACBCFF" // text
            },
            accent: {
                main: "#1A38A5" // more bluey blue
            }
        }
    },
};

const theme = extendTheme({
    semanticTokens: {
        ...themeObj
    },
    styles: {
        global: {
        // styles for the `body`
        fonts: {
            body: "'Raleway', sans-serif",
            head: "'Raleway', sans-serif",
            footer: "'Raleway', sans-serif",
        },
        body: {
        color: '#ACBCFF',
        },
        // body: {
        //     color: "#ACBCFF"
        // },
        // styles for the `a`
        a: {
            color: themeObj.dark.palette.accent.main,
            textDecoration: "none",
            _hover: {
                color: themeObj.dark.palette.secondary.main,
                backgroundColor: themeObj.dark.palette.accent.main,
            },
        },
        },
    },
    // background: '#BEE3F8',
    // color: '#2C5282',
    // variant: 'outline',
    // _hover: { bg: "blue.500", color: " white" },
});

export default theme;
