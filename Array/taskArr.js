const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  if (arr.length > 0) {
    let str = arr.join(" ");

    return `Семья состоит из: ${str}`;
  } else {
    let set2 = `Семья пуста`;
    return set2;
  }
}

console.log(showFamily(family));


const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
    arr.forEach(city =>{
        console.log(city.toLowerCase())
    })
}

standardizeStrings(favoriteCities);
