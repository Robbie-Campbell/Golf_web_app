const player_1 = document.querySelector(".name_1");
const player_2 = document.querySelector(".name_2");
const player_3 = document.querySelector(".name_3");
const player_4 = document.querySelector(".name_4");
const enter_randomizer = document.querySelector(".btn-primary");
const retry = document.querySelector(".retry")
const results = document.querySelector(".results")
const names = document.querySelector(".insert_names");

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

enter_randomizer.addEventListener("click", ()=>{
    results.classList.remove("remove_panel");
    let name_1 = player_1.value;
    let name_2 = player_2.value;
    let name_3 = player_3.value;
    let name_4 = player_4.value;
    let names_array = [name_1,name_2,name_3,name_4];
    first_team = document.querySelector(".first_pairing");
    second_team = document.querySelector(".second_pairing");
    shuffle(names_array);
    first_team.textContent = "Team 1 is : " + names_array[0] + " and " + names_array[1]
    second_team.textContent = "Team 2 is : " + names_array[2] + " and " + names_array[3]
    names.classList.add("remove_panel");
    results.classList.add("add_selection");
    results.style.visibility = "visible";
    names.style.visibility = "hidden";
})

retry.addEventListener("click", ()=>{
    results.classList.remove("add_selection");
    results.classList.add("remove_panel");
    names.classList.remove("remove_panel");
    names.classList.add("add_selection");
    results.style.visibility = "hidden";
    names.style.visibility = "visible";
})

