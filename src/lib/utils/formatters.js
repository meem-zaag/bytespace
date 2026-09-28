const LOCALE = "en-US";

const currencyFormatter = new Intl.NumberFormat(LOCALE, {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

const compactFormatter = new Intl.NumberFormat(LOCALE, {
  notation: "compact",
  maximumFractionDigits: 1,
});

/** @param {number} amount e.g. 25 → "$25" */
export function formatPrice(amount) {
  return currencyFormatter.format(amount);
}

/** @param {number} value e.g. 2000 → "2K", 12400 → "12.4K" */
export function formatCompactNumber(value) {
  return compactFormatter.format(value);
}

/**
 * @param {number} count
 * @param {string} singular
 * @param {string} [plural]
 * @returns {string} e.g. (17, "Lesson") → "17 Lessons"
 */
export function pluralize(count, singular, plural = `${singular}s`) {
  return `${count} ${count === 1 ? singular : plural}`;
}

/**
 * @param {number} totalMinutes
 * @returns {string} e.g. 136 → "2 hours 16 mins", 12 → "12 mins"
 */
export function formatDuration(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const parts = [];
  if (hours) parts.push(pluralize(hours, "hour"));
  if (minutes || !hours) parts.push(pluralize(minutes, "min"));
  return parts.join(" ");
}

/**
 * @param {number} totalMinutes
 * @returns {string} e.g. 1440 → "24 hours"
 */
export function formatHours(totalMinutes) {
  return pluralize(Math.round(totalMinutes / 60), "hour");
}

/** @param {number} value e.g. 4.705 → "4.7" */
export function formatRating(value) {
  return value.toFixed(1);
}

/** @param {number} value e.g. 1 → "01" */
export function padNumber(value, length = 2) {
  return String(value).padStart(length, "0");
}

const RELATIVE_UNITS = [
  ["year", 365 * 24 * 60 * 60],
  ["month", 30 * 24 * 60 * 60],
  ["week", 7 * 24 * 60 * 60],
  ["day", 24 * 60 * 60],
  ["hour", 60 * 60],
  ["minute", 60],
];

/**
 * Human "time ago" phrase for past dates.
 *
 * @param {string | Date} date
 * @param {Date} [now]
 * @returns {string} e.g. "a year ago", "3 months ago", "just now"
 */
export function formatRelativeTime(date, now = new Date()) {
  const seconds = Math.max(0, Math.round((now.getTime() - new Date(date).getTime()) / 1000));
  for (const [unit, unitSeconds] of RELATIVE_UNITS) {
    const value = Math.floor(seconds / unitSeconds);
    if (value >= 1) {
      const article = unit === "hour" ? "an" : "a";
      return value === 1 ? `${article} ${unit} ago` : `${value} ${unit}s ago`;
    }
  }
  return "just now";
}
