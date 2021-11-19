import TodoList from './components/TodoList';
import Local from './components/Local';
import './App.css';
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
      <div className='fragment'>
        <div className='todo-app'>
          <TodoList />
        </div>
        <div className='todo-app'>  
          <Local />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
