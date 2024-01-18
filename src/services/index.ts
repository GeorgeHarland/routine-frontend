import axios from "axios";
import { TaskType } from "../types";

const API_BASE_URL = "http://localhost:8000/api";

export const createTask = async (task: TaskType) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/tasks`, task);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
  }
};

export const updateTask = async (id: number, updatedTask: TaskType) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/tasks/${id}`,
      updatedTask,
    );
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

export const deleteTask = async (id: number) => {
  try {
    await axios.delete(`${API_BASE_URL}/tasks/${id}`);
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

export const getTasks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tasks`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};
