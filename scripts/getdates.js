const year = document.querySelector("#year");
const today = new Date();
).format(today)}</span>';
year.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;

