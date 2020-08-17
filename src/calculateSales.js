const parse = require('csv-parse/lib/sync');

const mapInput = require('./mapInput');
const stateNames = require('./stateNames');

/**
 * Takes a string and gives you map data!
 * @param {string} fileContents 
 */
module.exports = function (fileContents) {
    const splitFileContents = fileContents.split('\n');
    // splitFileContents.pop()
    // splitFileContents.pop();

    const cleanedData = splitFileContents.join('\n');

    let records = parse(cleanedData, {
        columns: true,
        skip_empty_lines: true
    });

    // // Only United States
    // records = records.filter(function (record) {
    //     return record['Destination Country'] === 'United States';
    // });

    for (let feature of mapInput.features) {
        const area = feature.properties.name;

        let count = 0;

        for (const record of records) {
            const destCountry = record['Destination Country'];
            const destState = record['Destination State'];
            const quantity = record['Quantity'];
            const destStateName = stateNames[destState];

            if (destStateName) {
                if (destStateName.toLowerCase() === area.toLowerCase()) {
                    count++;
                }
            }
        }

        feature.properties.sales = count;
    }

    // we mutated it
    const mapOutput = mapInput;
    
    return mapOutput;
};



// const recordsMapped = records.map(function (record) {
//     return {
//         type: 'Feature',
//         properties: {
//             name: record['Destination State'],
//             sales: 1
//         }
//     };
// });

// console.log(recordsMapped);
