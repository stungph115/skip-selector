import React, { useState } from 'react';
import { SkipCard } from './SkipCard';
import { useSkips } from '../hooks/useSkips';

interface Props { postcode: string; onSelect: (id: string, label: string, price: number, hirePeriod: number) => void }
export function SkipGrid({ postcode, onSelect }: Props) {
    const { skips, loading } = useSkips(postcode);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    if (loading) return <p className="text-white">Loading...</p>;

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skips.map(s => (
                <SkipCard
                    key={s.id}
                    size={s.size}
                    price={s.price}
                    hirePeriod={s.hirePeriod}
                    imageUrl={s.imageUrl}
                    selected={s.id === selectedId}
                    allowedOnRoad={s.allowedOnRoad}
                    onSelect={() => {
                        setSelectedId(s.id);
                        onSelect(s.id, `${s.size} Yard Skip`, s.price, s.hirePeriod);
                    }}
                />
            ))}
        </div>
    );
}