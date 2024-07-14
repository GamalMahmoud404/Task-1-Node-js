const fs = require("fs")

const addNewPerson = (id, firstname, lastname, city, age, address) => {    // add fun.
    const myAllData = loadData()
    const duplicatedData = myAllData.filter((obj) => {
        return obj.id === id
    })

    if (duplicatedData.length == 0) {
        myAllData.push({
            id: id,
            firstname: firstname,
            lastname: lastname,
            city: city,
            age: age,
            address: address
        })

        saveMyNewData(myAllData)
    } else {
        console.log("ERROR DUPLICATED DATA !!")
    }
}

const loadData = () => {                           //loading data from allData.json
    try {
        const readedDataJson = fs.readFileSync("allData.json").toString()
        return JSON.parse(readedDataJson)
    }
    catch {
        return []
    }
}

const saveMyNewData = (myAllData) => {                 // write new data
    const writeDataJson = JSON.stringify(myAllData)
    fs.writeFileSync("allData.json", writeDataJson)
}

const deletePerson = (id) => {                    // delete fun.
    const myAllData = loadData()
    const itemExist = myAllData.filter((obj) => {
        return obj.id === id
    })

    if (itemExist.length == 1) {
        const deleteditem = myAllData.filter((obj) => {
            return obj.id !== id
        })
        saveMyNewData(deleteditem)
    } else {
        console.log("Error This item already does not exist !!")
    }
}

const readData = (id) => {              // person searsh fun.
    const myAllData = loadData()
    const myItem = myAllData.find((obj) => {
        return obj.id == id
    })

    if (myItem) {
        console.log(myItem.firstname, myItem.lastname, " / " + myItem.city, " / " + myItem.age + " years", " / " + myItem.address)
    } else {
        console.log("Error This item does not exist !!")
    }
}

const listAllData = () => {           // list all data fun.
    const myAllData = loadData()
    myAllData.forEach((obj, length) => {
        console.log(length + 1 + " : ", obj.firstname, obj.lastname, " / " + obj.city, " / " + obj.age + " years", " / " + obj.address)
    })
}

module.exports = {
    addNewPerson,
    deletePerson,
    readData,
    listAllData
}



