import { eventTypes } from "../../Types/types"
import { NewEvent } from "../Forms/NewEvent"
import { SocialCard } from "../NewEvents/SocialCard"
import { IntermediateLoader } from "./IntermediateLoader"
import { Fragment, useState } from "react"

const Orchestrator = () => {

    const [newEventData, setNewEventData] = useState<eventTypes>();
    const [stateTracker,setStateTracker] = useState(0);

    const newEventHandler = (data: eventTypes) => {
        setNewEventData(data);
    }

    return (
        <Fragment>
            <NewEvent
            newEventHandler = {newEventHandler}/>
        </Fragment>
    )
}
export default Orchestrator;