// const btn = document.querySelector("button");
// const msg = document.querySelector("#message");

// btn.addEventListener("click", function () {
//     msg.textContent = "You clicked me!";
// });

const btn = document.getElementById("addBtn");
const container = document.getElementById("container");

btn.addEventListener("click", function () {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Hello Ess";

    container.appendChild(newParagraph);
});

// edit, delete, no duplicate 