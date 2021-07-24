function list_prop(obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }
  return keys.join(",");
}
// console.log(list_prop({ name: "David Rayy", sclass: "VI", rollno: 12 }));

function delete_prop() {
  var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
  console.log(student);
  delete student["rollno"];
  console.log(student);
}
// delete_prop();

function get_length(obj) {
  var len = 0;
  for (var key in obj) {
    len++;
  }
  return len;
}
// console.log(get_length({ name: "David Rayy", sclass: "VI", rollno: 12 }));

function print_bookDetails() {
  var library = [
    { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
    { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      readingStatus: false,
    },
  ];

  for (var i in library) {
    console.log(
      "----------------------Book " + (+i + 1) + " ----------------------"
    );
    for (var key in library[i]) {
      console.log(key + " : " + library[i][key]);
    }
  }
}
// print_bookDetails();

function calc_volume(cylinder) {
  return (
    Math.PI *
    cylinder.radius *
    cylinder.radius *
    cylinder.height
  ).toFixed(4);
}

// console.log(calc_volume({ radius: 5, height: 10 }));

function sort_objectArray(arr) {
  return arr.sort((a, b) => b.libraryID - a.libraryID);
}
// console.log(
//   sort_objectArray([
//     { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
//     { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
//     {
//       title: "Mockingjay: The Final Book of The Hunger Games",
//       author: "Suzanne Collins",
//       libraryID: 3245,
//     },
//   ])
// );
