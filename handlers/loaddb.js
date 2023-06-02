const Enmap = require("enmap");
module.exports = client => {

client.economy = new Enmap({
    name: "economy",
    dataDir: "./databased/economy"
})

/*client.points = new Enmap({
    name: "points",
    dataDir: "./databased/economy/points"
})*/

    
    
}