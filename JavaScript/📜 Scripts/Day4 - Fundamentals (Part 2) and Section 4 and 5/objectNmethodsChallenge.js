const mark = {
  fullName: "Mark",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const jhon = {
  fullName: "Jhon",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
jhon.calcBMI();
console.log(mark.bmi, jhon.bmi);

console.log(
  `${
    mark.bmi > jhon.bmi
      ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${jhon.fullName}'s (${jhon.bmi})`
      : `${jhon.fullName}'s BMI (${jhon.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
  }`
);
