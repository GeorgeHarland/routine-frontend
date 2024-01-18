import React, { useState, useEffect } from "react";
import { GoPlus } from "react-icons/go";
import { HiCheck, HiMinus, HiTrash } from "react-icons/hi";
import { createTask, deleteTask, getTasks, updateTask } from "../services";
import { CategoryType, TaskType } from "../types";

type Props = {
  title: string;
};

const TaskBlock = ({ title }: Props) => {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [todos, setTodos] = useState<TaskType[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await getTasks();
        setTodos(
          fetchedTasks.filter((task: TaskType) => task.category === title),
        );
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [title]);

  const toggleDropdown = () => {
    setIsInputOpen(!isInputOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      submitNewTodo();
    }
  };

  const submitNewTodo = async () => {
    const titleCast = title as CategoryType;
    try {
      const newTodo = await createTask({
        title: inputValue,
        completed: false,
        category: titleCast,
      });
      setTodos([...todos, newTodo]);
      setInputValue("");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const markTodoComplete = async (id: number) => {
    const taskToUpdate = todos.find((todo) => todo.id === id);

    if (taskToUpdate) {
      try {
        const updatedTodo = await updateTask(id, {
          ...taskToUpdate,
          completed: !taskToUpdate.completed,
        });
        setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
      } catch (error) {
        console.error("Error updating task:", error);
      }
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await deleteTask(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="rounded-lg border-2 border-black p-2 md:min-w-48 lg:min-w-60 xl:min-w-[22rem] 2xl:min-w-[26rem]">
      <div className="border-b pb-2 border-black">
        <div className="flex justify-between">
          <h2>{title}</h2>
          {isInputOpen ? (
            <HiMinus
              className="cursor-pointer text-2xl"
              onClick={toggleDropdown}
            />
          ) : (
            <GoPlus
              className="cursor-pointer text-2xl"
              onClick={toggleDropdown}
            />
          )}
        </div>
        {isInputOpen && (
          <div className="flex gap-2 py-2">
            <input
              type="text"
              placeholder="Enter task"
              className="flex-1 rounded border-2 border-gray-300 bg-white p-1"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
            <button
              onClick={submitNewTodo}
              className="bg-blue-800 text-white rounded p-1"
            >
              <GoPlus />
            </button>
          </div>
        )}
      </div>
      {todos.length > 0 ? (
        <div className="flex flex-col mt-2 gap-y-2">
          {todos.map((todo) => (
            <div key={todo.id} className="flex justify-between gap-x-1">
              <div
                className={`border border-black rounded-sm ${todo.completed ? "bg-green-300" : "bg-blue-300"} w-full`}
              >
                <p className={`p-1 ${todo.completed ? "line-through" : ""}`}>
                  {todo.title}
                </p>
              </div>
              <button
                onClick={() => {
                  todo.id && markTodoComplete(todo.id);
                }}
                className="bg-blue-800 text-white rounded p-1"
              >
                {!todo.completed ? <HiCheck /> : <HiMinus />}
              </button>
              <button
                onClick={() => {
                  todo.id && deleteTodo(todo.id);
                }}
                className="bg-blue-800 text-white rounded p-1"
              >
                <HiTrash />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="pt-2">{"No tasks yet :("}</p>
      )}
    </div>
  );
};

export default TaskBlock;
