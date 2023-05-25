import { useContext } from 'react'
import './style.css'
import { TaskContext } from '../../Context/TaskContext'
import { listTask } from '../../Interface/TaskInterface'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { AiFillDelete } from 'react-icons/all'


const IncompletedListComponent = () => {
	const objtTask = useContext(TaskContext)
	const incompletedTasks: listTask[] = objtTask.listTask.filter((el) => !el.completed)

	/* const handleDragEnd = (result: DropResult) => {
		console.log(result)
		if (result.destination) {
			const destination = result.destination.index
			const previousObj = incompletedTasks[destination]
			const currentObj = incompletedTasks.findIndex((el) => el.id === result.draggableId)

			incompletedTasks.splice(destination, 1, incompletedTasks[currentObj])
			incompletedTasks.splice(currentObj, 1, previousObj)
		}
	} */

	return (
		<div className='incompleted__List'>
			<div className="incompleted__list_title">
				<h2>Incompleted Tasks</h2>
			</div>
			<Droppable droppableId='tasks'>
				{(droppableProvided) =>
					<ul {...droppableProvided.droppableProps} ref={droppableProvided.innerRef} className='incompleted__ul_List'>
						{incompletedTasks.map((el, index) => (
							<Draggable key={el.id} draggableId={el.id} index={index}>
								{(draggableProvided) =>
									<li {...draggableProvided.draggableProps}
										ref={draggableProvided.innerRef}
										{...draggableProvided.dragHandleProps}
									>
										{el.task}
										<span className='btn_Delete' onClick={() => objtTask.handleDeleteTask(el.id)}>
											<AiFillDelete size={25} color={"red"} />
										</span>
									</li>
								}
							</Draggable>
						))}
						{droppableProvided.placeholder}
					</ul>}

			</Droppable>
		</div>
	)
}

export default IncompletedListComponent