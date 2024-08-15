const animationDuration = 2000;
const frameDuration = 1000 / 60;
const totalFrames = Math.round(animationDuration / frameDuration);
const easeOutQuad = (t) => t * (2 - t);

let elCount = 0;

export function startCounter(el, idx, observer) {
  elCount++;
  let frame = 0;
  observer.unobserve(el);
  const countTo = parseInt(el.innerHTML, 10);
  const counter = setInterval(() => {
    frame++;
    const progress = easeOutQuad(frame / totalFrames);
    const currentCount = Math.round(countTo * progress);
    if (parseInt(el.innerHTML, 10) !== currentCount) {
      switch (idx) {
        case 0:
          el.innerHTML = currentCount + "+";
          break;
        case 1:
          el.innerHTML = currentCount + "+";
          break;
        case 2:
          el.innerHTML = currentCount + "%";
          break;
        default:
          el.innerHTML = currentCount + "%";
          break;
      }
    }
    if (frame === totalFrames) {
      clearInterval(counter);
    }
  }, frameDuration);
}
