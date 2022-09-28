// Declare a function fullName and it print out your full name.
function fullName(){
    let firstname = 'Obed';
    let lastname = 'Badu';
    let fullname = `${firstname} ${lastname}`;
    console.log(fullname);
}
fullName();

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName){
    return `${firstName} ${lastName}`;
}
console.log(fullName('Obed','Baddu'));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2){
    let sum = (num1 + num2);
    return sum;
}
console.log(addNumbers(3,4));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width){
    let area = (length * width);
    return area;
}
window.alert(areaOfRectangle(3,6));

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width){
    let perimeter = 2 * (length + width);
    return perimeter;
}
window.alert(perimeterOfRectangle(8,2));

/* A volume of a rectangular prism is calculated as follows: volume = length x width x height. 
Write a function which calculates volumeOfRectPrism.*/
function volumeOfRectPrism(length, width, height){
    let volume = (length * width * height);
    return volume;
}
window.alert(volumeOfRectPrism(5,6,3));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r){
    let area = (Math.PI * r * r);
    return area;
}
console.log(areaOfCircle(20));

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r){
    let circumference = (2 * Math.PI * r);
    return circumference;
}
console.log(circumOfCircle(5));

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function densityOfSubstance(mass, volume){
    let density = (mass / volume);
    return density;
}
window.alert(densityOfSubstance(20, 10));

/* Speed is calculated by dividing the total distance covered by a moving object divided by the total 
amount of time taken. Write a function which calculates a speed of a moving object, speed.*/
function speedOfMovingObject(totalDistance, timeTaken){
    let speed = (totalDistance / timeTaken);
    return speed;
}
window.alert(speedOfMovingObject(50, 5));

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weightOfSubstance(mass, gravity){
    let weight = (mass / gravity);
    return weight;
}
window.alert(weightOfSubstance(100, 10));

/* Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. 
Check if a person is underweight, normal, overweight or obese based the information given below.
The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more*/
function bmi(weight, height){
    let calBmi = weight / (height * height);
    // return calBmi;
    if (calBmi < 18.5){
        console.log("You're underweight");
    }else if (calBmi >= 18.5 || calBmi <= 24.9){
        console.log("You have a normal weight");
    }else if (calBmi >= 25 || calBmi <= 29.9){
        console.log("You're overweight");
    }
    else{
        console.log('You are obese');
    }
}
console.log(bmi(98,3))

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr){
    const newArray = [];
    for (const element of arr){
        newArray.push(element.toUpperCase())
    }
    return newArray;
}
const names = ['Kofi', 'Ama', 'Alahu', 'Kisi'];
console.log(capitalizeArray(names));