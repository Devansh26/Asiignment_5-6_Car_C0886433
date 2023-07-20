class Car {
  constructor(brand, model, year, color, price, gas) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
    this.gas = gas;
  }

  honk() {
    console.log("Tuut tuut");
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: ${this.price}, Gas: ${this.gas}`);
  }
}

// Creating car objects
const car1 = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
const car2 = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
const car3 = new Car("BMW", "X5", 2022, "Green", 60000, 65);
const car4 = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
const car5 = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
const car6 = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);

// Invoking honk method for each car
car1.honk();
car2.honk();
car3.honk();
car4.honk();
car5.honk();
car6.honk();

// Simulating the race for 7 turns
const currentYear = new Date().getFullYear();
const raceTurns = 7;

for (let turn = 1; turn <= raceTurns; turn++) {
  car1.gas -= car1.year === currentYear ? 5 : (currentYear - car1.year + 4);
  car2.gas -= car2.year === currentYear ? 5 : (currentYear - car2.year + 4);
  car3.gas -= car3.year === currentYear ? 5 : (currentYear - car3.year + 4);
  car4.gas -= car4.year === currentYear ? 5 : (currentYear - car4.year + 4);
  car5.gas -= car5.year === currentYear ? 5 : (currentYear - car5.year + 4);
  car6.gas -= car6.year === currentYear ? 5 : (currentYear - car6.year + 4);
}

// Checking the remaining gas after the race
console.log("Remaining Gas after the race:");
console.log("Car 1:", car1.gas);
console.log("Car 2:", car2.gas);
console.log("Car 3:", car3.gas);
console.log("Car 4:", car4.gas);
console.log("Car 5:", car5.gas);
console.log("Car 6:", car6.gas);
