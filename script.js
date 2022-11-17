// 1. append text to li that has which li it is on the page (i.e. 0..n-1)
// start by getting references to the relevant DOM elements
// make the specified modifications

let relevantDOMElements = document.getElementsByTagName("li");
// console.log(relevantDOMElements);
// relevantDOMElements.forEach(elem => console.log(elem))
for (let i = 0; i < relevantDOMElements.length; i++) {
  console.log(i, relevantDOMElements[i]);
  // if (i < (relevantDOMElements.length + 4) / 2) {
  //   relevantDOMElements[i].innerText += ` ${i}`;
  // } else {
  //   relevantDOMElements[i].innerHTML += ` ${i}`;
  // }
  const textForI = document.createTextNode(` ${i}`);
  relevantDOMElements[i].appendChild(textForI);

  document.create
}

// 2. when click div console.log(which div it is on the page, i.e. 0..n-1)
// get a ref to each div in DOM
relevantDOMElements = document.getElementsByTagName("div");
Array.from(relevantDOMElements).forEach((divElem, i) => {
console.log(`i: ${i} relevantDOMElements[i]: ${relevantDOMElements[i].innerText}`);
})

// add event listener to each div

// 3. element with id "donut" is clicked, log the number of words in the element


// 4. when aside clicked, window.prompt then add id with content from prompt to aside's parent, log target

//  using selector pattern A B
const aside = document.querySelector("body aside");
aside.addEventListener("click", (ev) => {
  const userEnteredId = window.prompt("Enter an id");
  console.log(`userEnteredId: ${userEnteredId}`);
  // need aside's parent
  const parent = aside.parentElement;
  // need to know what the user entered
  parent.id = userEnteredId;
  console.log("ev:", ev);
  console.log(`ev.target: ${ev.target}`);

  // 5. add an input (element of type text) with classname (of your choice) as the first child of preceding id's first aside

  // intended result:
  // aside
  //  input of type text with class of your choice
  //  ol

  // "#id  A"

  const pattern5Result = document.querySelector(`#${userEnteredId} aside`);

  const newInputElem = document.createElement("input");
  newInputElem.type = "text";
  newInputElem.className = "best-class-og-343f22-🌈";

  pattern5Result.prepend(newInputElem);

  // 6. log cowsay for the input on blur  // https://helloacm.com/api/cowsay/?msg=CowSay

  // want a ref to the input
  const inputElemByClassname = document.querySelector(".best-class-og-343f22-🌈");
  // add event listener to input for blur
  inputElemByClassname.addEventListener("blur", (ev) => {
    console.log('event happened')
  });
  //    want to get the content of the input
  //    want to make a request to cowsay api
  //    when the response is ready, 
  //      we want to wait around for its text() to be ready,
  //      then log it
})



