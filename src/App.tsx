import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Container,
  Center,
} from "@chakra-ui/react"
import { Navbar } from "../src/Components/Nav/Navbar";
import { NewEvent } from "./Components/Forms/NewEvent";
import { SocialCard } from "./Components/NewEvents/SocialCard";
import theme from './theme';


export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar/>
    <Center bgColor='#E2E2E2' minHeight="100vh" minWidth="100vw">
    <SocialCard/>
    </Center>
  </ChakraProvider>
)
