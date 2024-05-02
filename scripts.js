//UPDATE TIME
class TimeWidget {
    //Title is the title from which to pull from json file
    constructor(el) {
        //store title el
        this.titleEl = el.querySelector('.title');
        //store title for grabbing data from timeframe object
        this.title = this.titleEl.textContent;
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
            default:
                break;
        }
    }
    //Pulls numbers from the user data based on which timeframe was selected
    updateData(timeFrame){
        this.checkPastTense(timeFrame);
        
    }
}

//Create new widget for each card
const widgetArray = [];
document.querySelectorAll('.widget-container').forEach((el) => {
    widgetArray.push(new TimeWidget(el));
})

//Add Buttons for Daily Weekly Monthly

//Function that iterates through the widgets and calls updateData() from each object
widgetArray.map()


//Object for storing the JSON data
const userData = fetchJSONData();



// Fetch JSON data from a file
async function fetchJSONData(){

    return fetch('./data.json')
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
            console.log(data);
            return specificEntry;
        })
        .catch(error => {
            console.error('Error fetching JSON data:', error);
        });
    //return (newData);
}

function extractNumberFromString(string) {

}