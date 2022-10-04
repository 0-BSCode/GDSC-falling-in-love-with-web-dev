const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
let ticketPrice = 69;
const confirmBtn = document.querySelector(".confirm");

//Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}
function getSelectedSeatsIndex() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  return seatsIndex;
}
function getOccupiedSeatsIndex() {
  const occupiedSeats = document.querySelectorAll(".row .seat.occupied");
  const seatsIndex = [...occupiedSeats].map((seat) => [...seats].indexOf(seat));
  return seatsIndex;
}
function occupySeats() {
  const selectedSeats = getSelectedSeatsIndex();
  seats.forEach((seat, index) => {
    if (selectedSeats.indexOf(index) > -1) {
      seat.classList.add("occupied");
    }
  });
}
function resetPage() {
  count.innerText = "0";
  total.innerText = "0";
  seats.forEach((seats) => seats.classList.remove("selected"));
}

//Seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

confirmBtn.addEventListener("click", () => {
  occupySeats();
  resetPage();
});
