// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    global: () => ({
        dark:{
        body: {
            bgColor: "#232424",
        },
    }
      }),
});

export default theme;