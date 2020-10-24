
module.exports = {
    timeComparatorAscending: (a, b) => {

        if(a.ampm === "AM" && b.ampm === "PM")
            return -1;
        else if(a.ampm === "PM" && b.ampm === "AM")
            return 1;
        else if(a.hour === b.hour){
            if(a.minute < b.minute)
                return -1;
        }
        else if(a.hour < b.hour)
            return -1;
        else if(a.hour > b.hour)
            return 1;
        else
            return 0;
    },
    timeComparatorDecending: (a,b) => {

        if(a.ampm === "AM" && b.ampm === "PM")
            return 1;
        else if(a.ampm === "PM" && b.ampm === "AM")
            return -1;
        else if(a.hour === b.hour){
            if(a.minute > b.minute)
                return -1;
        }
        else if(a.hour > b.hour)
            return -1;
        else if(a.hour < b.hour)
            return 1;
        else
            return 0;
    },
    dateComparatorAscending: (a, b) => {
        if(a.date < b.date)
            return -1;
        else if(a.date > b.date)
            return 1;
        else
            return 0;
    },
    dateComparatorDecending: (a,b) => {
        if(a.date > b.date)
            return -1;
        else if(a.date < b.date)
            return 1;
        else
            return 0;
    }
}