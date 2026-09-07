type FilterButtonProps = {
    label: string;
    onClick: () => void;
};

export default function FilterButton({
    label,
    onClick,
}: FilterButtonProps) {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
}