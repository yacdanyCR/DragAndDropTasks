import { useContext } from 'react'
import './style.css'
import { TaskContext } from '../../Context/TaskContext'
import { listTask } from '../../Interface/TaskInterface'
import { Draggable, Droppable } from 'react-beautiful-dnd'

const CompletedListComponent = () => {
	const objtContext = useContext(TaskContext)
	const completedTasks: listTask[] = objtContext.listTask.filter((el) => el.completed)

	return (
		<div className='completed__List'>
			<div className="completed__title_list">
				<h2>Completed List</h2>
			</div>
			<Droppable droppableId='completedTasks'>
				{(droppableProvided) => <ul {...droppableProvided.droppableProps} ref={droppableProvided.innerRef} className='completed__ul_List'>
					{completedTasks.map((el, index) => {

						return (
							<Draggable key={el.id} draggableId={el.id} index={index}>
								{(draggableProvided) => <li {...draggableProvided.draggableProps}
									ref={draggableProvided.innerRef}
									{...draggableProvided.dragHandleProps}>
									{el.task}
								</li>}
							</Draggable>
						)

					})}
					{droppableProvided.placeholder}
				</ul>
				}
			</Droppable>
		</div>
	)
}

export default CompletedListComponent