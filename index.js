console.log('index js');

let screen=document.getElementById('screen');
buttons = document.querySelectorAll('button');
// buttons=document.getElementsByTagName('button');
let screenValue = "";
console.log(buttons)

for (item of buttons) {
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('Button Text is ',buttonText);
        if(buttonText == 'X') {
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText == 'C'){
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText == '='){
            screen.value=eval(screenValue);
        }
        else{
            screenValue +=buttonText;
            screen.value=screenValue;
        }
    })
}