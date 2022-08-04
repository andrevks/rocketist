import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { ITask } from '../TaskList/Index';
import { Dispatch, SetStateAction, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface INewTaskProps{
  setTasks: Dispatch<SetStateAction<ITask[]>>
}
export function NewTask({ setTasks }: INewTaskProps) {
  const [newTask, setNewTask] = useState<ITask>()

  function handleChangeInput(e:any){
    const taskDescription = e.target.value
    setNewTask({
      id: uuidv4(),
      description: taskDescription,
      isDone: false
    })

    console.log(taskDescription)
   
  }
  function handleOnClickChange(e:any){
     setTasks( stateArray =>([
      ...stateArray,
      newTask!
    ]) )
  }
  return (
    <div className={styles.newTask}>
      <input 
        onChange={handleChangeInput}
        onClick={handleOnClickChange}
        placeholder="Adicione uma nova tarefa" 
      />
      <button>Criar <PlusCircle size={18} weight={'bold'} /></button>
    </div>
  )
}