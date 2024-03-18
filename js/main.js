import { generationHtml, changeChecked, deleteItem } from "./funcs.js";

const submit = document.querySelector(".submit");
const input = document.querySelector(".input");

const list = document.querySelector(".list");
submit.addEventListener("click", (e) => {
    generationHtml(input.value, list);
    input.value = "";
});

input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        if (input.value !== "") {
            generationHtml(input.value, list);
            input.value = "";
            e.preventDefault();
        }
    }
});

list.addEventListener("click", (e) => {
    if (e.target.closest(".check")) {
        changeChecked(e.target);
    } else if (e.target.closest(".delete")) {
        deleteItem(e.target);
    }
});
