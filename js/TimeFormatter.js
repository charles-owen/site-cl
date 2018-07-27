/**
 * @file
 * Utility functions to format times.
 */

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

    return time.toLocaleDateString("en-US", {month:'numeric', day:'numeric', year:'numeric'});

}
