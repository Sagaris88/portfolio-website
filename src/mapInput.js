const australia = require('./countries/australia')
const austria = require('./countries/austria')
const canada = require('./countries/canada')
const france = require('./countries/france')
const germany = require('./countries/germany')
const greece = require('./countries/greece')
const ireland = require('./countries/ireland')
const netherlands = require('./countries/netherlands')
const newZealand = require('./countries/newZealand')
const switzerland = require('./countries/switzerland')
const unitedKingdom = require('./countries/unitedKingdom')
const america = require('./countries/america')

// const array = ["Canada", "France", "Italy", "New Zealand"]


// const countries = function (array) {
//     if (array.includes("Canada")) {
//         america.concat(canada)
//     }

//     if (array.includes("France")) {
//         return america.concat(france)
//     }

//     return america
// }


// console.log(countries(array));

// if (array.includes("Vid")) {
//     const apple = america.concat()
//     console.log(apple)
// } else {
//     console.log(america.concat(france))
// }

const countries = australia.concat(austria, canada, france, germany, greece, ireland, netherlands, newZealand, 
    switzerland, unitedKingdom, america)

module.exports = {
    "type": "FeatureCollection",
    "features":
    countries
}