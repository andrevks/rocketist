import { Trash } from 'phosphor-react';
import { Dispatch, FormEvent, MouseEventHandler, SetStateAction } from 'react';
import { ITask } from '../TaskList/Index';
import styles from './Task.module.css';

interface ITaskProps {
  id: string
  description: string
  isDone: boolean
  setTasks:  Dispatch<SetStateAction<ITask[]>>
  tasks: ITask[]
}

export function Task({ id, description, isDone, setTasks, tasks }: ITaskProps) {

  function handleDoneTask(event: any) {
    //mark task as isdone equals to true 
    const taskIndex = tasks.find( (task) => task.id === id)
    if(taskIndex) {
      const newTaskArray = tasks.map( task => {
        if(taskIndex.id === task.id){
          return {
            ...task,
            isDone: !isDone
          }
        }
        return task

      })
      setTasks(newTaskArray)
    }
  }

 function handleDeleteTask(event: any){
  setTasks(
    stateArray =>  stateArray.filter( state => state.id !== id)
  ) 
 }

  return (
    <div className={styles.task}>
      <label className={styles.circle} >
        <input type='checkbox' onClick={handleDoneTask}/>
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
