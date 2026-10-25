import {Reminder} from "@/app/types/reminder";
import {emptyReminder} from "@/app/static/reminderExample";
import {reminderExamplesFour, reminderExamplesThree, reminderExamplesTwo} from "@/app/static/reminderExamples";
import {ReminderCard} from "@/app/components/ReminderCard";

export const ReminderExampleSection = () => {
    const reminderExamplesOne: Partial<Reminder>[] = [
        {
            ...emptyReminder,
            title: 'examples.drinkWater',
            color: 'blue',
            weekdays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
            timeRange: {
                from: '08:00',
                to: '21:00',
            },
            timesPerInterval: 4,
            minTimeBetween: 60,
        },
        {
            ...emptyReminder,
            title: 'examples.stretch',
            color: 'purple',
            timeRange: {
                from: '08:00',
                to: '18:00',
            },
            timesPerInterval: 4,
            minTimeBetween: 60
        },
        {
            ...emptyReminder,
            title: 'examples.waterPlants',
            color: 'green',
            weekdays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
            timeRange: {
                from: '10:00',
                to: '20:00',
            },
            interval: 'weekly',
        },
    ];


    const baseStyles = "w-full grid grid-flow-row xs:grid-cols-1 lg:grid-cols-3 gap-4 lg:px-20"


    return (
        <section className={`w-full flex flex-col items-center justify-center gap-4 p-8 py-4`}>
            <div className="flex flex-col gap-4 pb-8">
                <h2 className="text-4xl font-bold">For all kinds of tasks and thoughts</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            </div>
            <div className={baseStyles}>
                {reminderExamplesOne.map((r, i) => <ReminderCard key={i} reminder={r}/>)}
            </div>
            <div className={baseStyles}>
                {reminderExamplesTwo.map((r, i) => <ReminderCard key={i} reminder={r}/>)}
            </div>
            <div className={baseStyles}>
                {reminderExamplesThree.map((r, i) => <ReminderCard key={i} reminder={r}/>)}
            </div>
            <div className={baseStyles}>
                {reminderExamplesFour.map((r, i) => <ReminderCard key={i} reminder={r}/>)}
            </div>
        </section>
    )

}