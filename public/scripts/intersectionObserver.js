import { startCounter } from "./countingUp.js";

function init() {
  const observer = new IntersectionObserver((entries) => {
    for (let index = 0; index < entries.length; index++) {
      if (entries[index].isIntersecting) {
        startCounter(entries[index].target, index, observer);
      }
    }
  });

  let counters = document.getElementsByClassName("counter");
  for (const counter of counters) {
    observer.observe(counter);
  }
}
init();
