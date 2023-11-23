console.log("Hello world 🔥");
// Initialising the speech API
const synth = window.speechSynthesis;
// what is javascript:
/*
Its a scripting / programming language
Dynamically typed
Loosly packed pl
90+% www js  ---> <ecmascript>
livescript
java ❌ javascript 
*/

/*
Compiler: 
Interpreter: 
*/ 


/*
data type
data declaration
loops
function
objects
operators
*/ 


// function : block of code which can be excecuted upon calling or invocating
flag  = true
function press(key){
        
        let text;
        if(key!='AC' && key!='=' && key!='bracket'){
                if (key == '+') {
                        document.getElementById('result').value += ' + ';
                        text = new SpeechSynthesisUtterance('plus');
                }
                else if (key == '-') {
                        document.getElementById('result').value += ' - ';
                        text = new SpeechSynthesisUtterance('minus');
                }
                else if (key == '*') {
                        document.getElementById('result').value += ' * ';
                        text = new SpeechSynthesisUtterance('multiply');
                }
                else if (key == '/') {
                        document.getElementById('result').value += ' / ';
                        text = new SpeechSynthesisUtterance('divide');
                }
                else{
                        document.getElementById('result').value += key
                text = new SpeechSynthesisUtterance(key);
                }
        }
        else if(key=='=')
        {
                document.getElementById('result').value = eval(document.getElementById('result').value)
                text = new SpeechSynthesisUtterance(eval(document.getElementById('result').value))
        }
        else if(key=='bracket')
        {
              if(flag){
                document.getElementById('result').value += "("
                flag = false
                text = new SpeechSynthesisUtterance(key)
              }else{
                document.getElementById('result').value += ")"
                flag = true
                text = new SpeechSynthesisUtterance(key);
              }  
        }
        else{
                document.getElementById('result').value = ""
                text = new SpeechSynthesisUtterance(key);
        }
        synth.speak(text);
}

// DOM : document object model
// datatypes: Number, "string", Boolean, Object, undefined, bigInt, null
var x=getElementById('number')