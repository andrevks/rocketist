import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { ITask } from '../TaskList/Index';
import { MouseEvent, ChangeEvent, Dispatch, SetStateAction, useState, KeyboardEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface INewTaskProps{
  setTasks: Dispatch<SetStateAction<ITask[]>>
}
export function NewTask({ setTasks }: INewTaskProps) {
  const [newTask, setNewTask] = useState<string>()

  function handleChangeInput(e: ChangeEvent<HTMLInputElement> ): void{
    const taskDescription = e.target.value
    if(taskDescription) setNewTask(taskDescription);
  }
  
  function handleOnClickChange(e: MouseEvent<HTMLButtonElement>){
    if(newTask){
      setTasks( stateArray =>([
        ...stateArray,
        {
          id: uuidv4(),
          description: newTask,
          isDone: false
        }
      ]) )
      setNewTask(" ")
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>){
    if(e.key === 'Enter'){
      if(newTask){
        setTasks( stateArray =>([
          ...stateArray,
          {
            id: uuidv4(),
            description: newTask,
            isDone: false
          }
        ]))
        setNewTask(" ")
      }
    }
  }

  return (
    <div className={styles.newTask}>
      <input 
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
        value={newTask || ""}
        placeholder="Adicione uma nova tarefa" 
      />
      <button onClick={handleOnClickChange}>Criar <PlusCircle size={18} weight={'bold'} /></button>
    </div>
  )
}