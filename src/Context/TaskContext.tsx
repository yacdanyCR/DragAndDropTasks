import React, { createContext, useState } from 'react'
import { listTask, TaskContextProps } from '../Interface/TaskInterface'

interface TaskProviderProps {
	children: React.ReactNode
}

const taskTest = [{
	id: String(Date.now() + 1),
	task: "jack",
	completed: true
},
{
	id: String(Date.now() + 2),
	task: "Angely",
	completed: true
}, {
	id: String(Date.now() + 3),
	task: "Maria",
	completed: false,
}, {
	id: String(Date.now() + 1),
	task: "Joshua",
	completed: false
}

]

const TaskContext = createContext<TaskContextProps>({} as TaskContextProps)

const TaskProvider = ({ children }: TaskProviderProps) => {
	const [task, setTask] = useState<string>("")
	const [listTask, setlistTask] = useState<listTask[]>(taskTest)

	const handleAdd = () => {
		setTask("")
		setlistTask([...listTask, { id: String(Date.now()), task: task, completed: false }])
	}

	return (
		<TaskContext.Provider value={{ task, setTask, setlistTask, handleAdd, listTask }}>
			{children}
		</TaskContext.Provider>
	)
}

export {
	TaskProvider,
	TaskContext
}