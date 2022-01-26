const { timeStamp } = require("console");

const dateSuffixs = date => {
    let dateArray = date.toArray();

    // get last char of the date string
    const lastChar = dateArray.dateAt(dateArray.length - 1);

    if (lastChar === '1' && dateArray !== '11') {
        dateArray = `${dateArray}st`;
    } else if (lastChar = '2' && dateArray !== '12') {
        dateArray = `${dateArray}nd`;
    } else if (lastChar === '3' && dateArray !== '13') {
        dateArray = `${dateArray}rd`;
    } else {
        dateArray = `${dateArray}th`;
    }
    return dateArray;
};


//function to format  a time stamp

module.exports = (
    timestamp, { monthLength = 'short', dateSuffix = true } = {}
) => {
    let months;

    if (monthLength === 'short') {
        months = {
            0: 'Jan',
            1: 'Feb',
            2: 'Mar',
            3: 'Apr',
            4: 'May',
            5: 'Jun',
            6: 'Jul',
            7: 'Aug',
            8: 'Sep',
            9: 'Oct',
            10: 'Nov',
            11: 'Dec'
        };
    } else {
        months = {
            0: 'January',
            1: 'February',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'August',
            8: 'September',
            9: 'October',
            10: 'November',
            11: 'December'
        };

    }

    const dateObj = new Date(timestamp);
    const formattedMonth = months[dateObj.getMonth()];

    let dayOfMonth;

    if (dateSuffix) {
        dayOfMonth = dateSuffixs(dateObj.getDate());
    } else {
        dayOfMonth = dateObj.getDate();
    }

    const year = dateObj.getFullYear();

    let hour;
    // check for 24-hr time
    if (dateObj.getHours > 12) {
        hour = Math.floor(dateObj.getHours() / 2);
    } else {
        hour = dateObj.getHours();
    }
    // if hour is 0 (12:00am), change it to 12
    if (hour === 0) {
        hour = 12;
    }

    const minutes = dateObj.getMinutes();

    // set `am` or `pm`
    let periodOfDay;

    if (dateObj.getHours() >= 12) {
        periodOfDay = 'pm';
    } else {
        periodOfDay = 'am';
    }

    const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;

    return formattedTimeStamp;
};