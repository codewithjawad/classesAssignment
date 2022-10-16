class PersonAccount {
    constructor(firstName,lastName,income,incomedescription,expense,expenseDescription)
    {
    this.firstName = firstName
    this.lastName = lastName
    this.income = [{income,incomedescription}]
    this.expense = [{expense,expenseDescription}]
}
income(){
    return console.log("income");
}
expense(){
    return console.log("expense");
}
balance(){
    return console.log("balance");
}
}

const detail = new PersonAccount("jawwad","ahmed",100000,"gud_income",50000,"ok")
console.log(detail);


class Automobile {
    constructor(name, model, color, type) {
        this.name = name
        this.model = model
        this.color = color
        this.type = type
    }
    start() {
        return console.log("Car is ready to drive safe")
    }
    openDoor() {
        return console.log("Door is open now")
    }
}
class Car extends Automobile {
    constructor(name, model, color, type,brand) {
        super(name, model, color, type)
        this.name = name
        this.model = model
        this.color = color
        this.type = type
        this.brand = brand
        

    }
}
class Bus extends Automobile {
    constructor(name, model, color, type, brand) {
        super(name, model, color, type)
        this.name = name
        this.model = model
        this.color = color
        this.type = type
        this.brand = brand
        

    }
}

class Truck extends Automobile {
    constructor(name, model, color, type, brand) {
        super(name, model, color, type)
        this.name = name
        this.model = model
        this.color = color
        this.type = type
        this.brand = brand
        

    }
}

const bus = new Bus("bus",2006,"kala","w22","Yutang");
console.log(bus)
bus.openDoor();
bus.start()