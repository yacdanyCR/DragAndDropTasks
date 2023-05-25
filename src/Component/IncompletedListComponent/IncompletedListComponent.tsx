import { useContext } from 'react'
import './style.css'
import { TaskContext } from '../../Context/TaskContext'
import { listTask } from '../../Interface/TaskInterface'

const IncompletedListComponent = () => {
	const objtTask = useContext(TaskContext)
	const incompletedTasks: listTask[] = objtTask.listTask.filter((el) => !el.completed)

	return (
		<div className='incompleted__List'>
			<div className="incompleted__list_title">
				<h2>Incompleted Tasks</h2>
			</div>
			<ul className='incompleted__ul_List'>
				{incompletedTasks.map((el) => (
					<li>{el.task}</li>
				))}
			</ul>
		</div>
	)
}

export default IncompletedListComponent