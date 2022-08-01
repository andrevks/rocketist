import { Trash } from 'phosphor-react';
import { FormEvent, MouseEventHandler } from 'react';
import styles from './Task.module.css';

interface Itask {
  description: string
  isDone: boolean
  isDeleted: boolean
}

export function Task({ description, isDone, isDeleted }: Itask) {

  function handleDoneTask(event: any) {
    event.preventDefault()

    
    console.log('Task done')
  }

 function handleDeleteTask(event: any){
  event.preventDefault()
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
