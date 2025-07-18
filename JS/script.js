let tasks = [
  {
    name: "Do the dishes",
    prtyLvl: "0",
    description: "Wash all of the dishes",
    image: "dishes.jpg",
    deadline: "10.06.2025",
  },
  {
    name: "Do the laundry",
    prtyLvl: "0",
    description: "The black and the white clothes need to be washed",
    image: "laundry.jpg",
    deadline: "11.06.2025",
  },
  {
    name: "Vacuum the apartment",
    prtyLvl: "0",
    description: "Vacuum before mopping",
    image: "vacuum.jpg",
    deadline: "11.06.2025",
  },
  {
    name: "Mop the floors",
    prtyLvl: "0",
    description: "Mop after the floors have been vacuumed",
    image: "mopping.jpg",
    deadline: "11.06.2025",
  },
  {
    name: "Go to the gym",
    prtyLvl: "0",
    description: "One day workout, one day rest",
    image: "gym.jpg",
    deadline: "Every other day",
  },
  {
    name: "Reinstall the PC",
    prtyLvl: "0",
    description:
      "The PC is acting up again and a fresh reinstall should fix that",
    image: "reinstall.png",
    deadline: "30.06.2025",
  },
  {
    name: "Feed the dog",
    prtyLvl: "0",
    description: "He also needs to eat",
    image: "dog.jpg",
    deadline: "Every day",
  },
  {
    name: "Buy gift for Stefi",
    prtyLvl: "0",
    description: "My girlfriend deserves a gift",
    image: "gift.webp",
    deadline: "25.06.2025",
  },
  {
    name: "Go grocery shopping",
    prtyLvl: "0",
    description: "Food is important to ones' survival",
    image: "grocery.webp",
    deadline: "Every other day",
  },
  {
    name: "Drink 3 liters of water",
    prtyLvl: "0",
    description:
      "Drinking plenty of water is vital for a healthy digestion track",
    image: "water.webp",
    deadline: "Every day",
  },
  {
    name: "Shave",
    prtyLvl: "0",
    description: "Shaving often has never been my stron suit",
    image: "shave.webp",
    deadline: "10.06.2025",
  },
  {
    name: "Wash the car",
    prtyLvl: "0",
    description:
      "For a maximum feeling of comfort the car should be washed every 2 weeks",
    image: "car.webp",
    deadline: "20.06.2025",
  },
];
// The function which shows the cards START
function showCards() {
  for (item of tasks) {
    document.getElementById("result").innerHTML += `
<div class="col-12 col-md-6 col-lg-4 mb-4 d-flex">
    <div class="card h-100 d-flex flex-column">
        <img src="Images/${item.image}" 
        class="imgClass" 
        alt="${item.name}">
        <div class="card-body">
              <h5 class="card-title fs-3">${item.name}</h5>
              <p class="card-title fs-6">${item.description}<p>
              <hr>
              <p class="card-text p-2 bg-success prtyLvlBg">Priotiy level: <span class="prtyLvlNum">${item.prtyLvl}</span></p>
              <p class="fs-5"><span class="fw-semibold">Deadline: </span>${item.deadline}</p>
              <hr>
            <div>
              <div class="d-flex flex-wrap justify-content-center gap-2">
              <button class="btn btn btn-outline-primary prtyBtnUp">Priority up</button>
              <button class="btn btn-outline-info prtyBtnDown">Priority down</button>
              <button type="button" class="btn btn-success"><i class="fa-solid fa-check"></i></button>
              <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    </div>
</div>
    `;
  }
}
// The function which shows the cards END
showCards();
// The function for priority level up START
function priorityUp() {
  let prtyBtnUp = document.querySelectorAll(".prtyBtnUp");
  prtyBtnUp.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      if (tasks[index].prtyLvl < 5) {
        tasks[index].prtyLvl++;
        document.querySelectorAll(`.prtyLvlNum`)[index].innerText =
          tasks[index].prtyLvl;
        changeColor(index);
      }
    });
  });
}
// The function for priority level up END
priorityUp();
// The function for priority level down START
function priorityDown() {
  let prtyBtnDown = document.querySelectorAll(".prtyBtnDown");
  prtyBtnDown.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      if (tasks[index].prtyLvl > 0) {
        tasks[index].prtyLvl--;
        document.querySelectorAll(`.prtyLvlNum`)[index].innerText =
          tasks[index].prtyLvl;
        changeColor(index);
      }
    });
  });
}
// The function for priority level down END
priorityDown();
// The function for changing the color of the priority level START
function changeColor(index) {
  let prtyLvlBg = document.querySelectorAll(".prtyLvlBg")[index];
  let prtyLvl = tasks[index].prtyLvl;
  if (prtyLvl <= 1) {
    if (prtyLvlBg.classList.contains("bg-warning")) {
      prtyLvlBg.classList.replace("bg-warning", "bg-success");
    } else if (prtyLvlBg.classList.contains("bg-danger")) {
      prtyLvlBg.classList.replace("bg-danger", "bg-success");
    } else if (!prtyLvlBg.classList.contains("bg-success")) {
      prtyLvlBg.classList.add("bg-success");
    }
  } else if (prtyLvl <= 3) {
    if (prtyLvlBg.classList.contains("bg-success")) {
      prtyLvlBg.classList.replace("bg-success", "bg-warning");
    } else if (prtyLvlBg.classList.contains("bg-danger")) {
      prtyLvlBg.classList.replace("bg-danger", "bg-warning");
    } else if (!prtyLvlBg.classList.contains("bg-warning")) {
      prtyLvlBg.classList.add("bg-warning");
    }
  } else {
    if (prtyLvlBg.classList.contains("bg-success")) {
      prtyLvlBg.classList.replace("bg-success", "bg-danger");
    } else if (prtyLvlBg.classList.contains("bg-warning")) {
      prtyLvlBg.classList.replace("bg-warning", "bg-danger");
    } else if (!prtyLvlBg.classList.contains("bg-danger")) {
      prtyLvlBg.classList.add("bg-danger");
    }
  }
}
/* The function for changing the color of the priority level END
This function is called inside the priority level function */
let sort = document.getElementById("sort");
// Sorting function START
sort.addEventListener("change", function () {
  const sortBy = this.value;

  tasks.sort((a, b) => {
    if (sortBy === "prtyLvl") {
      return parseInt(a.prtyLvl) - parseInt(b.prtyLvl);
    } else if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
  });

  refreshCards();
});
// Sorting function END
/* This function is here to refresh the cards, the other functions
 and keep the priority color once they have been sorted */
function refreshCards() {
  document.getElementById("result").innerHTML = "";
  showCards();
  priorityUp();
  priorityDown();

  tasks.forEach((_, index) => changeColor(index));
}
/* This function is here to refresh the cards, the other functions
 and keep the priority color once they have been sorted */
