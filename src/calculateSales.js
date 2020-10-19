const parse = require('csv-parse/lib/sync');

const mapInput = require('./mapInput');
const namesState = require('./namesState');

/**
 * Takes a string and gives you map data!
 * @param {string} fileContents 
 */
module.exports = function (fileContents) {
    const splitFileContents = fileContents.split('\n');
    splitFileContents.pop()
    splitFileContents.pop();

    const cleanedData = splitFileContents.join('\n');

    let records = parse(cleanedData, {
        columns: true,
        skip_empty_lines: true
    });

    // records = records.filter(function (record) {
    //     record.filter(record => record.status == 'paid')
    //     record.forEach(record => record.status = "cancelled")
    //     return record
    // })

    
    // Only Paid, To Be Paid or Pending
    records = records.filter(function (record) {
        return record['Status'] !== 'cancelled';
    });


    // Western Australia/Washington Fix
    records.filter(records => records[ 'Destination Country'] == 'Australia')
    .filter(records => records[ 'Destination State' ] == 'WA')
    .forEach(records => records[ 'Destination State' ] = 'AU-WA')


    // Sales Count
    for (let feature of mapInput.features) {
        const area = feature.properties.name;

        let count = 0;

        for (const record of records) {
            const destState = record['Destination State'];
            const destStateCapitalized = destState.charAt(0).toUpperCase() + destState.slice(1)
            const destStateTrim = destStateCapitalized.trim()
            const destStateName = namesState[destStateTrim];

            if (destStateName) {
                if (destStateName.toLowerCase() === area.toLowerCase()) {
                    count++;
                }
            }
        }

        feature.properties.sales = count;
    }

    // console.log(azur)

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