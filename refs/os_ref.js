const os = require('os')

//  Платформа
console.log(os.platform());

//Архитектура
console.log(os.arch());

// info
console.log(os.cpus());

// free memory in leptop
console.log(os.freemem());

//all memory in leptop
console.log(os.totalmem());

//корневая папка на пк
console.log(os.homedir());

// сколько система работает
console.log(os.uptime());