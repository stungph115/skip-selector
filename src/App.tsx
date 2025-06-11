import React, { useState } from 'react';
import { SkipGrid } from './components/SkipGrid';
import { SummaryBar } from './components/SummaryBar';

export default function App() {
  const postcode = 'NR32';
  const [chosen, setChosen] = useState<{
    id: string;
    label: string;
    price: number;
    hirePeriod: number;
  } | null>(null);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen px-4 sm:px-6 lg:px-8 pb-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <nav className="flex items-center space-x-2 sm:space-x-4 py-4">
          {['Postcode', 'Waste Type', 'Select Skip', 'Permit Check', 'Choose Date', 'Payment']
            .map((step, i) => (
              <React.Fragment key={step}>
                <span
                  className={`text-xs sm:text-sm font-medium ${i === 2 ? 'text-white' : 'text-gray-600'}`}
                >
                  {step}
                </span>
                {i < 5 && <div className="w-4 sm:w-6 h-px bg-gray-600" />}
              </React.Fragment>
            ))}
        </nav>

        {/* Title */}
        <header className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">Choose Your Skip Size</h1>
          <p className="text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">
            Select the skip size that best suits your needs.
          </p>
        </header>

        {/* Grid */}
        <SkipGrid
          postcode={postcode}
          onSelect={(id, label, price, hirePeriod) => setChosen({ id, label, price, hirePeriod })}
        />

        {/* Summary Bar (fixed at bottom) */}
        {chosen && (
          <SummaryBar
            label={chosen.label}
            price={chosen.price}
            hirePeriod={chosen.hirePeriod}
            disabled={false}
            onContinue={() => alert(`Continuing with ${chosen.label}`)}
          />
        )}
      </div>

    </div>
  );
}
