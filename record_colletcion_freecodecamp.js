// Setup
// const recordCollection = {
//     2548: {
//         albumTitle: 'Slippery When Wet',
//         artist: 'Bon Jovi',
//         tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//         albumTitle: '1999',
//         artist: 'Prince',
//         tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//         artist: 'Robert Palmer',
//         tracks: []
//     },
//     5439: {
//         albumTitle: 'ABBA Gold'
//     }
// };

// console.log(recordCollection[0]);

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//     if (value === "") {
//         delete records[id][prop];
//       } else if (prop === "tracks") {
//         records[id][prop] ??= [];
//         records[id][prop].push(value);
//       } else {
//         records[id][prop] = value;
//       }


//     return records;
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');

//   Your function must always return the entire records object.
// If value is an empty string, delete the given prop property from the album.
// If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
// If prop is tracks and value isn't an empty string, add the value to the end of the album's tracks array. You need to create this array first if the album does not have a tracks property.

// function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i++) {
//       product *= arr[i];
//     }
//     return product;
//   }

//   console.log(multiply([1,2,3,4,5,6], 3));

  // Recursividad
  function multiply(arr, n) {   
    if (n <= 0) {
      return 0;
    } else {;
      console.log("n: " + n);
      console.log("arr[n - 1]: " + arr[n - 1]);
      //console.log("multiply(arr, n - 1): " + multiply(arr, n - 1));
      let suma =  multiply(arr, n - 1) + arr[n - 1];
      console.log("multi: " + suma);
      return suma;

    }
    
  }
  console.log(multiply([1,2,3,4,5,6], 3));
