const laptopTest = require("../index");

test("checking if our string message of the instance is being passed", ()=>{
    expect(laptopTest.printableString()).toBeDefined();
})

test("the string message of the name property",()=>{
    expect(laptopTest.checkBrand("yash")).toBe(true);
    
});
test("getting the age of the laptop",()=>{
    expect(laptopTest.laptopAge()).toEqual(20)
})

test("getting the adjusted price", ()=>{
    expect(laptopTest.adjPrice()).toBe(750)
})