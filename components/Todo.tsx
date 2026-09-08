import { useState } from "react";

const Todo = ({
  title,
  completed,
  handleSetCompleted,
  handleDelete,
  handleEditTodo,
}: {
  title: string;
  completed: boolean;
  handleSetCompleted: () => void;
  handleEditTodo: (newTitle: string) => void;
  handleDelete: () => void;
}) => {
    const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(title);

  const saveEdit = () => {
    if (editText.trim() !== "") {
      handleEditTodo(editText);
    } else {
      setEditText(title);
    }
    setIsEditing(false);
  };
  return (
    <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600 rounded-lg">
      <div className="flex items-center">
        {
          completed ? (
            <div onClick={handleSetCompleted}
            className="bg-green-700 p-1 rounded-full cursor-pointer">
              <img 
              className="h-4 w-4"
              src="check-icon.svg"
              alt= "Check Icon" 
              />
           </div>
          ): (
            <span onClick={handleSetCompleted} className="border-solid border border-gray-500 rounded-full p-3 cursor-pointer"></span>
          )
        }
       {isEditing ? (
  <input
    type="text"
    value={editText}
    autoFocus
    onChange={(e) => setEditText(e.target.value)}
    onBlur={saveEdit}
    onKeyDown={(e) => {
      if (e.key === "Enter") saveEdit();
      if (e.key === "Escape") {
        setEditText(title);
        setIsEditing(false);
      }
    }}
    className="pl-3 bg-transparent border-b border-gray-400 outline-none flex-1"
  />
) : (
  <p
    onClick={() => setIsEditing(true)}
    className={`pl-3 cursor-text ${completed ? "line-through text-gray-400" : ""}`}
  >
    {title}
  </p>
)}
      </div>
      <img onClick={handleDelete}
        className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"
        src="/close-icon.svg"
        alt="Close Icon"
      />
    </div>
  );
};

export { Todo };