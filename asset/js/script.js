let grammes = document.getElementById("grammes");
let kilos = document.getElementById("kilos");
let livres = document.getElementById("livres");

grammes.addEventListener("input", function () {
  convPoids(this.id, this.value);
});
kilos.addEventListener("input", function () {
  convPoids(this.id, this.value);
});
livres.addEventListener("input", function () {
  convPoids(this.id, this.value);
});

function convPoids(id, value) {
  if (id === "grammes") {
    grammes = `${value} g`
    kilos.value = `${value / 1000} kg`;
    livres.value = `${value * 0.002204623} lb`;
  } else if (id === "kilos") {
    grammes.value = `${value * 1000} g`;
    console.log("kilos")
    livres.value = `${value * 2.204623} lb`;
  } else {
    grammes.value = `${value / 0.002204623} g`;
    livres.value = `${value / 2.204623} lb`;
  }
}
