"use client";
import React from "react";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";


const sources: string[] = [`${basePath}/images/header_1.PNG`, `${basePath}/images/header_2.PNG`, `${basePath}/images/header_3.PNG`, `${basePath}/images/header_4.PNG`]

export const AppFrame = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % sources.length);
        }, 4000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="flex flex-col gap-4 items-center">
            <div className="w-full relative max-w-80 h-165 rounded-4xl overflow-hidden m-auto shadow-2xl">
                {sources.map((item, i) => (
                    <Image key={item} priority={i === 0} fill src={item} alt={'alt'}
                           className={`object-cover object-bottom transition-opacity duration-2000 ${
                               index === i ? "opacity-100" : "opacity-0"
                           }`}/>
                ))}
            </div>
            <div className="flex flex-row gap-2">
                {sources.map((item, i) => (
                    <div
                        key={item}
                        className={`h-2 bg-white rounded-full transition-[width] duration-2000 ${index === i ? "w-8" : "w-2"} `}/>
                ))}
            </div>
        </div>
    )
}