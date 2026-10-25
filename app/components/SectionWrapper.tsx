import React from "react";

export const SectionWrapper = ({heading, text, children}: {
    heading: string,
    text: React.ReactNode;
    children: React.ReactNode
}) => {
    return (
        <>
            <div className="flex h-full items-center justify-center lg:px-8">
                <h2 className="text-2xl lg:text-4xl font-bold lg:text-right lg:leading-16 whitespace-pre-line">
                    {heading}
                </h2>
            </div>
            {children}
            <div className="flex h-full items-center justify-center lg:px-8">
                <div className="flex flex-col gap-8">
                    {text}
                    <button className="px-5 py-2.5 rounded-xl bg-light shadow-md w-fit">Some Call to action
                    </button>
                </div>
            </div>
        </>
    )
}