const adviceId = document.getElementById("advice__id");
const adviceText = document.getElementById("advice__text");
const rerollBtn = document.getElementById("reroll");
const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const res = await fetch(url);
  const {slip:{id,advice}} = await res.json();
  adviceId.innerText = id;
  adviceText.innerText = advice;
}

getAdvice()

rerollBtn.addEventListener("click",getAdvice)