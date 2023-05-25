interface listTask {
	id: string,
	task: string,
	completed: boolean
}

interface TaskContextProps {
	task: string,
	setTask: React.Dispatch<React.SetStateAction<string>>,
	setlistTask: React.Dispatch<React.SetStateAction<listTask[]>>,
	listTask: listTask[],
	handleAdd: () => void,
	handleDeleteTask: (id: string) => void
}

export type {
	listTask,
	TaskContextProps
}