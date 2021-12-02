let angleOne, angleTwo;
angleOne = 100;
angleTwo = 100;
if(angleOne + angleTwo >= 180) {
    console.log("The sum of the angles of the triangle must not exceed 180 degrees!");
}   else {
    console.log(`The third angle equals ${180 - angleOne - angleTwo} degrees`);
}