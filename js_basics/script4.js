let a = 7;
let b = 8;
let name = "TEST";

console.log(name + a + b);

//Das ist eine Schleife 

for (let count = 0; count < 10; count++) {
    console.log(count + " TEST")
}


// von 7 bis 45
for (let count = 7; count <= 45; count++) {
    console.log(count + " first ")
}
// von 9 bis 99
for (let count = 9; count <= 99; count++) {
    console.log(count + " second ")
}
// rückwärts von 10 bis 0
for (let count = 10; count >= 0; count--) {
    console.log(count + "third")
}
// rückwärts von 1234 bis 1207
for (let count = 1234; count >= 1207; count--) {
    console.log(count + " four")
}
// Namen genau 8 mal ausgeben
for (let count = 0; count <= 8; count++) {
    console.log(count + " Fabrice")
}
// Zähle von 0 auf 10, dann gib Deinen Namen aus, dann zähle von 10 auf 0
for (let count = 0; count <= 10; count++) {
    console.log(count)
}
console.log("Fabrice")
for (let count = 10; count >= 0; count--) {
    console.log(count)
}