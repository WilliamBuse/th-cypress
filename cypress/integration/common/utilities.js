/*
* Created by SDickerson 3/15/18.
*/

(function(){
    'use strict';

    var Utilities = function(){};
    Utilities.prototype.getTimestamp = getTimestamp;
    Utilities.prototype.getCurrentTime = getCurrentTime;
    Utilities.prototype.getDatestamp = getDatestamp;
    Utilities.prototype.calculateDate = calculateDate;
    Utilities.prototype.getNextMonthBegin = getNextMonthBegin;
    Utilities.prototype.getLastDayOfMonth = getLastDayOfMonth;
    Utilities.prototype.formatDateLeadingZero = formatDateLeadingZero;
    Utilities.prototype.formatDateLeadingZeroTwoDigitYear = formatDateLeadingZeroTwoDigitYear;
    Utilities.prototype.formatDateNoZeroesTwoDigitYear = formatDateNoZeroesTwoDigitYear;
    Utilities.prototype.isDatePast = isDatePast;
    Utilities.prototype.generateEmailAddress = generateEmailAddress;
    Utilities.prototype.getNthDate = getNthDate;

    var constants = require('./constants.js');

    module.exports = Utilities;

    function getTimestamp(){
        var runDatetime = new Date();
        var runHour = runDatetime.getUTCHours().toString();
        var runMin = runDatetime.getMinutes().toString();
        var runSec = runDatetime.getSeconds().toString();
        if (runHour.length < 2) runHour = "0" + runHour;
        if (runMin.length < 2) runMin = "0" + runMin;
        if (runSec.length < 2) runSec = "0" + runSec;

        return runDatetime.toJSON().slice(0,10).replace(/-/g,'') +
            runHour + runMin + runSec;
    }

    function getCurrentTime(formatTwelveHour){
        var time = new Date();
        return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: formatTwelveHour });
    }

    function getDatestamp(addDays){
        var newDate = new Date();
        newDate.setDate(newDate.getDate() + parseInt(addDays));
        return newDate.toJSON().slice(0,10).replace(/-/g,'');
    }

    function calculateDate(initialDate, numDays){

        var newDate = new Date(initialDate);
        newDate.setDate(newDate.getDate() + parseInt(numDays));
        return ((newDate.getMonth() + 1).toString() + '/' + newDate.getDate().toString() + '/' + newDate.getFullYear());
    }

    function getNextMonthBegin(date){
        var nextMonth = date.getMonth() + 2;
        var year = date.getFullYear();
        if (nextMonth > 12) {
            nextMonth = 1;
            year = year + 1;
        }
        //console.log('newDate=' + nextMonth.toString() + '/1/' + year.toString());
        return (nextMonth.toString() + '/1/' + year.toString());
    }

    function getLastDayOfMonth(date){
        var newDate = new Date(date);
        var month = newDate.getMonth() + 1;
        newDate = new Date(newDate.getFullYear(), month, 0);
        //console.log('date=' + newDate);
        return (month.toString() + '/' + newDate.getDate().toString() + '/' + newDate.getFullYear());
    }

    function formatDateLeadingZero(date){
        var newDate = new Date(date);
        var month = newDate.getMonth() + 1;
        var day = newDate.getDate();
        if (month.toString().length < 2) month = '0' + month.toString();
        if (day.toString().length < 2) day = '0' + day.toString();
        return (month.toString() + '/' + day.toString() + '/' + newDate.getFullYear());
    }

    function formatDateLeadingZeroTwoDigitYear(date){
        var newDate = new Date(date);
        var month = newDate.getMonth() + 1;
        var day = newDate.getDate();
        if (month.toString().length < 2) month = '0' + month.toString();
        if (day.toString().length < 2) day = '0' + day.toString();
        return (month.toString() + '/' + day.toString() + '/' + newDate.getFullYear().toString().substr(2,2));
    }

    function formatDateNoZeroesTwoDigitYear(date){
        var newDate = new Date(date);
        var month = newDate.getMonth() + 1;
        var day = newDate.getDate();
        if (month.toString().length < 2) month = month.toString();
        if (day.toString().length < 2) day = day.toString();
        return (month.toString() + '/' + day.toString() + '/' + newDate.getFullYear().toString().substr(2,2));
    }

    function isDatePast(date){
        var today = new Date();
        today.setHours(0,0,0,0);
        var checkDate = new Date(date);
        return (checkDate < today);
    }

    function generateEmailAddress(emailRoot,emailDomain) {
        var emailAddress = '';
        var charIndex = emailRoot.toString().indexOf('.');
        if(charIndex > 0) {
            emailAddress = emailRoot.substring(0, charIndex) + getTimestamp() +
                emailRoot.substring(charIndex) + emailDomain;
        }
        else {
            emailAddress = emailRoot + getTimestamp() + emailDomain;
        }
        console.log('New email generated = ' + emailAddress);
        return emailAddress;
    }

    function nth(n){
        var s=["th","st","nd","rd"],
            v=n%100;
        return n+(s[(v-20)%10]||s[v]||s[0]);
    }

    function getNthDate(date) {
        var newDate = new Date(date);
        var month = newDate.getMonth();
        var day = newDate.getDate();
        var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        return (monthShortNames[month] + ' ' + nth(day) + ' ' + newDate.getFullYear());
    }

    Utilities.prototype.calculateMaidFee = function(numBeds, frequency) {
        var bedFee = 0;
        var muliplier = 1;

        switch (numBeds) {
            case '1':
                bedFee = constants.feesHousekeeping.one;
                break;
            case '2':
                bedFee = constants.feesHousekeeping.two;
                break;
            default:
                bedFee = constants.feesHousekeeping.threePlus;
        }

        switch (frequency.toLowerCase()) {
            case 'weekly':
                muliplier = constants.multiplierHousekeeping.weekly;
                break;
            case 'bi-weekly':
                muliplier = constants.multiplierHousekeeping.biweekly;
                break;
            default:
                muliplier = 1;
        }

        return parseFloat(bedFee) * parseFloat(muliplier);
    }

    Utilities.prototype.calculateCableFee = function(numTVs, pkg) {
        var boxFee = constants.feesDefault.cableBox;
        var cableFee = 0;
        boxFee = parseFloat(boxFee) * parseFloat(numTVs - 1);

        switch (pkg.toLowerCase()) {
            case 'standard':
                cableFee = constants.feesCableService.standard;
                break;
            case 'upgraded':
                cableFee = constants.feesCableService.upgraded;
                break;
            case 'premium':
                cableFee = constants.feesCableService.premium;
                break;
        }
        return parseFloat(cableFee) + parseFloat(boxFee);
    }

    Utilities.prototype.calculateInternetFee = function(pkg) {
        var internetFee = 0;

        switch (pkg.toLowerCase()) {
            case 'standard':
                internetFee = constants.feesInternetService.standard;
                break;
            case 'upgraded':
                internetFee = constants.feesInternetService.upgraded;
                break;
            case 'premium':
                internetFee = constants.feesInternetService.premium;
                break;
        }
        return parseFloat(internetFee);
    }

    Utilities.prototype.writeToFile = function(filepath, text) {
        const fs = require('fs');
        const stream = fs.createWriteStream(filepath, {flags:'a'});
        stream.once('open', function(fd) {
            stream.write(text + '\n');
            stream.end();
        });
    }

    Utilities.prototype.formatDollarAmount = function(value) {
        let formattedVal = parseFloat(value) * 100;
        formattedVal = (formattedVal/100).toFixed(2);
        return formattedVal;
    }

    Utilities.prototype.formatPhoneNumber = function(value) {
        let phoneNum = value;
        if(phoneNum.length === 10) {
            phoneNum = '(' + phoneNum.substr(0,3) + ') ' + phoneNum.substr(3,3) + '-' + phoneNum.substr(6,4);
        }
        return phoneNum;
    }

})();