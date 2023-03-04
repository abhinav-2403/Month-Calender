const monthInx = new Date().getMonth();

const monthsEl = document.querySelector(".date h1");

const fullDateEl = document.querySelector(".date p");

const lastDay = new Date(new Date().getFullYear(),monthInx+1,0).getDate();

const firsttDay = new Date(new Date().getFullYear(),monthInx,1).getDay() - 1;

const daysEl = document.querySelector(".days");

const months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November",
    "December",
];

monthsEl.innerText = months[monthInx];

fullDateEl.innerText = new Date().toDateString();



let days = "";

for(let i=firsttDay; i>0; i--) {

    days  +=  `<div class="empty"></div>`;

}

for(let i=1;    i   <=  lastDay; i++){

    if(i === new Date().getDate()){

        days  +=  `<div class="today">${i}</div>`; 

    }

    else{

      days  +=  `<div>${i}</div>`;

    }
}

daysEl.innerHTML = days;
