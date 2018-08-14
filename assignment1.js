const fs = require('fs')
const csvFilePath = './customer-data.csv'
const csv = require('csvtojson')

csv()
.fromFile(csvFilePath)
.then((jsonObj)=> {
    console.log(jsonObj)
    fs.writeFile('customer-data.json',JSON.stringify(jsonObj), (err)=>{
        if(err) console.error(err)
    })
    console.log('File created successfully')
})

