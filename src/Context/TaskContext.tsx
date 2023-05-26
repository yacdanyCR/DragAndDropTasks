import React, { createContext, useState, useEffect } from 'react'
import { listTask, TaskContextProps } from '../Interface/TaskInterface'

interface TaskProviderProps {
	children: React.ReactNode
}

const TaskContext = createContext<TaskContextProps>({} as TaskContextProps)

const TaskProvider = ({ children }: TaskProviderProps) => {
	const [task, setTask] = useState<string>("")
	const [listTask, setlistTask] = useState<listTask[]>([])

	const handleAdd = (): void => {
		setTask("")
		setlistTask([...listTask, { id: String(Date.now()), task: task, completed: false }])
		localStorage.setItem("data_Task", JSON.stringify(listTask))
	}

	const handleDeleteTask = (id: string): void => {
		setlistTask(listTask.filter((el) => el.id !== id))
		localStorage.setItem("data_Task", JSON.stringify(listTask))
	}

	useEffect(() => {
		if (localStorage.getItem("data_Task")) {
			const dataLocalStorage = localStorage.getItem("data_Task") || ""
			setlistTask(JSON.parse(dataLocalStorage))
		}
	}, [])


	return (
		<TaskContext.Provider value={{ task, setTask, setlistTask, handleAdd, handleDeleteTask, listTask }}>
			{children}
		</TaskContext.Provider>
	)
}

export {
	TaskProvider,
	TaskContext
}