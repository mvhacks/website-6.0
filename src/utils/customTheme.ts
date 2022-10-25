import { extendTheme } from '@chakra-ui/react';
import "@fontsource/raleway";
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

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

export const buttonObj = {
    Button: {
        // 1. We can update the base styles
        baseStyle: {
        fontWeight: 'semibold', // Normally, it is "semibold"
        fontSize: "lg"
        },
        // 2. We can add a new button size or extend existing
        sizes: {
        xl: {
            h: '56px',
            fontSize: 'lg',
            px: '32px',
        },
        },
        // 3. We can add a new visual variant
        variants: {
            outline: {
                border: '2px solid',
                borderColor: themeObj.dark.palette.secondary.main,
                color: themeObj.dark.palette.secondary.main,
                _hover: {
                    color: themeObj.dark.palette.primary.main,
                    bg: themeObj.dark.palette.secondary.main
                }
            },
        },
    },
}

export const aTag = {
    a: {
        color: themeObj.dark.palette.accent.main,
        textDecoration: "none",
        _hover: {
            color: themeObj.dark.palette.secondary.main,
            backgroundColor: themeObj.dark.palette.accent.main,
        },
    },
};

const theme = extendTheme({
    semanticTokens: {
        ...themeObj,
    },
    components: {
        ...buttonObj,
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
        },
    },
});

export default theme;
