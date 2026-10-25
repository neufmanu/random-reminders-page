import React from "react";

interface Section {
    children: React.ReactNode;
}

export const Section = ({children}: Section) => {
    return (
        <section
            className={"w-full p-8 grid grid-flow-row xs:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 py-10 lg:py-24"}>
            {children}
        </section>
    )
}