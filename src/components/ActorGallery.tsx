import Image from 'next/image';

/**
 * Adaptive photo gallery for an actor's page. Shows exactly what we have —
 * one photo today for most operators, a mosaic once more real photos land.
 * Never pads out with placeholders: an honest single photo beats a fake grid.
 */
export default function ActorGallery({ images, alt }: { images: string[]; alt: string }) {
    const photos = images.filter(Boolean);

    if (photos.length === 0) {
        return <div className="w-full aspect-[21/9] rounded-2xl bg-gray-100" />;
    }

    if (photos.length === 1) {
        return (
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden bg-gray-100">
                <Image src={photos[0]} alt={alt} fill className="object-cover" priority />
            </div>
        );
    }

    if (photos.length === 2) {
        return (
            <div className="grid grid-cols-2 gap-2 w-full aspect-[21/9] rounded-2xl overflow-hidden">
                {photos.map((src, i) => (
                    <div key={src + i} className="relative bg-gray-100">
                        <Image src={src} alt={i === 0 ? alt : `${alt} — photo ${i + 1}`} fill className="object-cover" priority={i === 0} />
                    </div>
                ))}
            </div>
        );
    }

    if (photos.length <= 4) {
        const rest = photos.slice(1);
        return (
            <div className="grid grid-cols-4 grid-rows-2 gap-2 w-full aspect-[21/9] rounded-2xl overflow-hidden">
                <div className="relative col-span-2 row-span-2 bg-gray-100">
                    <Image src={photos[0]} alt={alt} fill className="object-cover" priority />
                </div>
                {rest.map((src, i) => (
                    <div key={src + i} className={`relative col-span-2 bg-gray-100 ${rest.length === 1 ? 'row-span-2' : ''}`}>
                        <Image src={src} alt={`${alt} — photo ${i + 2}`} fill className="object-cover" />
                    </div>
                ))}
            </div>
        );
    }

    // 5+ real photos: full mosaic with a "+N more" overlay on the last visible tile.
    const extra = photos.length - 5;
    return (
        <div className="grid grid-cols-4 grid-rows-2 gap-2 w-full aspect-[21/9] rounded-2xl overflow-hidden">
            <div className="relative col-span-2 row-span-2 bg-gray-100">
                <Image src={photos[0]} alt={alt} fill className="object-cover" priority />
            </div>
            {photos.slice(1, 5).map((src, i) => {
                const isLast = i === 3;
                return (
                    <div key={src + i} className="relative bg-gray-100">
                        <Image src={src} alt={`${alt} — photo ${i + 2}`} fill className="object-cover" />
                        {isLast && extra > 0 && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-sm">
                                +{extra} more
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
