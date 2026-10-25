import {Reminder, REMINDER_INTERVALS} from "@/app/types/reminder";

export const emptyReminder: Partial<Reminder> = {
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
