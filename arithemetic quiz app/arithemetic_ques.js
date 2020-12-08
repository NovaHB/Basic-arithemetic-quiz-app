 //getting elements.
 var box1=document.getElementsByClassName("box one")[0];
 var box2=document.getElementsByClassName("box two")[0];
 var operator=document.getElementsByClassName("operator")[0];
 var inputted_text=document.getElementById("text");
document.getElementById("next").disabled=true;

function inputdesign(colorr){ //function to change color of the input field
 inputted_text.style.borderColor=colorr;
         inputted_text.style.color=colorr;
         inputted_text.style.outline=colorr;
}
 function submit(){
     var answer = eval(box1.textContent + operator.textContent + box2.textContent);
     console.log(inputted_text.value);
     if (inputted_text.value == answer){
         
         inputdesign("green");
         document.getElementById("next").disabled=false;
     }
     else{
         inputdesign("red");
     }
 }
  function generate(){
     inputted_text.value=""; //clears the input field
    inputdesign("black"); //makes the input border and text color to default
    document.getElementById("next").disabled=true; //disables the button

     var num1 = randomint(0,30);
     var num2 = randomint(0,30);
     box1.textContent=num1;
     box2.textContent=num2;
     var operator_list=["+", "-",];
     num1=randomint(0,1);  //generates a random number in between 0 and 1 and indent it, so  random operator can be generated
     operator.innerHTML=operator_list[num1];

  }
  //random function generates a random number between 0 and 1 and then multiplies it by  the range specified in argument and add the minimum to it to get the specific random integer in between the 2 range.
  function randomint(min,max){
     return Math.floor(Math.random() * (max-min + 1) )+min;
 }
 generate(); //calls function when the document loads