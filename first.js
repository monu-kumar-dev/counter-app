const countElement = document.getElementById("count");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const res = document.getElementById("reset");
const inc5 = document.getElementById("inc5");
const dec5 = document.getElementById("dec5");
const his = document.getElementById("his");
const clearHistory = document.getElementById("clrHistory");

// let count = 0;
let count = Number(localStorage.getItem("count")) || 0;

function updateUI() {
  countElement.innerText = count;

  if (count > 0) {
    countElement.style.color = "green";
  } else if (count < 0) {
    countElement.style.color = "red";
  } else {
    countElement.style.color = "black";
  }
  localStorage.setItem("count", count);
}

updateUI();

// Storing history
// const history = [];
let history = JSON.parse(localStorage.getItem("history")) || [];

function renderHistory() {
  his.innerHTML = "";

  history.forEach((item, index) => {
    const p = document.createElement("p");

    p.innerText = `${index + 1}. ${item}`;

    his.appendChild(p);
  });
  localStorage.setItem("history", JSON.stringify(history));
}

renderHistory();

add.addEventListener("click", () => {
  count += 1;
  history.push("+1");
  renderHistory();

  updateUI();
});

sub.addEventListener("click", () => {
  if (count > 0) {
    count -= 1;
    history.push("-1");
  }
  renderHistory();

  updateUI();
});

res.addEventListener("click", () => {
  count = 0;
  history.push("reset");
  renderHistory();

  updateUI();
});

inc5.addEventListener("click", () => {
  count += 5;
  history.push("+5");

  renderHistory();
  updateUI();
});

dec5.addEventListener("click", () => {
  if (count >= 5) {
    count -= 5;
    history.push("-5");
  }
  renderHistory();
  updateUI();
});

// console.log(history);

clearHistory.addEventListener("click", () => {
  history = [];
  localStorage.removeItem("history"); // Isse sirf "history" wali key delete hogi.
  his.innerHTML = "";

  //   count  = 0; // agr count bhi clear krna ho
  //   localStorage.removeItem("count"); // Isse sirf "count" wali key delete hogi.
  //  countElement.innerText = 0;

  //   localStorage.clear(); // Ye pura localStorage saaf kar dega.
});
