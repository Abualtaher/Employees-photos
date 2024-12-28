const container = document.querySelector("#container");

const imgs = [
  "imges/jason-leung-HBGYvOKXu8A-unsplash.jpg",
  "imges/julien-tromeur-6UDansS-rPI-unsplash.jpg",
  "imges/xu-haiwei-_3KdlCgHAn0-unsplash.jpg",
];

function gettingImges() {
  let myImges = "";
  for (let i = 0; i < imgs.length; i++) {
    myImges += `<img
          class="photo"
          src="${imgs[i]}"
          alt="Employees photos"
        />`;
  }
  container.innerHTML = myImges;
}

gettingImges();
