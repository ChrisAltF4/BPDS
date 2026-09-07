import FilterButton from "./Todofilters.components";

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

            <FilterButton
                label="All"
                onClick={() => onFilterChange("all")}
            />
            <FilterButton
                label="Active"
                onClick={() => onFilterChange("active")}
            />
            <FilterButton
                label="Completed"
                onClick={() => onFilterChange("completed")}
            />
            
        </div>
    );
}