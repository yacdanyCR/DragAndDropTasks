import React, { createContext, useState } from 'react'
import { listTask, TaskContextProps } from '../Interface/TaskInterface'

interface TaskProviderProps {
	children: React.ReactNode
}

const TaskContext = createContext<TaskContextProps>({} as TaskContextProps)

const TaskProvider = ({ children }: TaskProviderProps) => {
	const [task, setTask] = useState<string>("")
	const [listTask, setlistTask] = useState<listTask[]>([])

	const handleAdd = () => {
		setTask("")
		setlistTask([...listTask, { id: Date.now(), task: task, completed: false }])
	}

	return (
		<TaskContext.Provider value={{ task, setTask, setlistTask, handleAdd }}>
			{children}
		</TaskContext.Provider>
	)
}

export {
	TaskProvider,
	TaskContext
}