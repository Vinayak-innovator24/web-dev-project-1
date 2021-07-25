let libExport1 = require("./helpObj");
let organizeObj = require("./organizeObj");
let helpObj = require("./helpObj");
let treeObj = require("./treeObj");
let inputArr = process.argv.slice(2);
let command = inputArr[0];

switch(command){
    case "tree":
        treeObj.treefxn(inputArr[1]);
        break;

    case "organize":
        organizeObj.organizefxn(inputArr[1]);
        break;

    case "help":
        helpObj.helpfxn();
        break;
}

// console.log("tree command executed with path");
// console.log(libExport1.varname);
// console.log(libExport1.fxn());

// console.log("help command executed with path");
// console.log(libExport2.varname);
// console.log(libExport2.fxn());

// console.log("organize command executed with path");
// console.log(libExport3.varname);
// console.log(libExport3.fxn());