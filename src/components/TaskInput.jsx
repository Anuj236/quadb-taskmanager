import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

//This is TaskInput component which basically takes the input from the user and dispatches the addTask action to add the task to the store.

const TaskInput = () => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTitle(e.target.value);
    setError('');
  };

  const handleSubmit = () => {
    if (title.trim() === '') { //Checking if the title is empty
      setError('Please enter a task title');
    } else {
      dispatch(addTask({ title: title.trim() }));
      setSuccess('Task added successfully');
      setTitle('');
    }

    setTimeout(() => {
      setSuccess(null);
      setError(null);
    }, 3000);


  };

  return (
    <div className="flex flex-col w-full max-w-md">
      <div className="flex">
        <input
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={handleChange}
          onKeyDown={(e)=> e.key === 'Enter' && handleSubmit()}
          className="p-2 mr-2 flex-grow rounded bg-zinc-800 text-white"
        />
        <button
          onClick={handleSubmit}
          className="p-2 bg-green-500 text-white rounded"
        >
          Add Task
        </button>
      </div>
      {error && <p className="text-red-500 mt-2 mb-2">{error}</p>}
      {success && <p className="text-green-500 mt-2 mb-2">{success}</p>}
    </div>
  );
};

export default TaskInput;