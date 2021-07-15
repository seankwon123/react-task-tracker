import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle}) => { // we can also do props.tasks but this is more convenient
    return (
        <>
        {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onToggle={onToggle}
            />
        ))}
        </>
    )
}

export default Tasks