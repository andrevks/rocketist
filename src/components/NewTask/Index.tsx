import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { ITask } from '../TaskList/Index';
import { ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface INewTaskProps{
  setTasks: Dispatch<SetStateAction<ITask[]>>
}
export function NewTask({ setTasks }: INewTaskProps) {
  const [newTask, setNewTask] = useState<ITask>()

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement> ): void{
    const taskDescription = e.target.value
    if(taskDescription){
      setNewTask({
        id: uuidv4(),
        description: taskDescription,
        isDone: false
      })
    }
  }
  function handleOnClickChange(e:any){
    if(newTask){
      setTasks( stateArray =>([
        ...stateArray,
        newTask!
      ]) )
    }
  }
  return (
    <div className={styles.newTask}>
      <input 
        onChange={handleChangeInput}
        placeholder="Adicione uma nova tarefa" 
      />
      <button onClick={handleOnClickChange}>Criar <PlusCircle size={18} weight={'bold'} /></button>
    </div>
  )
}