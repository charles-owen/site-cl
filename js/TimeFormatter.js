/*
 * Utility functions to format times.
 */

import moment from 'moment';

/**
 * Utility functions to format times.
 * @constructor
 */
export let TimeFormatter = function() {
}

/**
 * Convert a time to the format we display
 * Time is relative to a specified time (or current time)
 * @param time Time to convert (moment)
 * @param currentTime Current time (moment)
 * @param format Moment format
 * @returns {string}
 */
TimeFormatter.relative = function(time, currentTime, format) {
    if(currentTime === undefined || currentTime === null) {
        currentTime = moment.now();
    }

    const elapsed = currentTime.diff(time);

    if(elapsed < 60000) {
        return '<1 min ago';
    }

    if(elapsed < 3600000) {
        // Within an hour ago
        const mins = Math.floor(elapsed / 60000);
        return '' + mins + ' min ago';
    }

    /*
     * Determine if it was today
     */
    if(time.date() === currentTime.date() &&
        time.month() === currentTime.month() &&
        time.year() === currentTime.year()) {
        let hour = time.hour();
        let am = 'am';
        if(hour === 0) {
            hour = 12;
        } else if(hour === 12) {
            am = 'pm'
        } else if(hour > 12) {
            am = 'pm';
            hour -= 12;
        }
        let minute = time.minute();
        if(minute < 10) {
            minute = '0' + minute;
        }

        return "Today at " + hour + ':' + minute + am;
    }

    if(format === undefined) {
        format = 'M-DD-YYYY h:mm:ssa';
    }

    return time.format(format);
}

/**
 * Display a Unix time as an absolute time.
 * @param time Unix time (seconds)
 * @param format Moment format or 'long' or 'short' for days inclusion.
 */
TimeFormatter.absoluteUNIX = function(time, format) {
    let t = moment.unix(time);
    if(format === undefined) {
        format = 'M-DD-YYYY h:mm:ssa';
    } else if(format === 'short') {
	    format = 'ddd, M-DD-YYYY h:mm:ssa';
    } else if(format === 'long') {
	    format = 'dddd, M-DD-YYYY h:mm:ssa';
    }

    return t.format(format);
}

TimeFormatter.relativeUNIX = function(time, currentTime, format) {
    let t = moment.unix(time);
    let c = currentTime !== null ? moment.unix(currentTime) : moment();

    return this.relative(t, c, format);
}
