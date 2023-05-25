import { useContext } from 'react'
import './style.css'
import { TaskContext } from '../../Context/TaskContext'
import { listTask } from '../../Interface/TaskInterface'

const IncompletedListComponent = () => {
	const objtTask = useContext(TaskContext)
	const incompletedTasks: listTask[] = objtTask.listTask.filter((el) => !el.completed)

	return (
		<div className='incompleted__List'>
			<ul>
				{incompletedTasks.map((el) => {
					return (
						<li key={el.id} id={`${el.id}`}>
							{el.task}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default IncompletedListComponent