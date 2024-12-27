const length = document.querySelector("#length-number");
const uperr = document.querySelector("#uppercase");
const lower = document.querySelector("#lowercase");
const num = document.querySelector("#number");
const sybol = document.querySelector("#symbol");
const pass = document.querySelector("#pass-input");
const cont = document.querySelector("#copy");
const gn = document.querySelector("#generate");

const uppercasestr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercasestr = 'abcdefghijklmnopqrstuvwxyz';
const numberstr = '0123456789';
const symbolstr = '!@#$%^&*+-/?""';

gn.addEventListener('click', () =>{
 
    let str = '';

    if(uperr.checked){
        str += uppercasestr;

    }
    if(lower.checked){
         str += lowercasestr;
    }
    if(num.checked){
       
        str += numberstr;
    }
    if(sybol.checked){
       str += symbolstr;
    }
   console.log(str, "str");

   let password = '';
   for(let i=0; i < length.value; i++){
      console.log(str.length,"str.length")
      let index = Math.floor(Math.random () * str.length);
      console.log(index,"index");
      console.log("Math.random()" , Math.random())
      console.log("Math.random () * str.length",Math.random() *str.length);
      console.log(str[index]);
      password += str[index];
   }
    
   console.log(password,"password");

   pass.value = password;
   
});

cont.addEventListener('click',() =>{
    if (pass.value === ''){
        alert('Please Generate a Password First');
    }else{
        const newele = document.createElement('textarea');
        newele.value = pass.value;
        document.body.appendChild(newele);
        newele.select();
        document.execCommand('copy');
        alert('password Copied to Clipbord');
        newele.remove()
    }
    console.log()
});

