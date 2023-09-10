import { Card, CardBody, CardHeader, Flex, Text, Spacer } from "@chakra-ui/react"
import { FaTwitter } from "react-icons/fa"


export const SocialCard = () => {
    return (
        <Card bgColor='#232424' height='308px' width='486px' borderRadius='8px'>
            <CardHeader fontSize='2xl'>Verify your credentials</CardHeader>
            <CardBody>
                <Flex width='155px'>
                <FaTwitter/>
                <Spacer/>
                <Text>Not Connected</Text></Flex>
            </CardBody>
        </Card>
    )
}