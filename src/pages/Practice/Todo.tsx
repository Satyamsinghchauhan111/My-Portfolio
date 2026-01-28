import { useState } from "react";

type todoType = {
  id: number | string;
  task: string;
  completed: boolean;
};

const Todo = () => {
  const todoList = [
    { id: 1, task: "Learn React", completed: false },
    { id: 2, task: "Build a Todo App", completed: false },
    { id: 3, task: "Master TypeScript", completed: false },
  ];

  const [allTasks, setAllTasks] = useState<todoType[]>(todoList);
  const [newTask, setNewTask] = useState("");
  const [updateTask, setUpdateTask] = useState("");
  const [UpdatedTask, setUpdatedTask] = useState(true);
  const [hideAddTask, setHideAddTask] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState<
    string | number | undefined
  >();

  const handleCreateTask = () => {
    setHideAddTask(!hideAddTask);
  };

  console.log(allTasks);
  const handleAddTask = () => {
    const nTask: todoType = {
      id: Math.random().toFixed(2),
      task: newTask,
      completed: false,
    };
    setAllTasks((prev) => [...prev, nTask]);
    setNewTask("");
  };

  const handleDeleteTask = (id) => {
    const updatedTask = allTasks.filter((t) => t.id != id);
    setAllTasks(updatedTask);
  };

  const handleUpdateTask = (task: todoType) => {
    setAllTasks((prev) =>
      prev.map((p) => (p.id === task.id ? { ...p, task: updateTask } : p))
    );
    setEditingTaskId(null);
    setUpdatedTask(true);
  };

  const handleHideInput = (task) => {
    setUpdateTask(task.task);
    editingTaskId === task.id ? setUpdatedTask(false) : setUpdatedTask(true);
  };

  return (
    <div className="flex gap-3 p-4">
      <div>
        <h1>Todo List</h1>
        {allTasks.map((t) => (
          <div className="flex gap-4 p-4" key={t.id}>
            {editingTaskId === t.id && UpdatedTask ? (
              <>
                <input
                  type="text"
                  value={updateTask}
                  onChange={(e) => setUpdateTask(e.target.value)}
                />
                <button
                  className=" bg-cyan-600 rounded-lg p-1 px-2"
                  onClick={() => handleUpdateTask(t)}
                >
                  update
                </button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() =>
                    setAllTasks((pre) =>
                      pre.map((p) =>
                        p.id === t.id ? { ...p, completed: !p.completed } : p
                      )
                    )
                  }
                />
                {t.task}
                <button
                  className=" bg-cyan-600 rounded-lg p-1 px-2"
                  onClick={() => {
                    setEditingTaskId(t.id);
                    handleHideInput(t);
                  }}
                >
                  update task
                </button>
              </>
            )}

            <button
              className=" bg-red-400 rounded-lg p-1 px-2"
              onClick={() => handleDeleteTask(t.id)}
            >
              delete task
            </button>
          </div>
        ))}
      </div>

      <div className="flex gap-4 flex-col">
        <h2>Create task</h2>

        {hideAddTask ? (
          <div className="flex gap-4">
            <input
              type="text"
              className="rounded-lg p-3"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              className=" bg-stone-400 rounded-lg p-1 px-2"
              onClick={() => handleAddTask()}
              disabled={newTask.length === 0}
            >
              Add task
            </button>
            <button
              className=" bg-red-400 rounded-lg p-1 px-4 "
              onClick={() => handleCreateTask()}
            >
              X
            </button>
          </div>
        ) : (
          <div>
            <button
              className=" bg-stone-400 rounded-lg p-1 px-2"
              onClick={() => handleCreateTask()}
            >
              Create task
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
