export const END_OF_DAY_STORAGE_VALUE = '23:59';
export const END_OF_DAY_LEGACY_VALUE = '24:00';
const END_OF_DAY_DISPLAY_VALUE = END_OF_DAY_STORAGE_VALUE;

const padTime = (value: number) => (value < 10 ? `0${value}` : `${value}`);

export const isEndOfDayTime = (value: string) =>
    value === END_OF_DAY_STORAGE_VALUE ||
    value === END_OF_DAY_LEGACY_VALUE ||
    value === END_OF_DAY_DISPLAY_VALUE;

export const normalizeEndOfDayForDisplay = (value: string) =>
    isEndOfDayTime(value) ? END_OF_DAY_DISPLAY_VALUE : value;

export const normalizeEndOfDayForStorage = (value: string) =>
    value === END_OF_DAY_LEGACY_VALUE
        ? END_OF_DAY_STORAGE_VALUE
        : value;

export const formatTimeForLocale = (
    value: string,
    options?: { normalizeEndOfDay?: boolean },
) => {
    // const currentLocale = get(locale);
    const normalized =
        options?.normalizeEndOfDay === false
            ? value
            : normalizeEndOfDayForDisplay(value);
    // const isEnglishLocale = (currentLocale ?? '').startsWith('en');

    // if (!isEnglishLocale) {
    return normalized;
    // }

    // const [hoursValue, minutesValue] = normalized.split(':');
    // const hours = parseInt(hoursValue, 10);
    // const minutes = parseInt(minutesValue, 10);
    // const suffix = hours >= 12 ? 'PM' : 'AM';
    // const displayHours = hours % 12 === 0 ? 12 : hours % 12;
    //
    // return `${padTime(displayHours)}:${padTime(minutes)} ${suffix}`;
};

export const formatTimeRangeForLocale = (from: string, to: string) => {
    const formattedFrom = formatTimeForLocale(from, {
        normalizeEndOfDay: false,
    });
    const formattedTo = formatTimeForLocale(to);
    // const isEnglishLocale = (get(locale) ?? '').startsWith('en');

    // if (!isEnglishLocale) {
    return `${formattedFrom} - ${formattedTo}`;
    // }

    // const compactFrom = formattedFrom.replace(/^0(?=\d:)/, '');
    // const compactTo = formattedTo.replace(/^0(?=\d:)/, '');
    //
    // return `${compactFrom} - ${compactTo}`;
};
