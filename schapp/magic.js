//Nicholas DeRissio Day-Planner Assignment

//sets current day to html page
$("#currentDay").html(moment().format("MMM Do YYYY"));

var currentToDo = [];

loadTimeBlocks();
loadSavedData();

$(document).on("click", ".lock", function(){
    
    let timeBlocks = $(".time-block").toArray();
    let saveArea; //text to be saved
    let timeId; //used to keep track of data

    for(let i = 0;i < timeBlocks.length;i++){

        let testTime = $(timeBlocks[i]).attr("id");
        let saveBtnTime = $(this).parent().attr("time");

        if(testTime == saveBtnTime){ //finds corresponding time block and exits loop
            saveArea = $(timeBlocks[i]).children(); //stores textarea of corresponding time-block
            timeId = testTime;
            break;
        }
    }

    let userData = $(saveArea).val(); //takes value of text on page and stores it in variable
    saveData(timeId, userData); //saves data
});

function loadTimeBlocks(){

    let times = [
        {d: "9am", t: "09"}, 
        {d: "10am", t: "10"}, 
        {d: "11am", t: "11"}, 
        {d: "12pm", t: "12"}, 
        {d: "1pm", t: "13"},
        {d: "2pm", t: "14"},
        {d: "3pm", t: "15"},
        {d: "4pm", t: "16"},
        {d: "5pm", t: "17"}
    ];

    for(let i = 0;i < times.length;i++){

        let newRow = $("<div>");
        newRow.attr("class", "row timeRow");

        $("#timeblocks").append(newRow);

        let timePassingIn = times[i];

        newRow.append($("<div>").attr("class", "col-sm-1").append(makeDiv("time-box", timePassingIn, "row hour"))); //creates the time display div
        newRow.append($("<div>").attr("class", "col-sm-10").append(makeDiv("time-block", timePassingIn, "row time-block"))); //creates the time-block
        newRow.append($("<div>").attr("class", "col-sm-1").append(makeDiv("save-btn", timePassingIn, "saveBtn row"))); //creates the save button
    }
}

function makeDiv(type, time, classes){ //make a functon to make all the elements interchanably with input, elimnating 2 methods 

    let newDiv = $("<div>");

    newDiv.attr("class", classes); //sets classes passed in to class attribut 
    
    if(type == "time-box"){
        newDiv.text(time.d); //time.d repersents the time we want to show the user
    }

    if(type == "time-block"){//sets time attribute and gives time-block text area, also sets past,present, or future
        newDiv.attr("id", time.t); //time.t represents the 24 hour repersentation of the displayed time, so we can check if its past,present, or future
        let newTextArea = $("<textarea>");
        newTextArea.attr("class", "textarea");
        newDiv.append(newTextArea);

        setTimeBlockState(newDiv);
    }

    if(type == "save-btn"){
        newDiv.attr("time", time.t)
        let newLockImg = $("<a>").attr("class", "lock");
        newDiv.append(newLockImg);
    }
    return newDiv;
}

function setTimeBlockState(tBlock){

        let t = $(tBlock).attr("id"); 

        let currentTime24 = moment().format("HH");

        if(t == currentTime24){//present

            $(tBlock).attr("class", "time-block row present");

        }else if(t < currentTime24){ //past

            $(tBlock).attr("class", "time-block row past");

        }else if(t > currentTime24){ //future

            $(tBlock).attr("class", "time-block row future");
        
        }
}

function saveData(id, dataToSave){

    let toPush = { //creates object out of data we want to save
        id: id,
        userData: dataToSave
    }

    let dataStored = false;

    for(let i = 0;i < currentToDo.length;i++){

        if(currentToDo[i].id == id){  //checks if the data for this time-block already exists
            currentToDo[i] = toPush; //sets it to new data
            dataStored = true; //lets us know that we stored the data
        }
    }

    if(!dataStored){ //if we didnt store any data above, we just push the object we made to the loop
        currentToDo.push(toPush);
    }
   
    window.localStorage.setItem('ToDo', JSON.stringify(currentToDo)); //adds the data to local storage
}

function loadSavedData(){
    let incomingData = JSON.parse(window.localStorage.getItem('ToDo')); //parses saved data so we can use it and bring it to page

    if(incomingData == null){ //if there isnt any saved data
        currentToDo = [];
    }
    else{
        currentToDo = incomingData; //if there is data
    }

    for(let i = 0;i < currentToDo.length;i++){ //loops through array of saved data

        let search = "#"+currentToDo[i].id; //creates an ID of the current index in saved data
        let savedText = currentToDo[i].userData; //takes the value in saved data

        $(search).children().val(savedText); //uses the custom id to find the corresponding timeblock and the assigns it the value from saved
    }
}