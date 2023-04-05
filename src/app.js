function alertCityTime(event) {
  let city = event.target.value;
  let localTime = moment().tz(`${city}`).format("dddd, MMMM, D YYYY h:mm A");

  alert(`It is ${localTime} in ${city}`);
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", alertCityTime);
