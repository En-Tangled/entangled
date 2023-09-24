import {
  ChakraProvider,
  Center,
} from "@chakra-ui/react"

import { Navbar } from "../src/Components/Nav/Navbar";
import theme from './theme';
import Orchestrator from "./Components/Generic/Orchestrator";



export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar/>
    <Center bgColor='#E2E2E2' minHeight="100vh" minWidth="100vw">
    <Orchestrator/>
    </Center>
  </ChakraProvider>
)
