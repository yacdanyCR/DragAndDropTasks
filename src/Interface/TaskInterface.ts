interface listTask {
	id: number,
	task: string,
	completed: boolean
}

interface TaskContextProps {
	setTask: React.Dispatch<React.SetStateAction<string>>,
	setlistTask: React.Dispatch<React.SetStateAction<listTask[]>>,
	handleAdd: () => void
}

export type {
	listTask,
	TaskContextProps
}