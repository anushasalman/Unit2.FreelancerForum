// State: define variables for data our program needs to remember
// Represents state of our program

// Declare an initial array called myArray
// myArray contains three objects with three key-value pairs each
// The three properties are name, occupation and price

const myArray = [

  { name: `Alice`, 
    occupation: `writer`,
    price: 30
  },
  { name: `Bob`, 
    occupation: `teacher`,
    price: 50
  },
  { name: `Carol`,
    occupation: `programmer`,
    price: 70
  }];
  
  const drSlice = [
  {name: `Dr. Slice`, 
    occupation: `gardener`, 
    price: 25
  }];
  
  const drPressure = [
  { name: `Dr. Pressure`, 
  occupation: `programmer`, 
  price: 51
  }];
  
  const profPossibility = [
  { name: `Prof. Possibility`, 
    occupation: `teacher`,
    price: 43
  }];
  
  
  //Testing to see if array is correctly put in
  //console.log(myArray);
  
  // Define sum to get the total so we can divide to get average starting price
  // total and currentPrice are parameters
  // Use dot notation to get the price property
  
  const sum = (total, currentPrice) => {
  return total + currentPrice.price;
  }
  
  // Get average starting price
  // Take sum of starting prices and divide by number of objects in array to get avg
  // Use reduce method to apply function against accumulator and reduce each value to one
  // Initial value set to 0
  // Use array.length to get array length to divide by for average
  function getAverage(arr) {
    return myArray.reduce(sum, 0)/(arr.length);
  }
  
  // Define average and put in the prices of the array
  const arrayAverage = getAverage(myArray); 
  // Test average working by using console.log
  // console.log(arrayAverage);
  
  
  // Select the element by using DOM selector
  // document 
  // querySelector grabs first element only that matches CSS selector
  // ID given from html found using # with same id name
  const averageSelectedh3 = document.querySelector('#avg');
  
  // Use innerText to get the rendered avaerage price
  // (Rendered: Displaying output in browser)
  // Use template literal (allows you to concatenate strings)
  averageSelectedh3.innerText = `The average starting price is ${arrayAverage} dollars.`
  
  const render = () => {
  
  const myNames = myArray.map((person) => {
    return person.name;
  });
  
  const myOccupations = myArray.map((person) => {
    return person.occupation;
  });
  
  const myPrices = myArray.map((person) => {
    return person.price;
  });
  
  const myNamesTags = myNames.map((name) => {
    const currentTag = document.createElement(`li`);
    currentTag.innerText = name;
    return currentTag;
  });
  
  const myOccupationsTags = myOccupations.map((occupation) => {
    const currentTag = document.createElement(`li`);
    currentTag.innerText = occupation;
    return currentTag;
  });
  
  const myPricesTags = myPrices.map((price) => {
    const currentTag = document.createElement(`li`);
    currentTag.innerText = price;
    return currentTag;
  });
  
  const firstUnorderedList = document.querySelector(`#ul1`);
  const secUnorderedList = document.querySelector(`#ul2`);
  const thirdUnorderedList = document.querySelector(`#ul3`);
  
  firstUnorderedList.replaceChildren(...myNamesTags);
  secUnorderedList.replaceChildren(...myOccupationsTags);
  thirdUnorderedList.replaceChildren(...myPricesTags);
  }
  
  render();
  
  const showNames = document.querySelector(`#showNames`);
  showNames.innerText = `Name`;
  
  const showOccupations = document.querySelector(`#showOccupations`);
  showOccupations.innerText = `Occupation`;
  
  const showPrices = document.querySelector(`#showPrices`);
  showPrices.innerText = `Starting Price`;
  
  
  // Trying to use setInterval to make function run every 1000 ms but it only shows in console
  function drSliceRunning() {
  //console.log(drSlice);
  }
  setInterval(drSliceRunning, 1000);
  
  function drPressureRunning() {
  //console.log(drPressure);
  }
  setInterval(drPressureRunning, 1000);
  
  
  function profPossibilityRunning() {
    //console.log(profPossibility);
  }
  setInterval(profPossibilityRunning, 1000);
  
  //shows in console but not on page
  
  /*
  console.log(myNames);
  console.log(myOccupations);
  console.log(myPrices);
  console.log(myArray);
  */
  
  
  // `setInterval` will call `otherArray` every 1000 milliseconds (1 second)
  // and return an interval ID that we can use to stop the interval later.
  // Calling `clearInterval(otherArray)` will stop the interval.