import "./style.css";

const games = document.querySelectorAll("#games img");
games.forEach((game: any, index) => {
  game.style.setProperty("--animation-order", index);
});

const callback = (entries: any, observer: any) => {
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      return;
    }
    entry.target.classList.remove("fade-in");
  });
};

const options: IntersectionObserverInit = {};
const observer = new IntersectionObserver(callback, options);
games.forEach((game) => observer.observe(game));
