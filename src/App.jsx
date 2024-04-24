import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white flex flex-col justify-center items-center px-4">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;