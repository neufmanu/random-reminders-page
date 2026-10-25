import {ReminderCard} from "@/app/components/ReminderCard";
import {reminderExamples} from "@/app/static/reminderExamples";

export const ReminderExampleSection = () => {
    const baseStyles = "w-full grid grid-flow-row xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-20"


    return (
        <section className={`w-full flex flex-col items-center justify-center gap-4 p-8 py-4`}>
            <div className="flex flex-col gap-4 pb-8">
                <h2 className="text-2xl lg:text-4xl font-bold">For all kinds of tasks and thoughts</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            </div>
            <div className={baseStyles}>
                {reminderExamples.map((r, i) => <ReminderCard key={i} reminder={r}/>)}
            </div>

        </section>
    )

}