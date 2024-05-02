//UPDATE TIME
class TimeWidget {
    //Title is the title from which to pull from json file
    constructor(title) {
        //store title el

        //store title
        //store moreoptions menu el 
        //store current time el
        //store previous time el
        //store value
        //store 
    }
}

//When user clicks on monthly, daily etc it must go through all the 
//widget objects and update the values
//If there was a server it should only load once


//Object for storing the JSON data
const userData = fetchJSONData();
//Fetch the JSON data
async function fetchJSONData() {
    try {
      const response = await fetch('./data.json'); 
      if (!response.ok) {
        throw new Error(`Failed to fetch JSON data, error: ${response.status}`);
      }
      const jsonData = await response.json();
      console.log(jsonData);
      return jsonData;
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  }