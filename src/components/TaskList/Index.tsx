import styles from './TaskList.module.css';
import { Task } from '../Task/Index';
import { TaskListInfo } from '../TaskListInfo/Index';
import { useState } from 'react';
export interface ITask{
  id: number
  description: string
  isDone: boolean
  isDeleted: boolean
}
export function TaskList() {

  const tasksData = [
    {
      id: 1,
      description: 'Estudar ReactJS na Rocketseat.',
      isDone: false,
      isDeleted: false,
    },
    {
      id: 2,
      description: 'Fazer um Hackintosh brabo. Depois configurar o Xcode e o conectar com a Apple Store.',
      isDone: false,
      isDeleted: false,
    },
    {
      id: 3,
      description: 'Construir um foguete para a Lua.',
      isDone: true,
      isDeleted: false,
    }
  ]
  const [tasks, setTasks] = useState<ITask[]>(tasksData)

  console.log(tasks)

  const qtyTaskCreated = tasks.length || 0
  const qtyTaskDone = tasks.filter( (task:ITask) => task.isDone ).length || 0

 

  return (
    <div className={styles.taskList}>

      <TaskListInfo qtyTaskCreated={qtyTaskCreated} qtyTaskDone={qtyTaskDone}/>

      {tasks.map( 
          ({id, description, isDone, isDeleted}) => 
            <Task 
              key={id} 
              id={id}
              description={description}
              isDone={isDone}
              isDeleted={isDeleted}
              setTasks={setTasks}
            />
        )}  
    </div>
  )
}