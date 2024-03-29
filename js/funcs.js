export function generationHtml(need, list) {
  list.insertAdjacentHTML(
    "beforeend",
    `<li>
    <p class="need">${need}</p>
    <div class="li__img">
        <img src="img/icons-off.png" alt="check" class="check" />
        <img src="img/trash.png" alt="trash" class="delete" />
    </div>
    </li>`
  );
}

export function changeChecked(item) {
  const arr = item.src.split("/");
  console.log(arr[arr.length - 1]);
  if (arr[arr.length - 1] === "icons-off.png") {
    item.src = "img/icons-on.png";
  } else {
    item.src = "img/icons-off.png";
  }
}
export function deleteItem(item) {
  item.parentNode.parentNode.parentNode.removeChild(item.parentNode.parentNode);
}
