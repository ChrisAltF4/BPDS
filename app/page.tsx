"use client"

import { Title } from "@/Components/Title";
import { Todo } from "@/Components/Todo";
import { TodoInput } from "@/Components/Todoinput";
import { Todolist } from "@/Components/Todolist";
import { todo } from "node:test";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodo] = useState([
    {
      id: 1,
      title: "Verme toda la serie del mentalista",
      completed: false,
    },
    {
      id: 2,
      title: "Entregar la todo list",
      completed: false,
    },
    {
      id: 3,
      title: "Estudiar Calculo diferencial",
      completed: false,
    },
    {
      id: 4,
      title: "Saludar a la profe en clase",
      completed: false,
    },
  ]);

  const [activeFilter, setActiveFilter] =useState('all')
  const [filteredTodos, setFilteredTodos] =useState (todos)

  const addTodo = (title: string) => {
    const lastId = todos.length > 0 ? todos [todos.length- 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    } 

    const todoList =[...todos]
    todoList.push(newTodo);
    setTodo(todoList);
  }

  const handleSetCompleted = (id: number) => {
    const updateList = todos.map (todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo;
    })
    setTodo(updateList);
  }
  const handleDelete = (id: number) => {
    const updateList = todos.filter(todo => todo.id !== id)
    setTodo(updateList)
  }
  
  const handleEditTodo = (id: number, newTitle: string) => {
  const updateList = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, title: newTitle };
    }
    return todo;
  });
  setTodo(updateList);
};

  const handleClearComplete = () => {
  const updateList = todos.filter(todo => !todo.completed);
  setTodo(updateList);
  }

  const showAllTodos = () => {
    setActiveFilter('all')
  }

  const showActiveTodos = () => {
    setActiveFilter('active')
  }

  const showCompletedTodos = () => {
    setActiveFilter('completed')
  }

  useEffect(() =>{
    if(activeFilter === 'all') {
      setFilteredTodos(todos)
    } else if ( activeFilter === 'active') {
      const activeTodos = todos.filter(todo => todo.completed === false)
      setFilteredTodos(activeTodos)
    } else if (activeFilter === 'completed') {
      const completedTodos = todos.filter(todo => todo.completed === true)
      setFilteredTodos(completedTodos)
    }
  }, [activeFilter, todos]
)

  return (
    <div className="bg-gray-900 min-h-screen h-full text-amber-300 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoInput addTodo={addTodo} />
        <Todolist
        todos={filteredTodos}
        activeFilter={activeFilter}
        handleSetCompleted={handleSetCompleted}
        handleDelete={handleDelete}
        handleEditTodo={handleEditTodo}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearComplete={handleClearComplete}
/>
      </div>
    </div>
  );
}
