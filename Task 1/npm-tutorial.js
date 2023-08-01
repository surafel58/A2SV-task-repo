const _ = require("lodash");

let strings = ['sky', 'wood', 'forest', 'falcon',
    'pear', 'ocean', 'universe'];

//output first and last element
let first_el = _.first(strings);
let last_el = _.last(strings);

console.log(`First element: ${first_el} and `,  `Lst element: ${last_el}`);

//output shuffled strings
console.log(_.shuffle(strings));

//Remove Elements 
_.pull(strings, 'sky', 'wood');
console.log("updated list of elements: ", strings);

//sort elements
_.sortBy(strings)
console.log("Sorted: ", strings);

//divie elements into chunks
let chunks = _.chunk(strings, 2);
console.log("chunks: ", chunks);