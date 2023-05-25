import { useState } from 'react'
import './style.css'

interface listTask {
	id: number,
	task: string,
	completed: boolean
}

const InputComponent = () => {
	const [task, setTask] = useState<string>("")
	const [listTask, setlistTask] = useState<listTask[]>([])

	const handleAdd = () => {
		setlistTask([...listTask, { id: Date.now(), task: task, completed: false }])
	}

	return (
		<div className='input__Section'>
			<input onChange={(e) => setTask(e.target.value)} placeholder='¡Add Something!' />
			<button className='addTask__Button' onClick={handleAdd}>Add</button>
		</div>
	)
}

export default InputComponent