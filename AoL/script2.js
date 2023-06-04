function loadWorkoutsSelection() {
    let charSelect = document.getElementById("char-select");
    let workoutSelect = document.getElementsByClassName("workout-select");
    let initialIndex = (workoutSelect.length - 1) / 2;

    console.log(initialIndex);
    workoutSelect[initialIndex].style = "height: 250px;  width: 300px;";
    // charSelect.children[(charSelect.children.length - 1) / 2].children[0].style = "height: 250px;  width: 300px;";

    console.log(charSelect);
    // charSelect.children[(charSelect.children.length - 1) / 2].style = "height: 300px;  width: 300px;";
    // charSelect.children[(charSelect.children.length - 1) / 2].children[0].style = "height: 300px; width: 300px;";

    // charSelect.children.array.forEach(element => {
        // element.onmouseenter = function(e) {
        //     e.style = "height: 300px;  width: 300px;";
        //     e.children[0].style = "height: 300px; width: 300px;";
        // }
    // });

    nextSelectBtn = document.getElementById("next-btn");
    prevSelectBtn = document.getElementById("previous-btn");

    nextSelectBtn.onclick = function(e) {
        workoutSelect[initialIndex].style = "";
        workoutSelect[initialIndex].children[0].style = "";

        if (initialIndex >= workoutSelect.length - 1) {
            initialIndex = 0;
        } else {
            initialIndex++;
        }
        workoutSelect[initialIndex].style = "height: 250px;  width: 300px;";
        workoutSelect[initialIndex].children[0].style = "height: 250px;  width: 300px;";
    }

    prevSelectBtn.onclick = function(e) {
        workoutSelect[initialIndex].style = "";
        workoutSelect[initialIndex].children[0].style = "";

        if (initialIndex <= 0) {
            initialIndex = workoutSelect.length - 1;
        } else {
            initialIndex--;
        }

        workoutSelect[initialIndex].style = "height: 250px;  width: 300px;";
        workoutSelect[initialIndex].children[0].style = "height: 250px;  width: 300px;";

    }
    // for (let elem of charSelect.children) {
    //     elem.onmouseenter = function(e) {
    //         e.target.style = "height: 100%;  width: 300px;";
    //         e.target.children[0].style = "height: 100%; width: 300px;";
    //         document.getElementById("workout-info").innerHTML += "<h1>fdsfdsfd</h1>";
    //     }

    //     elem.onmouseleave = function(e) {
    //         e.target.style = "";
    //         e.target.children[0].style = "";
    //         document.getElementById("workout-info").innerHTML = "";
    //     }
    // }
}

// function focusWorkoutSelection(index) {
//     var charSelect = document.getElementById("char-select");
//     charSelect.children[index].style = "height: 300px;  width: 300px;";
//     charSelect.children[index].children[0].style = "height: 300px; width: 300px;";
// }