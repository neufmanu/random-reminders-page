import {Reminder} from "@/app/types/reminder";
import {emptyReminder} from "@/app/static/reminderExample";

export const reminderExamplesTwo: Partial<Reminder>[] = [
    {
        ...emptyReminder,
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
        ...emptyReminder,
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
        ...emptyReminder,
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

export const reminderExamplesThree: Partial<Reminder>[] = [
    {
        ...emptyReminder,
        title: 'examples.stopScreentime',
        color: 'blue',
        timeRange: {
            from: '20:30',
            to: '23:00',
        },
    },
    {
        ...emptyReminder,
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
        ...emptyReminder,
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

export const reminderExamplesFour: Partial<Reminder>[] = [
    {
        ...emptyReminder,
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
        ...emptyReminder,
        title: 'examples.dentistAppointment',
        color: 'lime',
        timeRange: {
            from: '09:00',
            to: '16:30',
        },
        interval: 'yearly',
    },
    {
        ...emptyReminder,
        title: 'examples.changePasswords',
        color: 'indigo',
        timeRange: {
            from: '09:00',
            to: '18:00',
        },
        interval: 'yearly',
    },
];
