import styles from './TaskList.module.css';
import { Task } from '../Task/Index';
import { TaskListInfo } from '../TaskListInfo/Index';
import { useState, SetStateAction, Dispatch } from 'react';
export interface ITask{
  id: string
  description: string
  isDone: boolean
}

export interface ITaskListProps{
  setTasks: Dispatch<SetStateAction<ITask[]>>
  tasks: ITask[]
}
export function TaskList({ tasks, setTasks }: ITaskListProps) {

  

  const qtyTaskCreated = tasks.length || 0
  const qtyTaskDone = tasks.filter( (task:ITask) => task.isDone ).length || 0

 

  return (
    <div className={styles.taskList}>

      <TaskListInfo qtyTaskCreated={qtyTaskCreated} qtyTaskDone={qtyTaskDone}/>

      {tasks.map( 
          ({id, description, isDone}) => 
            <Task 
              key={id} 
              id={id}
              description={description}
              isDone={isDone}
              setTasks={setTasks}
              tasks={tasks}
            />
        )}  
    </div>
  )
}