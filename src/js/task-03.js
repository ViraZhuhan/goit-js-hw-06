const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listEl = document.querySelector(".gallery");

const items = images.map((element) => {
  const itemsEl = document.createElement("li");

  const imageEl = document.createElement("img");
  imageEl.classList = "galery__img";
  imageEl.src = element.url;
  imageEl.alt = element.alt;
  imageEl.width = 250;

  itemsEl.append(imageEl);

  return itemsEl;
});

listEl.append(...items);

listEl.insertAdjacentHTML(
  "beforebegin",
  '<h2 class="title">my favorite animals</h2>'
);
