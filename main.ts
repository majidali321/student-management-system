#! /usr/bin/env node
import inquirer from "inquirer";

// "Math.Floor " is used to eliminate the points values
const RandomNumber : number= Math.floor(10000 + Math.random() * 9999)
let mybalance = 0;

let answer = await  inquirer.prompt([
    {
        name:"student",
        type:"input",
        message:"ENter student name",
        validate:function(value){
            if (value.trim() !== ""){
                return true;
            }
            return "please enter valid value.";
        },
    },
    {
        name:"courses",
        type:"list",
        message:"select course for you",
        choices:["MS Office","JavaScript","TypeScript","Python"]
    }
]);
let tutionfee :{[key:string]:number} = {
    "MS Office":2000,
    "JavaScript":4000,
    "TypeScript":6000,
    "Python":8000,
};
console.log(`\n\t tution fees ${tutionfee[answer.courses]}`)
console.log(`\n\tbalance:${mybalance}\n`)

let paymentType = await inquirer.prompt([
    {
        name:"payment",
        type:"list",
        message:"Select payment source to pay fee course",
        choices:["jazzcash","easypaisa",'bank account']
    },
    {
        name:'amount',
        type:"input",
        message:"transfer money",
        validate:function(value){
            if (value.trim()!==""){
                return true;

            }
            return "please enter non-empty value.";
        },
    }
])
console.log(`\nyou select payment method  ${paymentType.payment}`)

const tutionfees = tutionfee[answer.courses];
// "parseFloat" function is used for convert string into number
const paymentAmount = parseFloat(paymentType.amount);
if (tutionfees === paymentAmount ){
    console.log(`congratulations you have successfully enrolled in ${answer.courses}.\n`)
}
 let ans = await inquirer.prompt([
     {
         name:"selecT",
          type:"list",
         message:"what would you like to view",
         choices:["VIew Status","Exit"]
     }
 ]);
    if (ans.selecT === "VIew Status"){
     console.log('******your status******');
     console.log(`Student Name : ${answer.student}`);
     console.log(`Student ID: ${RandomNumber}`);
     console.log(`Course : ${answer.courses}`);
     console.log((`TUtion Fees Paid :${paymentAmount}`));
     console.log(`Balance:${mybalance =+ paymentAmount}`);
    }
    else{
     console.log("\nexiting Student managemnt system")

    }//else{
    //console.log('Sorry for insuficient balance')
// }