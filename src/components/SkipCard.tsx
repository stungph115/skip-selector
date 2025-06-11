// src/components/SkipCard.tsx
interface Props {
    size: number;
    price: number;
    hirePeriod: number;
    imageUrl: string;
    selected: boolean;
    allowedOnRoad: boolean;
    onSelect: () => void;
}

export function SkipCard({
    size,
    price,
    hirePeriod,
    imageUrl,
    selected,
    allowedOnRoad,
    onSelect,
}: Props) {
    return (
        <div
            role="button"
            tabIndex={0}
            onClick={onSelect}
            onKeyDown={e => e.key === 'Enter' && onSelect()}
            className={`
        w-full                   /* full width on mobile */
        flex flex-col
        ${selected ? 'bg-gray-700 ring-2 ring-blue-500' : 'bg-gray-800'}
        rounded-2xl shadow-xl
        p-4 sm:p-6               /* smaller padding on phone, larger on sm+ */
        transition hover:shadow-2xl
      `}
        >
            <div className="relative mb-4">
                <img
                    src={imageUrl}
                    alt={`${size}-yard skip`}
                    className="w-full h-70 sm:h-48 object-cover rounded-lg"
                />
                {!allowedOnRoad && (
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-red-300 text-xs px-2 py-1 rounded inline-flex items-center">
                        Not Allowed On The Road
                    </div>
                )}
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {size} Yards
                </span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                {size} Yard Skip
            </h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
                {hirePeriod}-day hire period
            </p>
            <div className="mt-auto flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-bold text-white">
                    £{price}
                </span>
                <button
                    onClick={e => { e.stopPropagation(); onSelect(); }}
                    className={`
            px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg
            ${selected
                            ? 'bg-blue-600 text-white cursor-default'
                            : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}
          `}
                >
                    {selected ? 'Selected ✓' : 'Select'}
                </button>
            </div>
        </div>
    );
}
