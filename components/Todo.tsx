const FiltersContainer= ({children}: {children: React.ReactNode}) => {
    return (
        <div className="flex item-center justify-between p-4 bg-gray-700 border-b border-solid-600">
            {children}
        </div>
    )
}

const ItemsLeft= ({ total = 0 }) => (
    <p className="text-gray-400 text-sm">
        {total} items left
    </p>
)

const FilterButtonContainer= ({children}: {children: React.ReactNode}) => {
    return (
        <div className="flex item-center space-x-2">
            {children}
        </div>
    )
}

const FilterButton= ({
    action,
    active,
    filter,
}: {
    action: () => void
    active: string;
    filter: string;
}) => {
    return (
        <button
        onclick={action}
        className={
            "hover:text-white cursor-pointer transition-all duration-300 text-sm " +
            (active.toLowerCase().includes(filter.toLowerCase())) ? "text-blue-400" : "text-gray-400"
        }
        >
            {filter}
        </button>
    )
}   

export { FiltersContainer, ItemsLeft, FilterButtonContainer, FilterButton }