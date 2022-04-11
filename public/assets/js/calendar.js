$('#date').daterangepicker({
    "autoApply": true,
    "locale": {
        "format": "MM/DD/YYYY",
        "separator": " - ",
        "fromLabel": "From",
        "toLabel": "To",
        "customRangeLabel": "Custom",
        "weekLabel": "W",
        "daysOfWeek": [
            "Do",
            "Lu",
            "Ma",
            "Mi",
            "Ju",
            "Vi",
            "Sa"
        ],
        "monthNames": [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        "firstDay": 1
    },
    "showCustomRangeLabel": false,
    "startDate": "01/23/2022",
    "endDate": "01/29/2022",
    "opens": "left"
}, function(start, end, label) {});