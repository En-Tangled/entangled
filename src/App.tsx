import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from "@chakra-ui/react"
import { Navbar } from "../src/Components/Nav/Navbar";
import { NewEvent } from "./Components/Forms/NewEvent";
import theme from './theme';


export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar/>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}></VStack>
        <NewEvent/>
      </Grid>
    </Box>
  </ChakraProvider>
)
