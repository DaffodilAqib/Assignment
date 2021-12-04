class Person{
    constructor(name,city){
        this.pName = name;
        this.pCity = city;
    }
    printName(){
        console.log(this.pName);
    }
}
class student extends Person{
    constructor(name,city,grade){
        super(name,city);
        this.grade = grade; 
    }
}
const obj = new student("Mohd Aqib","Allahabad","A");
obj.printName();