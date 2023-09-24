import {
    Card,
    CardHeader,
    CardBody,
    Text
} from '@chakra-ui/react'

interface loaderProps {
    type: number,
}

const descriptorMap = new Map<number, Array<string>>([
    [1, ["Please Wait","Waiting for on-chain confirmation"]],
    [2, ["Oops!","Looks like something went wrong. You might want to try redoing your last actions."]],
    [3, ["Your bid was placed!","Check your meeting dashboard for notifications and to start the meeting at the appropriate time."]],
]);

export const IntermediateLoader = (props: loaderProps) => {
    return (
        <Card
            width='480px'
            height='172px'
            borderRadius='8px'
            backgroundColor='#232424'
            >
            <CardHeader>
                <Text 
                fontSize='30px'
                align='center'>
                    {descriptorMap?.get(props.type)?.[0]}
                </Text>
            </CardHeader>
            <CardBody>
                <Text
                align='center'
                color='#F1F1F1B2'
                fontSize='14px'>
                    {descriptorMap?.get(props.type)?.[1]}
                </Text>
            </CardBody>
        </Card>
    )
}