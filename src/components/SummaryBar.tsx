interface Props {
    label: string;
    price: number;
    hirePeriod: number;
    disabled: boolean;
    onContinue: () => void;
}

export function SummaryBar({
    label,
    price,
    disabled,
    hirePeriod,
    onContinue,
}: Props) {
    return (

        <div
            className="
        fixed bottom-0 inset-x-0 bg-gray-800 border-t border-gray-700
        pb-safe-bottom sm:pb-0 px-8 sm:px-10 lg:px-14
        flex flex-col
      "
        >

            <div className="px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
                <div className="text-center sm:text-left">
                    <div className="text-lg font-semibold text-white">{label}</div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-1">
                        <span className="text-xl sm:text-2xl font-bold text-white">£{price}</span>
                        <span className="text-sm text-gray-300">/ {hirePeriod}-day hire</span>
                    </div>
                </div>

                <button
                    onClick={onContinue}
                    disabled={disabled}
                    className="
            bg-blue-600 text-white
            px-6 py-2.5 sm:px-8 sm:py-3
            rounded-lg
            disabled:opacity-50
          "
                >
                    Continue →
                </button>
            </div>

            <div className="px-4 pb-4 text-xs text-gray-500 text-center">
                Imagery and information shown throughout this website may not reflect the
                exact shape or size specification; colours may vary; options and/or
                accessories may be featured at additional cost.
            </div>
        </div>
    );
}