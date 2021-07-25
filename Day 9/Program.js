const obj1 = {
  objName: "Object 1",
  getName: function (a, b) {
    console.log("Object name is " + this.objName);
    console.log(a + " + " + b + " : " + (+a + b));
  },
};
const obj2 = {
  objName: "Object 2",
};

obj1.getName.call(obj1, 2, 3);
obj1.getName.call(obj2, 4, 5);
obj1.getName.apply(obj1, [2, 3]);
obj1.getName.apply(obj2, [4, 5]);
const x = obj1.getName.bind(obj1, 2, 3);
const y = obj1.getName.bind(obj2, 4, 5);
x();
y();
