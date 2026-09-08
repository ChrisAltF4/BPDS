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