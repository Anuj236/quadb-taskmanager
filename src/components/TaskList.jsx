import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

//This is TaskList component which displays the list of tasks.

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div className="w-full max-w-3xl mt-4">
      <div className="overflow-y-auto">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;