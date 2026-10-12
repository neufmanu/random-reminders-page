import {formatTimeRangeForLocale} from "@/app/timeRange";

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

type Reminder = {
    color: "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "teal" | "indigo" | "amber" | "fuchsia" | "lime";
    isListType: boolean;
    interval: string;
    timesPerInterval: number;
    minTimeBetween: number;
    isActive: boolean;
    notificationsScheduledAt: number[];
    title: string;
    weekdays: ("mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun")[];
    timeRange: {
        from: string;
        to: string;
    };
    id?: string;
    icon?: string;
    notes?: string;
    errors?: string[][];
    items?: string[];
}


const ReminderCard = ({reminder}: { reminder: Partial<Reminder> }) => {
    const REMINDER_COLORS = {
        red: 'red',
        orange: 'orange',
        yellow: 'yellow',
        green: 'green',
        blue: 'blue',
        purple: 'purple',
        pink: 'pink',
        teal: 'teal',
        indigo: 'indigo',
        amber: 'amber',
        fuchsia: 'fuchsia',
        lime: 'lime',
    } as const;


    type ReminderColor = {
        [key in keyof typeof REMINDER_COLORS]: {
            light: string;
            hexLight: string;
            dark: string;
            hexDark: string;
            base: string;
            border?: string;
        };
    };

    const cardReminderColors: ReminderColor = {
        amber: {
            light: 'from-amber-200',
            hexLight: '#fde68a',
            dark: 'to-amber-300',
            hexDark: '#fcd34d',
            base: 'bg-amber-400',
            border: 'border-amber-300'
        },
        blue: {
            light: 'from-blue-200',
            hexLight: '#bfdbfe',
            dark: 'to-blue-300',
            hexDark: '#93c5fd',
            base: 'bg-blue-400',
            border: 'border-blue-300'
        },
        purple: {
            light: 'from-purple-200',
            hexLight: '#e9d5ff',
            dark: 'to-purple-300',
            hexDark: '#d8b4fe',
            base: 'bg-purple-400',
            border: 'border-purple-300'
        },
        fuchsia: {
            light: 'from-fuchsia-200',
            hexLight: '#f5d0fe',
            dark: 'to-fuchsia-300',
            hexDark: '#f0abfc',
            base: 'bg-fuchsia-400',
            border: 'border-fuchsia-300',
        },
        pink: {
            light: 'from-pink-200',
            hexLight: '#fbcfe8',
            dark: 'to-pink-300',
            hexDark: '#f9a8d4',
            base: 'bg-pink-400',
            border: 'border-pink-300',
        },
        red: {
            light: 'from-red-200',
            hexLight: '#fecaca',
            dark: 'to-red-300',
            hexDark: '#fca5a5',
            base: 'bg-red-400',
            border: 'border-red-300',
        },
        teal: {
            light: 'from-teal-200',
            hexLight: '#99f6e4',
            dark: 'to-teal-300',
            hexDark: '#5eead4',
            base: 'bg-teal-400',
            border: 'border-teal-300',
        },
        indigo: {
            light: 'from-indigo-200',
            hexLight: '#c7d2fe',
            dark: 'to-indigo-300',
            hexDark: '#a5b4fc',
            base: 'bg-indigo-400',
            border: 'border-indigo-300',
        },
        orange: {
            light: 'from-orange-200',
            hexLight: '#fed7aa',
            dark: 'to-orange-300',
            hexDark: '#fdba74',
            base: 'bg-orange-400',
            border: 'border-orange-300',
        },
        yellow: {
            light: 'from-yellow-200',
            hexLight: '#fef08a',
            dark: 'to-yellow-300',
            hexDark: '#fde047',
            base: 'bg-yellow-400',
            border: 'border-yellow-300',
        },
        green: {
            light: 'from-green-200',
            hexLight: '#bbf7d0',
            dark: 'to-green-300',
            hexDark: '#86efac',
            base: 'bg-green-400',
            border: 'border-green-300',
        },
        lime: {
            light: 'from-lime-200',
            hexLight: '#d9f99d',
            dark: 'to-lime-300',
            hexDark: '#bef264',
            base: 'bg-lime-400',
            border: 'border-lime-300',
        },
    }

    const baseCardHeaderStyles = `flex flex-row gap-3 p-3 items-center justify-between relative z-[1] rounded-t-2xl`;
    const baseCardFooterStyles = 'flex flex-row gap-2 p-3 rounded-b-2xl';
    const weekdayOrder = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const;

    const handleWeekdayDisplay = () => {
        const sortedWeekdays = [...reminder?.weekdays ?? []].sort(
            (left, right) =>
                weekdayOrder.indexOf(left) - weekdayOrder.indexOf(right),
        );

        if (sortedWeekdays.length === 0) {
            return '';
        }

        const isContiguousRange =
            sortedWeekdays.length > 1 &&
            sortedWeekdays.every((day, index) => {
                if (index === 0) {
                    return true;
                }

                return (
                    weekdayOrder.indexOf(day) ===
                    weekdayOrder.indexOf(sortedWeekdays[index - 1]) + 1
                );
            });

        if (isContiguousRange) {
            const firstDay = sortedWeekdays[0];
            const lastDay = sortedWeekdays[sortedWeekdays.length - 1];
            return `${(`${firstDay}`)}–${(`${lastDay}`)}`;
        }

        return sortedWeekdays
            .map((day) => (`weekdays.short.${day}`))
            .join(', ');
    };

    if (!reminder.color || !reminder.timeRange?.from || !reminder.timeRange?.to) return;

    return (
        <div className={`flex rounded-2xl shadow flex-col text-black`} role="button">
            <div className={reminder?.isActive
                ? `${baseCardHeaderStyles} bg-linear-[-45deg] ${cardReminderColors[reminder.color].light} ${cardReminderColors[reminder.color].dark} opacity-90`
                : `${baseCardHeaderStyles} bg-gray-300`}
            >
                <a className="font-bold w-full min-w-0 pr-10 break-words [overflow-wrap:anywhere]">
                    {reminder?.title}
                </a>
            </div>

            <div className={reminder?.isActive
                ? `${baseCardFooterStyles} bg-linear-[45deg] ${cardReminderColors[reminder?.color].light} ${cardReminderColors[reminder?.color].dark} opacity-90`
                : `${baseCardFooterStyles} bg-gray-200`}
            >
                <p className="flex min-w-0 items-center justify-center text-center">
                    {formatTimeRangeForLocale(reminder.timeRange.from, reminder.timeRange.to)}
                </p>
                <div
                    className={`w-0.5 rounded-full ${reminder?.isActive ? cardReminderColors[reminder?.color]?.base : 'bg-gray-400'}`}
                ></div>
                <p className="flex min-w-0 items-center justify-center text-center">
                    {reminder?.timesPerInterval}x {'intervals.full.' + reminder?.interval}
                </p>
                <div
                    className={`w-0.5 rounded-full ${reminder?.isActive ? cardReminderColors[reminder?.color]?.base : 'bg-gray-400'}`}
                ></div>
                <p className="flex min-w-0 flex-1 items-center">
                    {handleWeekdayDisplay()}
                </p>
            </div>
        </div>
    )
}

