console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    return weapons.map(weapon => weapon.name)
}
console.log(getNames());

function getCountReliableWeapons(strength) {
    return weapons.filter(weapon => weapon.durability > strength).length;
}
console.log(getCountReliableWeapons(500));

function hasReliableWeapons(strength) {
    return weapons.some(weapon => weapon.durability > strength);
}
console.log(getCountReliableWeapons(100));

function getReliableWeaponsNames(strength) {
    return weapons.filter(weapon => weapon.durability > strength).map(weapon => weapon.name);
}
console.log(getCountReliableWeapons(100));

function getTotalDamage() {
    return weapons.map(weapon => weapon.attack).reduce((a, b) => (a + b), 0)
}
