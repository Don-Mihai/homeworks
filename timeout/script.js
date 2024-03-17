// const button = document.querySelector(".start");

// const sayHello = () => {
//   alert("Здарова!");
// };

// const id = setTimeout(sayHello, 5000);

// button.addEventListener("click", () => clearTimeout(id));

// let id;
// button.addEventListener("click", () => {
//   let counter = 0;
//   clearInterval(id);
//   id = setInterval(() => {
//     console.log(++counter);
//   }, 1000);
// });

const deadline = new Date("2024-03-16T20:29:59").getTime();

window.onload = () => {
  setInterval(() => {
    const date = new Date();

    const total = deadline - date.getTime();

    const newDate = new Date(total);

    // document.querySelector("#days").innerHTML = newDate.getDate();
    document.querySelector("#hours").innerHTML = newDate.getHours();
    document.querySelector("#minutes").innerHTML = newDate.getMinutes();
    document.querySelector("#seconds").innerHTML = newDate.getSeconds();
  }, 1000);
};