const ReminderExamples = () => {
    const REMINDER_INTERVALS = {
        'daily': 'daily',
        'weekly': 'weekly',
        'monthly': 'monthly',
        'yearly': 'yearly',
    }

    const empty: Partial<Reminder> = {
        title: '',
        color: 'green',
        isListType: false,
        items: [],
        interval: REMINDER_INTERVALS.daily,
        timesPerInterval: 1,
        weekdays: ['mon', 'tue', 'wed', 'thu', 'fri'],
        timeRange: {from: '09:00', to: '17:00'},
        minTimeBetween: 1,
        notes: '',
        isActive: true,
    };

    const reminderExamplesOne: Partial<Reminder>[] = [
        {
            ...empty,
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
            ...empty,
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
            ...empty,
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

    const reminderExamplesTwo: Partial<Reminder>[] = [
        {
            ...empty,
            title: 'examples.motivationalQuote',
            color: 'red',
            weekdays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
            timeRange: {
                from: '08:00',
                to: '22:00',
            },
            isListType: true,
            timesPerInterval: 3,
            minTimeBetween: 120
        },
        {
            ...empty,
            title: 'examples.mindful',
            color: 'teal',
            timeRange: {
                from: '10:00',
                to: '20:00',
            },
            weekdays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
            isListType: true,
            timesPerInterval: 4,
            minTimeBetween: 60
        },
        {
            ...empty,
            title: 'examples.microMovement',
            color: 'yellow',
            timeRange: {
                from: '09:00',
                to: '18:00',
            },
            weekdays: ['mon', 'tue', 'wed', 'thu', 'fri'],
            isListType: true,
            timesPerInterval: 4,
            minTimeBetween: 60
        },
    ];

    const reminderExamplesThree: Partial<Reminder>[] = [
        {
            ...empty,
            title: 'examples.stopScreentime',
            color: 'blue',
            timeRange: {
                from: '20:30',
                to: '23:00',
            },
        },
        {
            ...empty,
            title: 'examples.callFriend',
            color: 'orange',
            interval: 'weekly',
            weekdays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
            timeRange: {
                from: '16:00',
                to: '20:00',
            },
            timesPerInterval: 2,
            minTimeBetween: 120
        },
        {
            ...empty,
            title: 'examples.declutterSmallArea',
            color: 'amber',
            interval: 'monthly',
            weekdays: ['sat', 'sun'],
            timeRange: {
                from: '10:00',
                to: '18:00',
            },
        },
    ];

    const reminderExamplesFour: Partial<Reminder>[] = [
        {
            ...empty,
            title: 'examples.declutterSmallArea',
            color: 'amber',
            interval: 'monthly',
            weekdays: ['sat', 'sun'],
            timeRange: {
                from: '10:00',
                to: '18:00',
            },
        },
        {
            ...empty,
            title: 'examples.dentistAppointment',
            color: 'lime',
            timeRange: {
                from: '09:00',
                to: '16:30',
            },
            interval: 'yearly',
        },
        {
            ...empty,
            title: 'examples.changePasswords',
            color: 'indigo',
            timeRange: {
                from: '09:00',
                to: '18:00',
            },
            interval: 'yearly',
        },
    ];


    return (
        <section className={`min-h-screen w-full flex flex-col items-center justify-center bg-pink-900 gap-8 p-8`}>
            <div className="flex flex-col gap-4">
                <p className="text-2xl">sed diam nonumy eirmod tempor</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            </div>
            <div className="flex flex-row gap-4 flex-wrap items-center justify-center">
                {reminderExamplesOne.map((r, i) => <ReminderCard key={i} reminder={r}/>)}
            </div>
            <div className="flex flex-row gap-4 flex-wrap items-center justify-center">
                {reminderExamplesTwo.map((r, i) => <ReminderCard key={i} reminder={r}/>)}
            </div>
            <div className="flex flex-row gap-4 flex-wrap items-center justify-center">
                {reminderExamplesThree.map((r, i) => <ReminderCard key={i} reminder={r}/>)}
            </div>
            <div className="flex flex-row gap-4 flex-wrap items-center justify-center">
                {reminderExamplesFour.map((r, i) => <ReminderCard key={i} reminder={r}/>)}
            </div>
        </section>
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

            <ReminderExamples/>

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
