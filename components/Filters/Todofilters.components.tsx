const FiltersContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid-600">
            {children}
        </div>
    );
};

export { FiltersContainer };

conts ItemsLeft = ({ total = 0 }) => {
    return (
        <p className="text-gray-400 text-sm">
            {total} item{total !== 1 ? 's' : ''} left
        </p>
    );
};

const FilterButtonContainer = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="flex items-center space-x-2">
            {children}
        </div>
    );
}

const FilterButton = ({
    action,
    active,
    filter,
}: {
    action: () => void;
    active: string;
    filter: string;
}) => {
    return (
        <button
            onClick={action}
            className={
                "hover:text-white cursor-pointer transition-all duration-300 ease-in-out" +
                (active.toLowerCase().includes(filter.toLowerCase()) ? " text-blue-400" : " text-gray-400")
            }
        >
            {filter}
        </button>
    );
};

export {
    FiltersContainer,
    ItemsLeft,
    FilterButtonContainer,
    FilterButton,
};