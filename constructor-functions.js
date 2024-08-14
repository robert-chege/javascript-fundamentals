function Dog(name, breed, age, weightInPounds) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weightInPounds = weightInPounds;

    this.eat = function() {
        console.log(this.name + ': Chomp!');
    }

    this.bark = function() {
        console.log(this.name + ': Woof!')
    }
}

const anotherDog = new Dog('Marley', 'Lab', 3, 60)
console.log(anotherDog);

anotherDog.biteForce = 80;
anotherDog.favFood = 'liver';
anotherDog.eat = function() {
    console.log('Start eating');
}

delete anotherDog.favFood;
console.log(anotherDog);

anotherDog.bark();