import { useContext } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import CompletedListComponent from '../CompletedListComponent/CompletedListComponent'
import IncompletedListComponent from '../IncompletedListComponent/IncompletedListComponent'
import { TaskContext } from '../../Context/TaskContext'

const DragAndDropComponent = () => {
	const { listTask, setlistTask } = useContext(TaskContext)

	const handleDragEnd = (result: DropResult) => {
		/* console.log(result)
		if (result.destination) {
			console.log("estoy aaqui")
			const destination = result.destination.index
			const previousObj = incompletedTasks[destination]
			const currentObj = incompletedTasks.findIndex((el) => el.id === result.draggableId)
			incompletedTasks.splice(destination, 1, incompletedTasks[currentObj])
			incompletedTasks.splice(currentObj, 1, previousObj)
		} */
		if (result.destination && result.destination.droppableId !== result.source.droppableId) {
			setlistTask(listTask.map(el => {
				if (el.id === result.draggableId) {
					return { ...el, completed: !el.completed };
				} else {
					return el;
				}
			}));
		}
	}
	return (
		<DragDropContext onDragEnd={(result) => handleDragEnd(result)}>
			<div className='list__Section'>
				<IncompletedListComponent />
				<CompletedListComponent />
			</div>
		</DragDropContext>
	)
}

export default DragAndDropComponent