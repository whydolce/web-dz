let customer1 = "alexx";
let customer2 = "Askar";

let price1 = 120;
let quantity1 = 4;

let price2 = 200;
let quantity2 = 2;

function compareCarts(
  customer1,
  customer2,
  price1,
  quantity1,
  price2,
  quantity2,
  num
) {
  let total1 = price1 * quantity1;
  let total2 = price2 * quantity2;

  if (total1 > total2) {
    console.log(customer1 + " bolshe");
    console.log("raznitsa", total1 - total2);
  } else if (total2 > total1) {
    console.log(customer2 + " bolshe");
    console.log("raznitsa", total2 - total1);
  } else {
    console.log("Both customers spent the same amount");
  }

  console.log((total1 - total2) * num);
}

compareCarts(
  customer1,
  customer2,
  price1,
  quantity1,
  price2,
  quantity2,
  2000
);