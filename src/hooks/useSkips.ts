import { useEffect, useState } from 'react';

type Skip = {
    id: string;
    size: number;
    price: number;
    hirePeriod: number;
    imageUrl: string;
    allowedOnRoad: boolean;
};
const IMAGE_BASE = 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes';

export function useSkips(postcode: string) {
    const [skips, setSkips] = useState<Skip[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=Lowestoft`)
            .then(res => res.json())
            .then((data: any[]) => {
                // map the raw API objects into our Skip type,
                // and build the image URL from the size field:
                const enriched = data.map(s => ({
                    id: String(s.id),
                    size: s.size,
                    price: s.price_before_vat,
                    hirePeriod: s.hire_period_days,
                    imageUrl: `${IMAGE_BASE}/${s.size}-yarder-skip.jpg`,
                    allowedOnRoad: s.allowed_on_road,
                }));
                setSkips(enriched);
            })
            .finally(() => setLoading(false));
    }, [postcode]);

    return { skips, loading };
}