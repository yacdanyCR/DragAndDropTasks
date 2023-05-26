import { useContext } from 'react'
import './style.css'
import { TaskContext } from '../../Context/TaskContext'
import { listTask } from '../../Interface/TaskInterface'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { AiFillDelete } from 'react-icons/ai'

const CompletedListComponent = () => {
	const objtContext = useContext(TaskContext)
	const completedTasks: listTask[] = objtContext.listTask.filter((el) => el.completed)

	return (
		<Droppable droppableId='completedTasks'>
			{(droppableProvided) => <div  {...droppableProvided.droppableProps} ref={droppableProvided.innerRef} className='completed__List'>
				<div className="completed__title_list">
					<h2>Completed Tasks</h2>
				</div>
				<ul className='completed__ul_List'>
					{completedTasks.map((el, index) => {

						return (
							<Draggable key={el.id} draggableId={el.id} index={index}>
								{(draggableProvided) => <li {...draggableProvided.draggableProps}
									ref={draggableProvided.innerRef}
									{...draggableProvided.dragHandleProps}>
									{el.task}
									<span className='btn_Delete' onClick={() => objtContext.handleDeleteTask(el.id)}>
										<AiFillDelete size={20} color={"red"} />
									</span>
								</li>}
							</Draggable>
						)
					})}
				</ul>
				{droppableProvided.placeholder}
			</div>
			}
		</Droppable>
	)
}

export default CompletedListComponent