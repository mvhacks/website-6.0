import { extendTheme } from '@chakra-ui/react';

import * as colors from './_colors.module.scss';

console.log(colors);

export const themeObj = {
  dark: {
    palette: {
      primary: {
        main: colors.primaryMain
      },
      secondary: {
        main: colors.secondaryMain,
        secondary: colors.secondarySecondary
      },
      accent: {
        main: colors.accentMain,
        secondary: colors.accentSecondary
      }
    }
  }
};

export const buttonObj = {
  Button: {
    // 1. We can update the base styles
    baseStyle: {
      fontWeight: 'semibold', // Normally, it is "semibold"
      fontSize: 'lg'
    },
    // 2. We can add a new button size or extend existing
    sizes: {
      xl: {
        h: '56px',
        fontSize: 'lg',
        px: '32px'
      }
    },
    // 3. We can add a new visual variant
    variants: {
      outline: {
        border: '2px solid',
        borderColor: themeObj.dark.palette.accent.main,
        color: themeObj.dark.palette.accent.main,
        _hover: {
          color: themeObj.dark.palette.primary.main,
          bg: themeObj.dark.palette.accent.main,
        },
        _active: {
          color: themeObj.dark.palette.primary.main,
          bg: themeObj.dark.palette.accent.main,
          opacity: 0.80,
        }
      }
    }
  }
};

const theme = extendTheme({
  semanticTokens: {
    ...themeObj
  },
  components: {
    ...buttonObj
  },
  styles: {
    global: {
      // styles for the `body`
      fonts: {
        body: "'Raleway', sans-serif",
        head: "'Raleway', sans-serif",
        footer: "'Raleway', sans-serif"
      },
      body: {
        color: '#ff0000'
      }
    }
  }
});

export default theme;
