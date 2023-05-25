import { useState } from 'react'

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
		<div>
			<input onChange={(e) => setTask(e.target.value)} />
			<button onClick={handleAdd}>Add</button>
		</div>
	)
}

export default InputComponent