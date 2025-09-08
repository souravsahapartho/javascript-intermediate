function pakhiBhai(callMeBack, patro, patri) {
  //   console.log("callMeBack parameter", callMeBack);
  console.log("value of patro", patro);
  if (patri) {
    //   console.log(callMeBack);
    callMeBack(patro);
  } else {
    console.log("tor kopal e biya nai");
  }
}

function callSomeOne(person) {
  console.log("calling", person);
}

// callSomeOne("jodu");
// pakhiBhai(callSomeOne, "jodu", "modhu");

// myButton.addEventListener("click", () => {});

[1, 2, 3, 4].map((x) => x + 5);
