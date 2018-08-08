/**
 * @file
 * Utility functions to format times.
 */

import moment from 'moment';

export let TimeFormatter = function() {
}

/**
 * Convert a time to the format we display
 * Time is relative to a specified time (or current time)
 * @param time
 * @param currentTime
 * @param short
 * @returns {string}
 */
TimeFormatter.relative = function(time, currentTime, short) {
    if(currentTime === undefined || currentTime === null) {
        currentTime = new Date();
    }

    if(short === undefined) {
        short = false;
    }

    var elapsed = currentTime - time;
    if(elapsed < 60000) {
        return '<1 min ago';
    }

    if(elapsed < 3600000) {
        // Within an hour ago
        var mins = Math.floor(elapsed / 60000);
        return '' + mins + ' min ago';
    }

    /*
     * Determine if it was today
     */
    if(time.getDate() === currentTime.getDate() &&
        time.getMonth() === currentTime.getMonth() &&
        time.getYear() === currentTime.getYear()) {
        var hour = time.getHours();
        var am = 'am';
        if(hour === 0) {
            hour = 12;
        } else if(hour === 12) {
            am = 'pm;'
        } else if(hour > 12) {
            am = 'pm';
            hour -= 12;
        }
        var minute = time.getMinutes();
        if(minute < 10) {
            minute = '0' + minute;
        }

        return "Today at " + hour + ':' + minute + am;
    }

    return time.toLocaleDateString("en-US", {month:'numeric', day:'2-digit', year:'numeric',
        hour12:true, hour:'numeric', minute:'2-digit', second:'2-digit'})
            .replace(/\//g, '-')
            .replace(/ AM/, 'am')
            .replace(/ PM/, 'pm');

}

/**
 *
 * @param time
 * @param weekday "narrow", "short", "long"
 * @returns {string}
 */
TimeFormatter.absolute = function(time, weekday) {
    let options = {month:'numeric', day:'2-digit', year:'numeric',
        hour12:true, hour:'numeric', minute:'2-digit', second:'2-digit'};
    if(weekday) {
        options.weekday = weekday;
    }

    return time.toLocaleDateString("en-US", options)
        .replace(/\//g, '-')
        .replace(/ AM/, 'am')
        .replace(/ PM/, 'pm');
}

TimeFormatter.absoluteUNIX = function(time, weekday) {
    let t = moment.unix(time);
    let format = 'M-DD-YYYY h:mm:ssa';
    return t.format(weekday === 'short' ? 'ddd, ' + format : format);
}
