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
var outputDay = document.getElementById("outputDay");
var outputTime = document.getElementById("outputTime");


function tick() {
    if(!IsNullOrWhitespace(dayFormat))  {
        outputDay.innerText = moment().format(dayFormat);
    }
    outputTime.innerText = moment().format(`${clockFormat}`);
}

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


    //if (urlParams["style"]) outputTime.setAttribute("style", urlParams["style"]);
    //if (urlParams["bodyStyle"]) document.body.setAttribute("style", urlParams["bodyStyle"]);

    //if (urlParams["format"] == null) urlParams["format"] = "hh:mm A"; //Default format: Hours:Minutes and AM/PM

    console.log(`[STREAMER-CLOCK] Set to ${fieldData.clockMode} Format.`);

    dayFormat = fieldData.dayFormat;
    console.log("DayFormat(b):", dayFormat);
    if(!IsNullOrWhitespace(fieldData.dayFormatCustom))
    {
        dayFormat = fieldData.dayFormatCustom;
        console.log("DayFormat(a):", dayFormat);
    }

    clockFormat = fieldData.clockMode;

    setInterval(tick, 1000);
    tick()
});
