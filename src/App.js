import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

const defaultTodos = [
  { id: 1, title: "Русский язык: словарные слова", completed: false },
  { id: 2, title: "Математмка: с.38 №4, б/н", completed: false },
  { id: 3, title: "Лит. чтение: с.48 наизусть", completed: false },
];

export default function App() {
  const [todos, setTodos] = useState(defaultTodos);

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <CreateTodo onCreate={setTodos} />
      <Todos todos={todos} setTodos={setTodos} onRemove={onRemove} />
    </div>
  );
}
