import { Trash } from 'phosphor-react';
import { Dispatch, FormEvent, MouseEventHandler, SetStateAction } from 'react';
import { ITask } from '../TaskList/Index';
import styles from './Task.module.css';

interface ITaskProps {
  id: number
  description: string
  isDone: boolean
  isDeleted: boolean
  setTasks:  Dispatch<SetStateAction<ITask[]>>;
}

export function Task({ id, description, isDone, isDeleted, setTasks }: ITaskProps) {

  function handleDoneTask(event: any) {
    console.log('Task done')
    setTasks(
      state =>  [
        ...state,
        state.find( task => task.id === id)!
      ]
    )
    
  }

 function handleDeleteTask(event: any){
  console.log('Task deleted')
 }

  return (
    <div className={styles.task}>
      <label className={styles.circle} onClick={handleDoneTask}>
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
