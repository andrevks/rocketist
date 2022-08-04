import { Trash } from 'phosphor-react';
import { Dispatch, FormEvent, MouseEventHandler, SetStateAction } from 'react';
import { ITask } from '../TaskList/Index';
import styles from './Task.module.css';

interface ITaskProps {
  id: string
  description: string
  isDone: boolean
  setTasks:  Dispatch<SetStateAction<ITask[]>>
  tasks: Array<any>
}

export function Task({ id, description, isDone, setTasks, tasks }: ITaskProps) {

  function handleDoneTask(event: any) {
    console.log('Task done', id)
    setTasks(
        stateArray => stateArray.map(
          state => {
            if(state.id === id){
              return {
                id: state.id,
                description: state.description,
                isDone: true
              }
            }
            return state
          }
        )
       )
      
  }

 function handleDeleteTask(event: any){
  setTasks(
    stateArray =>  stateArray.filter( state => state.id !== id)
  ) 
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
