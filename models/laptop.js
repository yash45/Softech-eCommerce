class Laptop { 
    constructor (brand, HDD, RAM, price, manufactureYear){ 
        this.brand = brand
        this.HDD = HDD;       
        this.RAM = RAM;
        this.price = price;
        this.manufactureYear = manufactureYear;
        this.currentYear = new Date().getFullYear();
    }
    checkBrand(){
        if(typeof this.brand == "string"){
            return true;   
        }
        else {
            return "wrong input"
        }
    }

    laptopAge(){
        return (this.currentYear - this.manufactureYear)
    }

    adjPrice(){
        const discount = this.price * 0.3
            if(this.laptopAge() > 3){
                return discount
            }
            else{
                return this.price
            }
        }

    printableString(){
        return `Laptop Specification: \n {Name:${this.brand}\n RAM: ${this.RAM} \n HDD: ${this.HDD}\n Price: ${this.price}\n Date of Manufacture: ${this.DoM}}`
    }
}

module.exports = Laptop

//home work: 
// in the index.js----create an instance of the laptop class , a call the string method of that laptop, 
// write a test if the string method works  