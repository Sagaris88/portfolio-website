const parse = require('csv-parse/lib/sync');

const mapInputCountry = require('./mapInputCountry');
const namesCountry = require('./namesCountry');

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
        
    // for (var {'Destination Country': d} of records) {
    //     console.log(d);
    // }

    for (let feature of mapInputCountry.features) {
        const area = feature.properties.name;

        let count = 0;

        for (const record of records) {
            const destCountry = record['Destination Country'];
            const destCountryName = namesCountry[destCountry];

            if (destCountryName) {
                if (destCountryName.toLowerCase() === area.toLowerCase()) {
                    count++;
                }
            }
        }

        feature.properties.sales = count;
        // const totalSales = feature.properties.sales
    }

    // console.log(azur)

    // we mutated it
    const mapOutputCountry = mapInputCountry;
    
    return mapOutputCountry;
};



// const recordsMapped = records.map(function (record) {
//     return {
//         type: 'Feature',
//         properties: {
//             name: record['Destination Country'],
//             sales: 1
//         }
//     };
// });

// console.log(recordsMapped);