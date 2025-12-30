const modal = document.getElementById("calendar-modal");
const modalImage = document.getElementById("calendar-modal-image");
const modalText = document.getElementById("calendar-modal-text");
const calendarDays = document.getElementsByClassName("calendar-day");
const imagePath = "images/days/";
const imageExt = ".webp";

function openDay() {
  console.log(this.id);
  const image = imagePath + this.dataset.image + imageExt;
  modalImage.src = image;
  modalText.textContent = this.dataset.text;
  modal.showModal();
}

for (const day of calendarDays) {
  day.addEventListener("click", openDay);
  const image = imagePath + day.dataset.image + imageExt;
  day.style.backgroundImage = `url(${image})`;
}
