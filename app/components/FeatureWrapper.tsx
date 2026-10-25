import React from "react";

export const FeatureWrapper = ({text}: { text: string }) => {
    return (
        <div className="flex items-center flex-col gap-4 justify-center">
            <div className="h-36 w-36 lg:h-50 lg:w-50 bg-light rounded-4xl shadow-lg"/>
            <h3 className="font-bold text-center">{text}</h3>
        </div>
    )
}
