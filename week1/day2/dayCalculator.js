function calculateDayInYear(date) {
    var splitDate = date.split('/');
    var year = Number(splitDate[0]);
    //console.log(year);
    var month = Number(splitDate[1]);
    //console.log(month);
    var day = Number(splitDate[2]);
    //console.log(day);
    var febDays = daysInFeb(year);
    //console.log(febDays);
    var DAYS_IN_MONTH = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (year && validMonth(month) && validDay(month, day)) {
      console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
    } else {
      console.log("Invalid date");
    }
  
    function validMonth(month) {
      return ((month >= 1) && (month <= 12));
    }
  
    function validDay(month, day) {
      return ((day >= 1) && (day) <= (DAYS_IN_MONTH[month - 1]));
    }
  
    function calculateDayNumber(month, day) {
      var dayOfYear = day;
  
      for (var i = 1; i < month; i++) {
        dayOfYear += DAYS_IN_MONTH[i - 1];
      }
  
      return dayOfYear;
    }
  
    function daysInFeb(year) {
      if (isLeapYear(year)) return 29;
      else return 28;
    }
  
    function isLeapYear(year) {
      return isMultiple(year, 400) || !isMultiple(year, 100) && isMultiple(year, 4);
    }
  }
  
  function isMultiple(numerator, denominator) {
    return numerator % denominator === 0;
  }
  
  var date = process.argv[2];
  
  if (!date) {
    console.log("Please provide a date in the format YYYY/MM/DD");
  } else {
    calculateDayInYear(date);
  }

  /* 2016/1/1
2016/1/1 is day 1 of the year 2016
2015/12/31 is day 365 of the year 2015
2000/3/2 is day 62 of the year 2000
1900/3/2 is day 61 of the year 1900
2012/2/29 is day 60 of the year 2012 */