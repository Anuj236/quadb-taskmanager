import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTaskStatus } from '../redux/tasksSlice';

//This is TaskItem component which displays the task and provides the functionality to update the status of the task and delete the task.

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask({ id: task.id }));
  };

  const handleStatusUpdate = (status) => {
    dispatch(updateTaskStatus({ id: task.id, status }));
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-800 p-2 rounded mt-2">
      <span
        className={`${
          task.status === 'completed' ? 'line-through text-red-700  ' : ''
        } mr-4 mb-2 md:mb-0`}
      >
        {task.title}
      </span>
      <span className="mr-4 bg-blue-500 text-white rounded p-1 mb-2 md:mb-0">
        {task.status}
      </span>
      <div className="flex flex-wrap">
        <button
          onClick={() => handleStatusUpdate('todo')}
          className={`p-2 ${
            task.status === 'todo' ? 'bg-emerald-900' : 'bg-orange-500'
          } text-white rounded mr-2 mb-2`}
        >
          Todo
        </button>
        <button
          onClick={() => handleStatusUpdate('active')}
          className={`p-2 ${
            task.status === 'active' ? 'bg-emerald-900' : 'bg-orange-500'
          } text-white rounded mr-2 mb-2`}
        >
          Active
        </button>
        <button
          onClick={() => handleStatusUpdate('completed')}
          className={`p-2 ${
            task.status === 'completed' ? 'bg-emerald-900' : 'bg-orange-500'
          } text-white rounded mr-2 mb-2`}
        >
          Completed
        </button>
        {task.status === 'completed' && (
          <button
            onClick={handleDelete}
            className="p-2 bg-red-500 text-white rounded mb-2"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskItem;