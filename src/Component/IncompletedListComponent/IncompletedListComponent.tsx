import { useContext } from 'react'
import './style.css'
import { TaskContext } from '../../Context/TaskContext'
import { listTask } from '../../Interface/TaskInterface'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { AiFillDelete } from 'react-icons/all'


const IncompletedListComponent = () => {
	const objtTask = useContext(TaskContext)
	const incompletedTasks: listTask[] = objtTask.listTask.filter((el) => el.completed === false)

	return (
		<Droppable droppableId='Incompletedtasks'>
			{(droppableProvided) => <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef} className='incompleted__List'>
				<div className="incompleted__list_title">
					<h2>Incompleted Tasks</h2>
				</div>
				<ul className='incompleted__ul_List'>
					{incompletedTasks.map((el, index) => (
						<Draggable key={el.id} draggableId={el.id} index={index}>
							{(draggableProvided) =>
								<li {...draggableProvided.draggableProps}
									ref={draggableProvided.innerRef}
									{...draggableProvided.dragHandleProps}
								>
									{el.task}
									<span className='btn_Delete' onClick={() => objtTask.handleDeleteTask(el.id)}>
										<AiFillDelete size={20} color={"red"} />
									</span>
								</li>
							}
						</Draggable>
					))}

				</ul>
				{droppableProvided.placeholder}
			</div>}
		</Droppable>
	)
}

export default IncompletedListComponent