const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here

  // Keep track of index outside of the event handler.
  let index = 0;

  // This is the function that would be invoked by the event listener.
  function onKeyDownHandler(e) {
    const key = e.key;

    if (key === codes[index]) {
      index++;

      if (index === codes.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
  }

  const input = document.body;
  input.addEventListener('keydown', function(e) {
    onKeyDownHandler(e);
  });

}
