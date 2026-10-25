import {FeatureWrapper} from "@/app/components/FeatureWrapper";
import React from "react";

export const FeatureSection = () => {
    return (
        <section className={`w-full flex items-center justify-center p-8 lg:py-20`}>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                    <h3 className="text-2xl lg:text-4xl font-bold">Customize your random notifications</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor</p>
                </div>
                <div className={`flex items-center flex-col md:flex-row gap-6 justify-center h-full w-full`}>
                    <div className={'flex flex-row gap-6'}>
                        <FeatureWrapper/>
                        <FeatureWrapper/>
                    </div>
                    <div className={'flex flex-row gap-6'}>
                        <FeatureWrapper/>
                        <FeatureWrapper/>
                    </div>
                </div>
            </div>
        </section>
    )
}