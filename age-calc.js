const dayHtml = document.querySelector('.days-container h1 span');
const monthHtml = document.querySelector('.month-container h1 span');
const yearHtml = document.querySelector('.year-container h1 span');
const dayInput = document.querySelector('.day-input');
const monthInput = document.querySelector('.month-input');
const yearInput = document.querySelector('.year-input');
const btn = document.querySelector('img');
const day_error=document.querySelector('.day-error');
const mon_error=document.querySelector('.month-error');
const year_error=document.querySelector('.year-error');
const head_section=document.querySelectorAll('.head-section div');
const day_container=document.querySelector('.day-input-container');
const month_container = document.querySelector('.month-input-container');
const year_container = document.querySelector('.year-input-container');

window.addEventListener('keydown',(event)=>{
    if(event.key=="Enter"){
        value_checker();
    }
});

let currentDate = new Date();
let current_year=currentDate.getFullYear();

btn.addEventListener('click', () => {
    value_checker();
});

function clear_errors(){
    day_error.innerHTML=``;
    mon_error.innerHTML=``;
    year_error.innerHTML=``;
    day_container.style.color=`hsl(0, 1%, 44%)`;month_container.style.color=`hsl(0, 1%, 44%)`;
    year_container.style.color=`hsl(0, 1%, 44%)`;
}

function value_checker(){
    clear_errors();
    errorhtml();
    if (dayInput.value==``) {
        day_error.innerHTML=`This field required`;
        day_container.style.color=`Darkred`;
        dayInput.focus();
    }
    else if (monthInput.value==``) {
        mon_error.innerHTML=`This field required`;
        month_container.style.color=`Darkred`;
        monthInput.focus();
    }
    else if (yearInput.value==``) {
        year_error.innerHTML=`This field required`;
        year_container.style.color=`Darkred`;
        yearInput.focus();
    }
    else if (dayInput.value>31) {
        day_error.innerHTML=`Must be a valid day`;
        day_container.style.color=`Darkred`;
        dayInput.focus();
    }
    else if (monthInput.value>12) {
        mon_error.innerHTML=`Must be a valid month`;
        month_container.style.color=`Darkred`;
        monthInput.focus();
    }
    else if (yearInput.value>current_year) {
        year_error.innerHTML=`Must be a past year`;
        year_container.style.color=`Darkred`;
        yearInput.focus();
    }
    else if(yearInput.value<=100){
        year_error.innerHTML=`Must be a year after 100`;
        year_container.style.color=`Darkred`;
        yearInput.focus();   
    }
    else{
        date_calculator();
    }
}

function date_calculator(){
    let enteredDate = new Date(`${yearInput.value}-${monthInput.value}-${dayInput.value}`);
    let ageInMilliseconds = currentDate - enteredDate;

    let ageInSeconds = ageInMilliseconds / 1000;
    let years = Math.floor(ageInSeconds / (365.25 * 24 * 60 * 60));
    let remainingSeconds = ageInSeconds % (365.25 * 24 * 60 * 60);
    let months = Math.floor(remainingSeconds / (30.44 * 24 * 60 * 60));
    remainingSeconds %= (30.44 * 24 * 60 * 60);
    let days = Math.floor(remainingSeconds / (24 * 60 * 60));

    if(years>=0){
        yearHtml.innerHTML=years;
        monthHtml.innerHTML=months;
        dayHtml.innerHTML=days;
    }
}

function errorhtml(){
    yearHtml.innerHTML=`--`;
    monthHtml.innerHTML=`--`;
    dayHtml.innerHTML=`--`;
}
