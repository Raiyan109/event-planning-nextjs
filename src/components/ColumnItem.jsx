import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities";

const ColumnItem = ({ id, title }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    return (
        <div ref={setNodeRef} style={{ transform: CSS.Transform.toString(transform), transition }} {...attributes} {...listeners}>
            <div className="bg-white p-4 rounded-md shadow-md">
                {title}
            </div>
        </div>
    )
}

export default ColumnItem
