import {Header} from './components/Header/Index';
import {NewTask} from './components/NewTask/Index';
import {TaskList} from './components/TaskList/Index';

import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header/>
      <main className={styles.wrapper}>
        <NewTask/>
        <TaskList/>
      </main>
    </div>
  )
}

export default App
