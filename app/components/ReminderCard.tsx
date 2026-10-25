import React from "react";
import {cardReminderColors} from "@/app/static/reminderColors";
import {formatTimeRangeForLocale} from "@/app/timeRange";
import {Reminder} from "@/app/types/reminder";

export const ReminderCard = ({reminder}: { reminder: Partial<Reminder> }) => {
    const baseCardHeaderStyles = `flex flex-row gap-3 p-3 items-center justify-between relative z-[1] rounded-t-2xl`;
    const baseCardFooterStyles = 'flex flex-row gap-2 p-3 rounded-b-2xl';
    const weekdayOrder = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const;

    const handleWeekdayDisplay = () => {
        const sortedWeekdays = [...reminder.weekdays ?? []].sort(
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
            return `${(`${firstDay}`)} – ${(`${lastDay}`)}`;
        }

        return sortedWeekdays
            .map((day) => (`weekdays.short.${day}`))
            .join(', ');
    };

    if (reminder && reminder.color && reminder.timeRange) {
        return (
            <div className={`flex width-[30%] rounded-2xl shadow flex-col text-black`} role="button">
                <div className={reminder.isActive
                    ? `${baseCardHeaderStyles} bg-linear-[-45deg] ${cardReminderColors[reminder.color].light} ${cardReminderColors[reminder.color].dark} opacity-90`
                    : `${baseCardHeaderStyles} bg-gray-300`}
                >
                    <a className="font-bold w-full min-w-0 pr-10 break-words [overflow-wrap:anywhere]">
                        {reminder.title}
                    </a>
                </div>

                <div className={reminder.isActive
                    ? `${baseCardFooterStyles} bg-linear-[45deg] ${cardReminderColors[reminder.color].light} ${cardReminderColors[reminder.color].dark} opacity-90`
                    : `${baseCardFooterStyles} bg-gray-200`}
                >
                    <p className="flex min-w-0 items-center justify-center text-center">
                        {formatTimeRangeForLocale(reminder.timeRange.from, reminder.timeRange.to)}
                    </p>
                    <div
                        className={`w-0.5 rounded-full ${reminder.isActive ? cardReminderColors[reminder.color].base : 'bg-gray-400'}`}
                    ></div>
                    <p className="flex min-w-0 items-center justify-center text-center">
                        {reminder.timesPerInterval}x {reminder.interval}
                    </p>
                    <div
                        className={`w-0.5 rounded-full ${reminder.isActive ? cardReminderColors[reminder.color].base : 'bg-gray-400'}`}
                    ></div>
                    <p className="flex min-w-0 flex-1 items-center">
                        {handleWeekdayDisplay()}
                    </p>
                </div>
            </div>
        )
    }
}
