///////////////////////////
// STREAMELEMENTS FIELDS //
///////////////////////////

let googleFont = "Open Sans";
let customFont = "";

/////////////////
// GLOBAL VARS //
/////////////////

let animationSpeed = 1.0;

let tl = gsap.timeline();

//////////////////////
// HELPER FUNCTIONS //
//////////////////////

function IsNullOrWhitespace(str) {
	return /^\s*$/.test(str);
}

///////////////////////////
// STREAMELEMENTS EVENTS //
///////////////////////////
var urlParams;

var fieldData = null;
var dayFormat = "";
var clockFormat = "hh:mm A";

window.addEventListener('onWidgetLoad', function (obj) {
	var fieldData = obj.detail.fieldData;

	console.log(`[STREAMER-CLOCK] WIDGET LOAD. VERSION ${fieldData.previewModeLabel}.`);

    // https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript


    /*(function () {
        var match,
            pl     = /\+/g,  // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
            query  = window.location.search.substring(1);

        urlParams = {};
        while (match = search.exec(query))
            urlParams[decode(match[1])] = decode(match[2]);
    })();*/

    var outputDay       = document.getElementById("outputDay");
    var output          = document.getElementById("output");

    //if (urlParams["style"]) output.setAttribute("style", urlParams["style"]);
    //if (urlParams["bodyStyle"]) document.body.setAttribute("style", urlParams["bodyStyle"]);

    //if (urlParams["format"] == null) urlParams["format"] = "hh:mm A"; //Default format: Hours:Minutes and AM/PM

    console.log(`[STREAMER-CLOCK] Set to ${fieldData.clockMode} Format.`);

    switch(fieldData.dayFormat)
    {
        case "1":
            dayFormat = "YY";
            break;
        case "2":
            dayFormat = "YYYY";
            break;
        case "3":
            dayFormat = "DD/MM";
            break;
        case "4":
            dayFormat = "DD/MM/YY";
            break;
        case "5":
            dayFormat = "DD/MM/YYYY";
            break;
        case "6":
            dayFormat = "dddd DD/MM/YY";
            break;
        case "7":
            dayFormat = "dddd DD/MM/YYYY";
            break;

        default:
        case "0":
            clockFormat = "";
            break;
    }

    switch(fieldData.clockMode)
    {
        case "24":
            clockFormat = "HH:mm";
            break;

        default:
        case "12":
            clockFormat = "hh:mm A";
            break;
    }

    console.log("DayFormat(b):", dayFormat);

    if(!IsNullOrWhitespace(fieldData.dayFormatCustom))
    {
        dayFormat = fieldData.dayFormatCustom;
    }

    console.log("DayFormat(a):", dayFormat);

	//refreshValues();

});


var c;
setInterval(
c = function() {
    //let format = (!IsNullOrWhitespace(dayFormat)) ? `${dayFormat} ${clockFormat}` : `${clockFormat}`;
    if(!IsNullOrWhitespace(outputDay)) 
    {
        outputDay.innerText = moment().format(dayFormat);
    }
    
    output.innerText = moment().format(`${clockFormat}`);
}, 1000);
c();




