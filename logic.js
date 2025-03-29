//inheritance
class student{
    constructor(studName){
        this.studName = studName;
    }

    recipeName(){
        console.log(`Name: ${this.studName}`)
    }
}

class Department extends student{
    constructor(studName,deptName,deptId){
        super(studName);
        this.deptName = deptName;
        this.deptId = deptId;
    }

    departMentDetails(){
        console.log(`Name: ${this.studName}, deptId: ${this.deptId}, Department: ${this.deptName}`);
        
    }
}

let itemName = new student('lokesh');
itemName.recipeName();


//get and set

class Mark extends student{
    constructor(studName,total) {
        super(studName)
        this.total = total;
    }
    
    get mark(){
        return `Student Name: ${this.studName}, Mark: ${this.total}`;
    }

    set mark(total){
        if(this.total>35){
            this.total = total;  
        }
    }
    

}


let studenDetail = new Department('lokesh','CSE','12');
studenDetail.departMentDetails();

let showMark = new Mark('lokesh','60');
console.log(showMark);

showMark.mark = '80';
console.log(showMark.mark);




// Encapsulation

class BankBalance{
    #balance
    constructor(amount){
        this.#balance = amount;
    }

    get fetchAmount(){
        console.log(`Your Balance: ${this.#balance}`); 
    }

    set paidedAmount(amount){
        if(amount>0){
            this.#balance += amount
            console.log(`paid ammount:${(this.#balance)}`); 
        }else{
            console.log('Add more amount');  
        }
         
    }
}

let bank = new BankBalance(2000);
bank.fetchAmount;

bank.paidedAmount = 5000


//polymorphism

class Animal{
    constructor(name){
        this.name = name;
    }

    animalName(){
        console.log(`Animal Name: ${this.name}`);
    }
}

let animal = new Animal('cat');
animal. animalName();

class Dog extends Animal{
    constructor(name){
        this.name = name;
    }
    animalName(){
        console.log(`Animal Name: ${this.name}`);
    }
}
let dog = new Animal('dog');
dog. animalName();


//stactic

class fixed{
    static pi = 3.14;
    static areaOfCircle(value){

        return `${this.pi * value * value}`;
    }
}

console.log(fixed.areaOfCircle(3));


//abstraction 


class EmailAndPassword{
    constructor(email,password){
        this.password = this.#encriptPass(password);
        this.email = email;
    }

    #encriptPass(password){
        return btoa(password);
    }

    show(){
        console.log(`userMail: ${this.email}, password: ${this.password}`);
    }

    
}

let login = new EmailAndPassword('lokesh@gmail.com',123456);
login.show();

