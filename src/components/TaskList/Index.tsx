import styles from './TaskList.module.css';
import { Task } from '../Task/Index';
import { TaskListInfo } from '../TaskListInfo/Index';

export function TaskList() {

  const tasks = [
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
  const qtyTaskCreated = tasks.length
  const qtyTaskDone = tasks.filter( task => task.isDone ).length

  return (
    <div className={styles.taskList}>

      <TaskListInfo qtyTaskCreated={qtyTaskCreated} qtyTaskDone={qtyTaskDone}/>

      {tasks.map( 
          ({id, description, isDone, isDeleted}) => 
            <Task 
              key={id} 
              description={description}
              isDone={isDone}
              isDeleted={isDeleted}
            />
        )}  
    </div>
  )
}