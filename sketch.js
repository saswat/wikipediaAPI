let userInput;

function setup() {
  noCanvas();
  userInput = select('#userinput');
  userInput.changed(goWiki);

  function goWiki() {
    const term = userInput.value();
    console.log(term);
  }
}
