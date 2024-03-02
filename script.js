const dateInput = document.querySelector("input");
const button = document.querySelector("button");

const years = document.querySelector("#years");
const months = document.querySelector("#months");
const days = document.querySelector("#days");
console.log(years, months, days)

button.addEventListener("click", () => {
    let value = dateInput.value;
    let year = parseInt(value.slice(0, 4));
    let month = parseInt(value.slice(5, 7));
    let date = parseInt(value.slice(8, 10));
  
    let dateObject = new Date();
    let todayYear = dateObject.getFullYear();
    let todayMonth = dateObject.getMonth() + 1;
    let todayDate = dateObject.getDate();

    if (date > todayDate) {
        todayDate = todayDate + 30;
        todayMonth = todayMonth - 1;
      }
      if (month > todayMonth) {
        todayMonth = todayMonth + 12;
        todayYear = todayYear - 1;
      }
    
      let age = todayYear - year;
      let ageMonth = todayMonth - month;
      let ageDate = todayDate - date;
    
      print(age, ageMonth, ageDate);
    
    });
    
    const print = (age, ageMonth, ageDate) => {
    
      years.innerText = age;
      months.innerText = ageMonth;
      days.innerHTML = ageDate;
    };