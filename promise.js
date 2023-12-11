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

// const peperoniPromise = makePizza(["peperoni"]);

// console.log(peperoniPromise);
// console.log("start");
// peperoniPromise.then(function (pizza) {
//   console.log("ahh");
//   console.log(pizza);
// });
// console.log("finishs");

//promise chain
// console.log("start");
// makePizza(["peperoni"])
//   .then(function (pizza) {
//     console.log(pizza);
//     return makePizza(["szynka", " ser", " cebula"]);
//   })
//   .then(function (pizza) {
//     console.log(pizza);
//     return makePizza(["krewetki", " ser", "pineaple"]);
//   })
//   .then(function (pizza) {
//     console.log(pizza);
//   })
//   .catch(handleErr);
// console.log("finishs");

// const pizzaPromise1 = makePizza(["szynka", " ser", " cebula"]);
// const pizzaPromise2 = makePizza(["krewetki", " ser"]);
// const pizzaPromise3 = makePizza(["peperoni"]);

// const dinnerPromise = Promise.all([
//   pizzaPromise1,
//   pizzaPromise2,
//   pizzaPromise3,
// ]);

// dinnerPromise.then(function ([cebulowa, krewetkowa, paprykowa]) {
//   console.log(cebulowa, krewetkowa, paprykowa);
// });

// const firstPizzaPromise = Promise.race([
//   pizzaPromise1,
//   pizzaPromise2,
//   pizzaPromise3,
// ]);

// firstPizzaPromise.then((pizza) => {
//   console.log("ulala");
//   console.log(pizza);
// });

function handleErr(err) {
  console.log("ohhh noooo!");
  console.log(err);
}

// makePizza(["krewetki", "pineaple"])
//   .then((pizza) => {
//     console.log(pizza);
//   })
//   .catch(handleErr);

const p1 = makePizza(["pepe"]);
const p2 = makePizza(["pineaple"]);

const dinnerPromise2 = Promise.allSettled([p1, p2]);
dinnerPromise2.then((results) => {
  console.log(results);
});
