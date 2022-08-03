import { Trash } from 'phosphor-react';
import { Dispatch, FormEvent, MouseEventHandler, SetStateAction } from 'react';
import { ITask } from '../TaskList/Index';
import styles from './Task.module.css';

interface ITaskProps {
  id: number
  description: string
  isDone: boolean
  setTasks:  Dispatch<SetStateAction<ITask[]>>
  tasks: Array<any>
}

export function Task({ id, description, isDone, setTasks, tasks }: ITaskProps) {

  function handleDoneTask(event: any, taskId: number) {
    console.log('Task done')
    setTasks(
      stateArray => [
        ...stateArray.filter(state => state.id !== id),
        {
          id,
          description,
          isDone
        }
      ]
      )
  }

 function handleDeleteTask(event: any){
  console.log('Task deleted')
  setTasks(
    stateArray =>  stateArray.filter( state => state.id !== id)
  )
  
 }

  return (
    <div className={styles.task}>
      <label className={styles.circle} onClick={(e) => handleDoneTask(e, id)}>
        <input type='checkbox'/>
        <span className={styles.checkmark}></span>
      </label>
      <p className={isDone ? styles.descriptionTaskDone: styles.description}>
        { description }
      </p>
      <div className={styles.trash} onClick={handleDeleteTask}>
        <Trash size={18} weight={'bold'}  /> 
      </div> 
    </div>
  )
}
