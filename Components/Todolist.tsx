import { TodoFilters } from "./Filters/Todofilters";
import { Todo } from "./Todo";

type TodoItem = {
  id: number;
  title: string;
  completed: boolean;
};

const Todolist = ({
  todos,
  handleSetCompleted,
  handleDelete,
  activeFilter,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
  handleClearComplete,
  handleEditTodo,
}: {
  todos: TodoItem[];
  handleSetCompleted: (id: number) => void;
  handleDelete: (id: number) => void;
  activeFilter: string;
  showAllTodos: () => void;
  showActiveTodos: () => void;
  showCompletedTodos: () => void;
  handleEditTodo: (id: number, newTitle: string) => void;
  handleClearComplete: () => void;
}) => {
  return (
    <div className="flex flex-col mt-7 overflow-hidden shadow-2xl rounded-lg">
      {todos.map((todo) => (
        <Todo
        key={todo.id}
        title={todo.title}
        completed={todo.completed}
        handleSetCompleted={() => handleSetCompleted(todo.id)}
        handleDelete={() => handleDelete(todo.id)}
        handleEditTodo={(newTitle: string) => handleEditTodo(todo.id, newTitle)}
        />
      ))}
      <TodoFilters
        activeFilter={activeFilter}
        total={todos.length}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearComplete={handleClearComplete}
      />
    </div>
  );
};

export { Todolist };