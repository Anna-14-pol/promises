function makePizza(toppings) {
  return new Promise(function (resolve, reject) {
    if (toppings.includes("pineaple")) {
      reject("seroiusly? get rid of this");
    }
    const timeToBake = toppings.length * 600;
    setTimeout(function () {
      resolve(`here is ur pizza with the top ${toppings.join("")}`);
    }, timeToBake);
  });
}

async function makeDinner() {
  const pizza1 = await makePizza(["peper"]);
  const pizza2 = await makePizza(["mushroom"]);
  console.log(pizza1);
  console.log(pizza2);
}
makeDinner();
