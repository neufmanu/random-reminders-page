export type Reminder = {
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

export const REMINDER_COLORS = {
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

export type ReminderColor = {
    [key in keyof typeof REMINDER_COLORS]: {
        light: string;
        hexLight: string;
        dark: string;
        hexDark: string;
        base: string;
        border?: string;
    };
};

export const REMINDER_INTERVALS = {
    'daily': 'daily',
    'weekly': 'weekly',
    'monthly': 'monthly',
    'yearly': 'yearly',
}



