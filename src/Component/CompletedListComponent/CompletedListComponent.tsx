import { useContext } from 'react'
import './style.css'
import { TaskContext } from '../../Context/TaskContext'
import { listTask } from '../../Interface/TaskInterface'

const CompletedListComponent = () => {
	const objtContext = useContext(TaskContext)
	const completedTasks: listTask[] = objtContext.listTask.filter((el) => el.completed)

	return (
		<div className='completed__List'>
			<ul>
				{completedTasks.map((el) => {
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

export default CompletedListComponent