const laptop = require("./models/laptop")

const laptop1 = new laptop("HP", 15.6 , 8, 2500 ,2000)

console.log(laptop1.printableString())

module.exports = laptop1