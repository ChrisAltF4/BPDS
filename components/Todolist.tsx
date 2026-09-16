import { TodoFilters } from "./Filters/TodoFilters";
import { Todo } from "./Todo";

type TodoItem = { id: number; title: string; completed: boolean };

const Todolist = ({
  todos,
  deletedTodos,
  handleSetCompleted,
  handleDelete,
  handleEditTodo,
  activeFilter,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
  showDeletedTodos,
  handleClearComplete,
}: {
  todos: TodoItem[];
  deletedTodos: TodoItem[];
  handleSetCompleted: (id: number) => void;
  handleDelete: (id: number) => void;
  handleEditTodo: (id: number, newTitle: string) => void;
  activeFilter: string;
  showAllTodos: () => void;
  showActiveTodos: () => void;
  showCompletedTodos: () => void;
  showDeletedTodos: () => void;
  handleClearComplete: () => void;
}) => {
  return (
    <div className="flex flex-col mt-7 overflow-hidden shadow-2xl rounded-lg">
      {activeFilter === "deleted" ? (
        deletedTodos.length > 0 ? (
          deletedTodos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center p-4 bg-gray-700 border-b border-solid border-gray-600 rounded-lg"
            >
              <p className="text-gray-400 line-through">{todo.title}</p>
            </div>
          ))
        ) : (
          <p className="p-4 text-gray-400 italic">No hay tareas eliminadas</p>
        )
      ) : (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            handleSetCompleted={() => handleSetCompleted(todo.id)}
            handleDelete={() => handleDelete(todo.id)}
            handleEditTodo={(newTitle) => handleEditTodo(todo.id, newTitle)}
          />
        ))
      )}

      <TodoFilters
        activeFilter={activeFilter}
        total={todos.length}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        showDeletedTodos={showDeletedTodos}
        handleClearComplete={handleClearComplete}
      />
    </div>
  );
};

export { Todolist };