import React from "react";
import {Navigation} from "@/app/components/Navigation";
import {SectionWrapper} from "@/app/components/SectionWrapper";
import {AppFrame} from "@/app/components/AppFrame";
import {Section} from "@/app/components/Section";
import {FeatureSection} from "@/app/components/FeatureSection";
import {Footer} from "@/app/components/Footer";
import {ReminderExampleSection} from "@/app/components/ReminderExampleSection";


export default function Home() {
    const dummyText = <p className={"text leading-8"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor
        invidunt <span className={"bg-light p-1 rounded"}> ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</span> justo
        duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</p>;

    return (
        <main className="relative text-black"
              style={{background: 'radial-gradient(ellipse farthest-corner at top left, #93C5FD 0%,17.48%,#86EFAC 38%,#F0ABFC 77%,#FCA5A5 100%)'}}>
            <div className="max-w-350 m-auto">
                <Navigation/>
                <Section>
                    <div className="mt-8 lg:mt-0 lg:hidden"/>
                    <SectionWrapper heading={"Remind yourself of what is important"} text={dummyText}>
                        <AppFrame/>
                    </SectionWrapper>
                </Section>
                <ReminderExampleSection/>
                <Section>
                    <SectionWrapper heading={"Made by you, as random as you like"} text={dummyText}>
                        <AppFrame/>
                    </SectionWrapper>
                </Section>
                <FeatureSection/>
                <Section>
                    <SectionWrapper heading={"Start now and notify yourself"} text={dummyText}>
                        <AppFrame/>
                    </SectionWrapper>
                </Section>
                <Footer/>
            </div>
        </main>
    );
}
