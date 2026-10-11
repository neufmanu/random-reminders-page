const AppFrame = () => {
    return (
        <div className="sticky w-80 h-140 rounded-4xl bg-gray-400 top-8 m-auto shadow-2xl"></div>
    )
}

const SectionTextWrapper = ({heading, text, children}: {
    heading: string,
    text: React.ReactNode;
    children: React.ReactNode
}) => {
    return (
        <>
            <div className="flex h-full items-center justify-center px-8">
                <h1 className="text-4xl text-right leading-16">
                    {heading}
                </h1>
            </div>
            {children}
            <div className="flex h-full items-center justify-center px-8">
                <div className="flex flex-col gap-8">
                    {text}
                    <button className="px-5 py-2.5 rounded-xl bg-black w-fit">Some Call to action</button>
                </div>
            </div>
        </>
    )
}

const FeatureWrapper = () => {
    return (
        <div className="flex items-center flex-col gap-2">
            <div className="h-50 w-50 bg-yellow-400 rounded-4xl shadow-xl"/>
            <p>Feature description</p>
        </div>
    )
}

export default function Home() {
    const baseSectionClasses = "min-h-screen w-full p-8 grid grid-flow-row grid-cols-3";

    const dummyHeading = "Lorem ipsum dolor sit amet consetetur sadipscing elitr";

    const dummyText = <p className={"text leading-8"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor\n
        invidunt\n <span className={"bg-fuchsia-800 rounded-md p-1.5 shadow-xl"}> ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</span> justo\n
        duo\n dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</p>;

    return (
        <main className="relative">
            {/* Heading */}
            <nav className="absolute p-10 w-full flex items-center justify-between">
                <a className={"w-10 h-10 rounded-xl bg-white "}/>

                <a className="px-5 py-2.5 rounded-xl bg-black w-fit">
                    Get The app
                </a>

            </nav>

            {/* Intro */}
            <section className={`${baseSectionClasses} bg-blue-900`}>
                <SectionTextWrapper heading={"Some interesting intro heading to catch"} text={dummyText}>
                    <AppFrame/>
                </SectionTextWrapper>
            </section>


            <section className={`min-h-screen w-full flex flex-col items-center justify-center bg-pink-900 gap-8`}>
                <div className="flex flex-col gap-4">
                    <p className="text-2xl">sed diam nonumy eirmod tempor</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor</p>
                </div>
                <div className="flex flex-row gap-8">
                    {['🔔', '🎉', '❤️', '💧', '🦷', '🎸', '🧘', '🧠', '🫶', '🥒'].map((e, i) => <div key={i}
                                                                                            className="flex items-center bg-emerald-500 justify-center h-12 w-12 rounded-lg text-4xl">{e}</div>)}
                </div>
                <div className="flex flex-row gap-8">
                    {['🔔', '🎉', '❤️', '💧', '🦷', '🎸', '🧘', '🧠', '🫶', '🥒'].map((e, i) => <div key={i}
                                                                                            className="flex items-center bg-emerald-500 justify-center h-12 w-12 rounded-lg text-4xl">{e}</div>)}
                </div>
                <div className="flex flex-row gap-8">
                    {['🔔', '🎉', '❤️', '💧', '🦷', '🎸', '🧘', '🧠', '🫶', '🥒'].map((e, i) => <div key={i}
                                                                                            className="flex items-center bg-emerald-500 justify-center h-12 w-12 rounded-lg text-4xl">{e}</div>)}
                </div>
                <div className="flex flex-row gap-8">
                    {['🔔', '🎉', '❤️', '💧', '🦷', '🎸', '🧘', '🧠', '🫶', '🥒'].map((e, i) => <div key={i}
                                                                                            className="flex items-center bg-emerald-500 justify-center h-12 w-12 rounded-lg text-4xl">{e}</div>)}
                </div>
            </section>

            {/* Story / Overview */}
            <section className={`${baseSectionClasses} bg-green-900`}>
                <SectionTextWrapper heading={dummyHeading} text={dummyText}>
                    <AppFrame/>
                </SectionTextWrapper>
            </section>

            {/* Features */}
            <section className={`min-h-screen w-full flex items-center justify-center bg-orange-900`}>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <p className="text-2xl">sed diam nonumy eirmod tempor</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor</p>
                    </div>
                    <div className={`flex items-center flex-row gap-8 justify-center h-full w-full`}>
                        <FeatureWrapper/>
                        <FeatureWrapper/>
                        <FeatureWrapper/>
                        <FeatureWrapper/>
                    </div>
                </div>
            </section>

            {/* Call To Action*/}
            <section className={`${baseSectionClasses} bg-purple-900`}>
                <SectionTextWrapper heading={dummyHeading} text={dummyText}>
                    <AppFrame/>
                </SectionTextWrapper>
            </section>

            {/* Footer */}
            <footer className={`${baseSectionClasses} bg-teal-900`}>
                Some footer content
            </footer>
        </main>
    );
}
