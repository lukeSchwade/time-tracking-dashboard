//UPDATE TIME
class TimeWidget {
    //Title is the title from which to pull from json file
    constructor(el) {
        //store title el
        this.titleEl = el.querySelector('.title');
        //store title for grabbing data from timeframe object
        this.title = this.titleEl.textContent;
        //Set the current Time frame, daily by default
        this.currentTimeFrame = 'daily';
        //store moreoptions menu el 
        this.moreOptions = el.querySelector('.more-options');
        //store current time el
        this.currentTime = el.querySelector('.current-time');
        //store previous time el
        this.previousTime = el.querySelector('.previous-time');
        //store hourly/daily/monthly word
        this.previousWord = el.querySelector('.previous-word')
        //store value
        this.previousValue = el.querySelector('.value'); 
        //Add event listener for more Options button
        //TODO
    }
    moreOptions () {

    }
    appendHours(inputNum){
        //check if it should be hrs or hr and return the appended value
        if (inputNum != 1) {
            return inputNum + 'hrs';
        } else {
            return inputNum + 'hr';
        }
    }
    //change word for timeframe
    checkPastTense(buttonInput){
        switch (buttonInput) {
            case 'daily':
                this.previousWord.textContent = 'Yesterday';
                break;
            case 'weekly':
                this.previousWord.textContent = 'Last week';
                break;
            case 'monthly':
                this.previousWord.textContent = 'Last month';
                break;
            default:
                this.previousWord.textContent = 'Previous';
                break;
        }
    }

    //Pulls numbers from the user data based on which timeframe was selected
    updateData(timeFrame){
        this.currentTimeFrame = timeFrame;
        //Update tense of previously text
        this.checkPastTense(timeFrame);
        //Get specific user entry from Array 
        const widgetEntryData =  userData.find(entry => entry.title === this.title);        //Get specific time frame for last and current
        this.currentTime.textContent = this.appendHours(widgetEntryData.timeframes[timeFrame].current);
        //this.currentTime.textContent = this.appendHours(newTime);
        this.previousValue.textContent = this.appendHours(widgetEntryData.timeframes[timeFrame].previous);
    }
}


//Create new widget for each card and store in an array
const widgetArray = [];
document.querySelectorAll('.widget-container').forEach((el) => {
    widgetArray.push(new TimeWidget(el));
})
//Add Buttons for Daily Weekly Monthly
document.getElementById('daily-btn').addEventListener('click', () => {
    widgetArray.forEach(function(val, index){
        val.updateData('daily');
    });
});
document.getElementById('weekly-btn').addEventListener('click', () => {
    widgetArray.forEach(function(val, index){
        val.updateData('weekly');
    });
});
document.getElementById('monthly-btn').addEventListener('click', () => {
    widgetArray.forEach(function(val, index){
        val.updateData('monthly');
    });
});


//So inititally I wanted to design a pattern where you could pass a specific method
// and arguments to each object using forEach but I couldn't figure out how to make
//an instance' method into a callback function

//Each button iterates through the widgets, passing the timeframe, the method to be called
// and calls updateData() from each object
//the buttons had iterateWidgets(callbackMethod, args)

// const iterateWidgets = (callbackFn, timeframe) => {
//     widgetArray.forEach(function(val, index){
//         val.callbackFn(timeframe);
//     });
// }



//Object for storing the JSON data
let userData = null;
fetchJSONData();
// Fetch JSON data from a file
async function fetchJSONData(){

     fetch('./data.json')
        //a then statement creates a chained "function" that passes return values ot next 'then'
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        //You can access a specific entry by title, or return the entire thing
        .then(data => {
            
            // Access a specific entry by title or ID
            const specificEntry = data.find(entry => entry.title === 'Work');
            userData = data;
        })
        .catch(error => {
            console.error('Error fetching JSON data:', error);
        });
}

function extractNumberFromString(str) {
    return str.match(/(\d+)/);
}

