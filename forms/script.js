let submit = document.getElementById("submit");
submit.addEventListener("click", function (e) {
  e.preventDefault();
  let address = [];
  address.push(address1.value);
  address.push(address2.value);

  let gender = document.getElementsByName("gender");
  let genderValue;
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderValue = gender[i].value;
    }
  }

  let food = document.getElementsByName("food");
  let foodList = [];
  let foodCount = 0;
  console.log(food);
  for (let i = 0; i < food.length; i++) {
    if (food[i].checked) {
      foodList.push(food[i].value);
      foodCount++;
    }
  }
  if (foodList.length >= 2) {
    result = foodList.join(", ");
  } else {
    result = alert("Choose atleast 2 options out of 5 in food");
  }

  createTable(
    fname.value,
    lname.value,
    address.join(" "),
    pin.value,
    genderValue,
    result,
    state.value,
    country.value
  );
  fname.value = "";
  lname.value = "";
  address1.value = "";
  address2.value = "";
  pin.value = "";
  gender.value = "";
  foodList = [];
  state.value = "";
  country.value = "";
});

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let address1 = document.getElementById("address1");
let address2 = document.getElementById("address2");
let pin = document.getElementById("pin");
let gender = document.getElementById("gender");
let food = document.getElementById("food");
let state = document.getElementById("state");
let country = document.getElementById("country");

function createTable(
  fname,
  lname,
  address,
  pincode,
  gender,
  food,
  state,
  country
) {
  let tbody = document.getElementById("tbody");
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");
  let td7 = document.createElement("td");
  let td8 = document.createElement("td");
  td1.innerHTML = fname;
  td2.innerHTML = lname;
  td3.innerHTML = address;
  td4.innerHTML = pincode;
  td5.innerHTML = gender;
  td6.innerHTML = food;
  td7.innerHTML = state;
  td8.innerHTML = country;
  tr.append(td1);
  tr.append(td2);
  tr.append(td3);
  tr.append(td4);
  tr.append(td5);
  tr.append(td6);
  tr.append(td7);
  tr.append(td8);
  tbody.append(tr);
}
