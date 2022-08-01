import styles from './TaskListInfo.module.css';

interface ITaskInfoProps {
  qtyTaskCreated: number;
  qtyTaskDone: number;
}
export function TaskListInfo({ qtyTaskCreated, qtyTaskDone }: ITaskInfoProps){
  return (
    <div className={styles.taskListInfo}>
      <strong className={styles.taskCreatedCount}>
        Tarefas Criadas
        <span>{ qtyTaskCreated }</span>
      </strong>

      <strong className={styles.taskDoneCount}>
        Concluídas
        <span>{qtyTaskDone} de {qtyTaskCreated}</span>
      </strong>
    </div>
  )
}