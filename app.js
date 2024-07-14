const yargs = require("yargs")
const datacontrol = require("./datacontrol")

yargs.command({
    command: "add",
    describe: "add new person",
    builder: {
        id: {
            describe: "new item id",
            demandOption: "true",
            type: "string"
        },
        firstname: {
            describe: "first name for new person",
            demandOption: "true",
            type: "string"
        },
        lastname: {
            describe: "last name for new person",
            demandOption: "true",
            type: "string"
        },
        city: {
            describe: "city for new person",
            demandOption: "true",
            type: "string"
        },
        age: {
            describe: "age for new person",
            demandOption: "true",
            type: "string"
        },
        address: {
            describe: "address for new person",
            demandOption: "true",
            type: "string"
        }
    },
    handler: (item) => {
        datacontrol.addNewPerson(item.id, item.firstname, item.lastname, item.city, item.age, item.address)
    }
})

yargs.command({
    command: "delete",
    describe: "delete person using id",
    builder: {
        id: {
            describe: "item id",
            demandOption: "true",
            type: "string"
        }
    },
    handler: (item) => {
        datacontrol.deletePerson(item.id)
    }
})

yargs.command({
    command: "read",
    describe: "read person data from my data",
    builder: {
        id: {
            describe: "item id",
            demandOption: "true",
            type: "string"
        }
    },
    handler: (item) => {
        datacontrol.readData(item.id)
    }
})

yargs.command({
    command: "list",
    describe: "list all data",
    handler: (item) => {
        datacontrol.listAllData()
    }
})

yargs.parse()


