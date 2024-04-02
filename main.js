// const items = document.querySelectorAll('.appear');

// const active = function (entries) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('inview');
//     } else {
//       entry.target.classList.remove('inview');
//     }
//   });
// };
// const io2 = new IntersectionObserver(active);
// for (let i = 0; i < items.length; i++) {if (window.CP.shouldStopExecution(0)) break;
//   io2.observe(items[i]);
// }window.CP.exitedLoop(0);
const items = document.querySelectorAll('.appear');

const active = function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('inview');
    } else {
      entry.target.classList.remove('inview');
    }
  });
};

const io2 = new IntersectionObserver(active);

items.forEach(item => {
  io2.observe(item);
});
