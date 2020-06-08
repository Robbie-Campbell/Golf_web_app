// Get the input box classes
const player_1 = document.querySelector(".name_1");
const player_2 = document.querySelector(".name_2");
const player_3 = document.querySelector(".name_3");
const player_4 = document.querySelector(".name_4");

// Get the buttons to apply the event listeners
const enter_randomizer = document.querySelector(".btn-primary");
const retry = document.querySelector(".retry");

// Get the main text areas
const results = document.querySelector(".results");
const names = document.querySelector(".insert_names");

// Create a function to shuffle the values in an array.
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

// The event listener to get the names of the input boxes
// and output the random teams
enter_randomizer.addEventListener("click", ()=>{

    // Reset the results box
    results.classList.remove("remove_panel");

    // Get input values
    let name_1 = player_1.value;
    let name_2 = player_2.value;
    let name_3 = player_3.value;
    let name_4 = player_4.value;

    // Put the names in an array
    let names_array = [name_1,name_2,name_3,name_4];

    // Where the results will be  output
    first_team = document.querySelector(".first_pairing");
    second_team = document.querySelector(".second_pairing");
    
    // Shuffle the names in the array
    shuffle(names_array);

    // Set the text of the output headers
    first_team.textContent = "Team 1 is : " + names_array[0] + " and " + names_array[1]
    second_team.textContent = "Team 2 is : " + names_array[2] + " and " + names_array[3]
    
    // Show the results and remove input box
    names.classList.add("remove_panel");
    results.classList.add("add_selection");
    results.style.visibility = "visible";
    names.style.visibility = "hidden";
})

// Allow the user to reshuffle names
retry.addEventListener("click", ()=>{
    results.classList.remove("add_selection");
    results.classList.add("remove_panel");
    names.classList.remove("remove_panel");
    names.classList.add("add_selection");
    results.style.visibility = "hidden";
    names.style.visibility = "visible";
})

