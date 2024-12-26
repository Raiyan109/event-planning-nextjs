import { closestCorners, DndContext } from "@dnd-kit/core"


const Manage = () => {
    const [events, setEvents] = useState([
        { id: 1, title: "Event 1" },
        { id: 2, title: "Event 2" },
        { id: 3, title: "Event 3" },
        { id: 4, title: "Event 4" },
        { id: 5, title: "Event 5" },
    ]);
    return (
        <div className="container mx-auto">
            <h1>Manage your events</h1>

            <DndContext collisionDetection={closestCorners}>

            </DndContext>
        </div>
    )
}

export default Manage
