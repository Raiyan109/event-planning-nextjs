
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import ColumnItem from "./ColumnItem"
const Column = ({ events }) => {
    return (
        <div className="flex flex-col gap-4 bg-gray-300 rounded-md p-5 max-w-7xl">
            <SortableContext items={events} strategy={verticalListSortingStrategy}>
                {events?.map((event) => (
                    <ColumnItem key={event.id} title={event.title} id={event.id} />
                ))}
            </SortableContext>
        </div>
    )
}

export default Column
