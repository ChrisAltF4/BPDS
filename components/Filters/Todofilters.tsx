type TodoFilter = "all" | "active" | "completed";

type TodofiltersProps = {
    onFilterChange: (filter: TodoFilter) => void;
};

export default function TodoFilters({
    onFilterChange,
}: TodofiltersProps) {
    return (
        <div>
            <h2>Todo Filters</h2>

            <button> onClick={() => onFilterChange("all")}>All</button>
            <button> onClick={() => onFilterChange("active")}>Active</button>
            <button> onClick={() => onFilterChange("completed")}>Completed</button> 
            
        </div>
    );
}