interface Garage {
  capacity: number;
  typeOfCar: string;
  maxLength: number;
  minLength: number;
}
const userGarage1: Garage = {
  typeOfCar: "sedan",
  capacity: 15,
  maxLength: 2.5,
  minLength: 1.4,
};
type ID = number | string | boolean;
type array = ID[];
const arr: array = ["ahmed", 2, 2.3, false];
console.log(userGarage1.minLength);
arr.push("goat");
console.log(arr);
