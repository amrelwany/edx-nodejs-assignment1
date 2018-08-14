const fs = require('fs')
const csvFilePath = './customer-data.csv'
const csv = require('csvtojson')

const csvToJsonConv = (filename)=>{
    csv()
    .fromFile(filename)
    .then((jsonObj)=> {
        fs.writeFile('customer-data.json',JSON.stringify(jsonObj), (err)=>{
            if(err) console.error(err)
        })
        console.log('JSON File created successfully')
    })
}
csvToJsonConv(csvFilePath)


