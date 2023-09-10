import React,{useState} from "react";
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Text
} from '@chakra-ui/react';
import { ColorModeSwitcher } from "../Generic/ColorModeSwitcher";

export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <Text fontSize='2xl'>ENTANGLED</Text>
                        <Button variant="solid" size="md" mr={2} bg={useColorModeValue('gray.100', 'gray.900')}>
                            Buy
                        </Button>
                        <Button variant="solid" size="md" bg={useColorModeValue('gray.100', 'gray.900')}>
                            Sell
                        </Button>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                {/* Replace with account info from props */}
                                <Box bg={useColorModeValue('gray.200', 'gray.800')} px={4} py = {4}>
                                    testtttt 0xcd-gg
                                </Box>
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Something 1</MenuItem>
                                <MenuDivider />
                                <MenuItem>Something 2</MenuItem>
                            </MenuList>
                        </Menu>
                        <ColorModeSwitcher justifySelf="flex-end" />
                    </Flex>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}></Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}