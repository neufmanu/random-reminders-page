import {FeatureWrapper} from "@/app/components/FeatureWrapper";
import React from "react";

export const FeatureSection = () => {
    return (
        <section className={`w-full flex items-center justify-center p-8 py-8`}>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <p className="text-4xl font-bold">Customize your random notifications</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor</p>
                </div>
                <div className={`flex items-center flex-col lg:flex-row gap-8 justify-center h-full w-full`}>
                    <div className={'flex flex-row gap-6'}>
                        <FeatureWrapper text={"Choose interval"}/>
                        <FeatureWrapper text={"Add notification entries"}/>
                    </div>
                    <div className={'flex flex-row gap-8'}>
                        <FeatureWrapper text={"Customize notifications"}/>
                        <FeatureWrapper text={"Select a timing"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}