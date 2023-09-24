import { eventTypes } from "../../Types/types"
import { NewEvent } from "../Forms/NewEvent"
import { SocialCard } from "../NewEvents/SocialCard"
import { IntermediateLoader } from "./IntermediateLoader"
import { Fragment, useState } from "react"

const Orchestrator = () => {

    const [newEventData, setNewEventData] = useState<eventTypes>();
    const [stateTracker, setStateTracker] = useState(0);

    const newEventHandler = (data: eventTypes) => {
        setNewEventData(data);
        setStateTracker(1);
    }

    const stateHandler = () => {
        if (stateTracker === 0) {
            return <NewEvent newEventHandler={newEventHandler} />
        }
        else if (stateTracker === 1) {
            return <IntermediateLoader
                type={1}
            />
        }
        else if (stateTracker === 2) {
            return <IntermediateLoader
                type={2}
            />
        }
        else if (stateTracker === 3) {
            return <IntermediateLoader
                type={3}
            />
        }
        else if (stateTracker === 4) {
            return <SocialCard/>
        }
    }
return (
    <Fragment>
        {stateHandler()}
    </Fragment>
)
}
export default Orchestrator;