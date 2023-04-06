function alertCityTime(event) {
  if (event.target.value.length > 0) {
    let localTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM, D YYYY h:mm A");

    alert(`It is ${localTime} in ${event.target.value}`);
  }
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", alertCityTime);

function updateTime() {
  let amsterdamElement = document.querySelector("#amsterdam");
  let amsterdamDateElement = amsterdamElement.querySelector(".date");
  let amsterdamTimeElement = amsterdamElement.querySelector(".time");
  amsterdamDateElement.innerHTML = moment()
    .tz("Europe/Amsterdam")
    .format("MMMM Do YYYY");
  amsterdamTimeElement.innerHTML = moment()
    .tz("Europe/Amsterdam")
    .format("HH:mm:ss A");

  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  newYorkDateElement.innerHTML = moment()
    .tz("America/New_York")
    .format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("HH:mm:ss A");

  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  londonDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("MMMM Do YYYY");
  londonTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format("HH:mm:ss A");
}

updateTime();
setInterval(updateTime, 1000);
