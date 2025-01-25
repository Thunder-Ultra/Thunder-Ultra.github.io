// Normal for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let shopping = ["carrot", "rice", "pappad", "atta"];
// for of loop
for (const item of shopping) {
  console.log(item);
}

let car = {
  name: "Alpha-GT",
  company: "Mercedes",
  owner: "Tuchar",
  price_usd: 100000
};
// for in loop
for (const detail in car) {
    // console.log(detail)
    // console.log(car[detail])
    console.log(detail + ' = ' + car[detail])
}

let user_accept=false
while (!user_accept){
    user_accept = confirm("Do you want to continue?")
}
if (user_accept){
    console.log('Done!')
}