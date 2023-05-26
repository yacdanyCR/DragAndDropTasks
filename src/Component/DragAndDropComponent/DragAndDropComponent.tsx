import { useContext } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import CompletedListComponent from '../CompletedListComponent/CompletedListComponent'
import IncompletedListComponent from '../IncompletedListComponent/IncompletedListComponent'
import { TaskContext } from '../../Context/TaskContext'

const DragAndDropComponent = () => {
	const { listTask, setlistTask } = useContext(TaskContext)

	const handleDragEnd = (result: DropResult) => {
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