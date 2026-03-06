function changeMe(arr) {
  if (arr.length === 0) {
    console.log("");
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    let person = arr[i];
    let obj = {
      firstName: person[0] || "",
      lastName: person[1] || "",
      gender: person[2] || "",
    };
    if (person[3] && typeof person[3] === "number" && person[3] <= 2023) {
      obj.age = 2023 - person[3];
    } else {
      obj.age = "Invalid Birth Year";
    }
    console.log(`${i + 1}. ${obj.firstName} ${obj.lastName}:`);
    console.log(obj);
  }
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]);
changeMe([]);
