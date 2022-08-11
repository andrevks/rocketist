import {Header} from './components/Header/Index';
import {NewTask} from './components/NewTask/Index';
import { TaskList } from './components/TaskList/Index';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import './global.css';

import { useState } from 'react';



export interface ITask{
  id: string
  description: string
  isDone: boolean
}


const tasksData: ITask[] = [
  {
    id: uuidv4(),
    description: 'Estudar ReactJS na Rocketseat.',
    isDone: false,
  },
  {
    id: uuidv4(),
    description: 'Fazer um Hackintosh brabo. Depois configurar o Xcode e o conectar com a Apple Store.',
    isDone: false,
  },
  {
    id: uuidv4(),
    description: 'Construir um foguete para a Lua.',
    isDone: false,
  },
]


export function App() {
 
  const [tasks, setTasks] = useState<ITask[]>(tasksData)
  return (
      <div >
        <Header/>
        <main className={styles.wrapper}>
          <NewTask setTasks={setTasks}/>
          <TaskList setTasks={setTasks} tasks={tasks}/>
        </main>
      </div>
    )  
}

export default App
