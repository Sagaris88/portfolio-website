const australia = require('./countries/australia')
const austria = require('./countries/austria')
const belgium = require('./countries/belgium')
const brazil = require('./countries/brazil')
const canada = require('./countries/canada')
const france = require('./countries/france')
const germany = require('./countries/germany')
const greece = require('./countries/greece')
const hongKong = require('./countries/hongKong')
const hungary = require('./countries/hungary')
const ireland = require('./countries/ireland')
const italy = require('./countries/italy')
const netherlands = require('./countries/netherlands')
const newZealand = require('./countries/newZealand')
const switzerland = require('./countries/switzerland')
const unitedKingdom = require('./countries/unitedKingdom')
const america = require('./countries/america')

// const array = ["Canada", "France", "Italy", "New Zealand"]

// console.log(array)


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



const countries = australia.concat(austria, belgium, brazil, canada, france, germany, greece, hongKong, hungary, ireland, italy, 
    netherlands, newZealand, switzerland, unitedKingdom, america)

module.exports = {
    "type": "FeatureCollection",
    "features":
    countries
}