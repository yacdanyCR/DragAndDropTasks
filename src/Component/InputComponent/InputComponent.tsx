import { useContext } from 'react'
import './style.css'
import { TaskContext } from '../../Context/TaskContext'

const InputComponent = () => {
	const { handleAdd, setTask, task } = useContext(TaskContext)

	return (
		<div className='input__Section'>
			<input onChange={(e) => setTask(e.target.value)} placeholder='¡Add Something!' value={task} />
			<button className='addTask__Button' onClick={handleAdd}>Add</button>
		</div>
	)
}

export default InputComponent