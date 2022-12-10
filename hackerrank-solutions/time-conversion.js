function timeConversion(s) {
    const timeString = s.substring(0, s.length - 2);
    const timeArray = timeString.split(':');
    console.log(timeString);
    if (s.endsWith('AM') && (s.startsWith('12'))) {
        timeArray[0] = "00";

    } else if (s.endsWith('PM')) {
        timeArray[0] = (parseInt(timeArray[0]) + 12).toString();

    } else if ((s.startsWith('12')) && (s.endsWith('PM'))) {
        timeArray[0] = '12';
    }
    const militaryTime = timeArray.join(':');
    return militaryTime;
}