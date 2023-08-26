import {
    FormControl,
    FormLabel,
    Input,
    HStack,
    Container,
    Text,
    Stack,
    Flex,
    Spacer,
} from '@chakra-ui/react'
import './NewEvent.css'
import { useState,useEffect } from 'react'

export const NewEvent = () => {
    const [eventName,setEventName] = useState("Placeholder");
    const [eventDate,setEventDate] = useState("01/01/2020");
    const [startTime,setStartTime] = useState('2100');
    const [endTime,setEndTime] = useState('2300');
    const [host,setHost] = useState('Johm');
    const [eventLink,setEventLink] = useState('test.huddle01');
    const [customUrl,setCustomUrl] = useState('www.test.some.io');
    const [currency,setCurrency] = useState(0);
    return (
        <Flex className='form-container'>
            <Container className='form-subcontainer'>
            <Text color='white' fontSize='3xl'>Create New Event</Text>
            <FormControl>
                <FormLabel fontSize='sm' color='#FFFFFFA6'>Event Name</FormLabel>
                <Input type="text" color='#FFFFFFA6' placeholder='Name this event' borderRadius = '15px'></Input>
                <FormLabel fontSize='sm' color='#FFFFFFA6'>Seller's Name</FormLabel>
                <Input type="text" color='#FFFFFFA6' placeholder='Who is conducting this event' borderRadius = '15px'></Input>
                <FormLabel fontSize='sm' color='#FFFFFFA6'>Date of Event</FormLabel>
                <Input type="date" color='#FFFFFFA6' placeholder='Pick a date for this event' borderRadius = '15px'></Input>
                <HStack>
                    <Stack>
                    <FormLabel fontSize='sm' color='#FFFFFFA6'>Start Time</FormLabel>
                    <Input type="date" color='#FFFFFFA6' placeholder='extra small size' borderRadius = '15px'></Input>
                    </Stack>
                    <Stack>
                    <FormLabel fontSize='sm' color='#FFFFFFA6'>End Time</FormLabel>
                    <Input type="date" color='#FFFFFFA6' placeholder='extra small size' borderRadius = '15px'></Input>
                    </Stack>
                </HStack>
                <HStack>
                    <Stack>
                    <FormLabel fontSize='sm' color='#FFFFFFA6'>Floor Price</FormLabel>
                    <Input type="number" color='#FFFFFFA6' placeholder='Starting bid price' borderRadius = '15px'></Input>
                    </Stack>
                    <Stack>
                    <FormLabel fontSize='sm' color='#FFFFFFA6'>Currency</FormLabel>
                    <Input type="number" color='#FFFFFFA6' placeholder='Currency/Token' borderRadius = '15px'></Input>
                    </Stack>
                </HStack>
                <FormLabel fontSize='sm' color='#FFFFFFA6'>Huddle Link</FormLabel>
                <Input type="number" color='#FFFFFFA6' placeholder='Generate a huddle01 link' borderRadius = '15px'></Input>
                <FormLabel fontSize='sm' color='#FFFFFFA6'>Custom URL</FormLabel>
                <Input type="number" color='#FFFFFFA6' placeholder='Pick a custom URL' borderRadius = '15px'></Input>
            </FormControl>
            </Container>
            <Spacer/>
            <Container className='form-subcontainer'>
                <Text fontSize = '4xl' color='#FFFFFFFF'>{eventName}</Text>
                <Text fontSize = 'md' color='#FFFFFFFF'>{eventDate}</Text>
                <Text fontSize = 'md' color='#FFFFFFFF'>{startTime}-{endTime}</Text>
                <Text fontSize = 'sm' color='#FFFFFFA6'>{host}</Text>
                <Text fontSize = 'sm' color='#FFFFFFA6'>{eventLink}</Text>
                <Text fontSize = 'sm' color='#FFFFFFA6'>{customUrl}</Text>
                <Text fontSize = '4xl' color='#FFFFFFFF'>{currency}</Text>
            </Container>
        </Flex>
    )
}