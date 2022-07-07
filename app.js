// readline module
const readline = require('readline');
const validator = require('validator');
const { addAbortSignal } = require('stream');

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout,
});


rl.question('Nama : ', (name) => {
    console.log(`Hallo ${name}`);

    inputEmail();
});



function inputEmail(){
    rl.question('Email : ', (email) => {
        if(validator.isEmail(email)){
            console.log('Email anda benar');
            inputPhoneNumber();
        }else{
            console.log("email anda salah");
            inputEmail();
        }
    });
}

function inputPhoneNumber(){
    rl.question('Nomor Telpon : ', (phone) => {
        if(validator.isMobilePhone(phone, 'id-ID')){
            console.log('Nomor telpon anda valid');
            rl.close();
        }else{
            console.log("Nomor telpon anda salah atau tidak valid");
            inputPhoneNumber();
        }
    });
}
