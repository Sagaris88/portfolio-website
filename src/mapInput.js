const australia = require('./countries/australia')
const austria = require('./countries/austria')
const canada = require('./countries/canada')
const france = require('./countries/france')
const germany = require('./countries/germany')
const ireland = require('./countries/ireland')
const netherlands = require('./countries/netherlands')
const newZealand = require('./countries/newZealand')
const unitedKingdom = require('./countries/unitedKingdom')
const america = require('./countries/america')


const qwerty = australia.concat(austria, canada, france, germany, ireland, netherlands, newZealand, unitedKingdom, america)

module.exports = {
    "type": "FeatureCollection",
    "features":
        qwerty
}