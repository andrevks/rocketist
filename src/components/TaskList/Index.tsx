import styles from './TaskList.module.css';
import { Task } from '../Task/Index';
import { TaskListInfo } from '../TaskListInfo/Index';
import { useState } from 'react';
export interface ITask{
  id: number
  description: string
  isDone: boolean
}
export function TaskList() {

  const tasksData = [
    {
      id: 1,
      description: 'Estudar ReactJS na Rocketseat.',
      isDone: false,
    },
    {
      id: 2,
      description: 'Fazer um Hackintosh brabo. Depois configurar o Xcode e o conectar com a Apple Store.',
      isDone: false,
    },
    {
      id: 3,
      description: 'Construir um foguete para a Lua.',
      isDone: false,
    }
  ]
  const [tasks, setTasks] = useState<ITask[]>(tasksData)

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