    //getting elements.
    var box1=document.getElementsByClassName("box one")[0];
    var box2=document.getElementsByClassName("box two")[0];
    var operator=document.getElementsByClassName("operator")[0];
    var inputted_text=document.getElementById("text");
    var display_stat= document.querySelector(".show_status");
    var display_stat_cont= document.querySelector(".content");
   
    

 // document.getElementById("next").disabled=true;

 //variables

 var correct = 0;
 var wrong = 0;
 var questions={};
 var counter=0;
   function inputdesign(colorr){
    inputted_text.style.borderColor=colorr;
            inputted_text.style.color=colorr;
            inputted_text.style.outline=colorr;
   }

   
    function submit(){
        var answer = eval(box1.textContent + operator.textContent + box2.textContent);
       
        if (Number(inputted_text.value) || inputted_text.value == 0){
            if (inputted_text.value == answer){
            inputdesign("green");
            correct+=1;
            document.querySelector(".correct").textContent=correct;
            generate();
            //document.getElementById("next").disabled=false;
        }
        else{
            inputdesign("red"); 
            wrong+=1;
            document.querySelector(".wrong").textContent=wrong;
            questions[wrong]=[box1.textContent +  operator.textContent + box2.textContent + " = " + answer];
            generate();
        }
        }
        else{   
            //do nothing
        }
    }
  

     function generate(){
        inputted_text.value=""; //clears the input field
       inputdesign("black"); //makes the input border and text color to default
      // document.getElementById("next").disabled=true; //disables the button
        var num1 = randomint(0,30);
        var num2 = randomint(0,30);
        box1.textContent=num1;
        box2.textContent=num2;
        var operator_list=["+", "-",];
        num_op=randomint(0,1);  //generates a random number in between 0 and 1 and indent it, so  random operator can be generated
        operator.innerHTML=operator_list[num_op];
        counter+=1;
        document.querySelector(".counterr").textContent=counter;
       
     }

     //random function generates a random number between 0 and 1 and then multiplies it by  the range specified in argument and add the minimum to it to get the specific random integer in between the 2 range.
     function randomint(min,max){
        return Math.floor(Math.random() * (max-min + 1) )+min;
    }


 var stop_timer=setInterval(settimer, 1000);
        var min=0;
        var second=0;
        var hour=0;
        var active=0;
        function settimer(){
            if (active){
                second+=1;
    if (second == 59){
         min+=1;
   if (min == 59){
        hour+=1;
        if (hour < 10){  document.querySelector(".hour").innerHTML= "0" + hour + ":";}
        else{ document.querySelector(".hour").innerHTML=hour + ":";}
        min=0;
            }
   if (min < 10){
    document.querySelector(".minute").innerHTML= "0" + min + ":";
             }
   else{
    document.querySelector(".minute").innerHTML= min + ":";
        }
    second = 0;
            }
    document.querySelector(".second").innerHTML=second;
            }
        }

        function stop(){ //the stop function when the button is clicked
  display_stat.style.display="flex"; //displays the pop up
  active = 0; //pauses the timer 
  document.querySelector(".spent").textContent=document.querySelector(".hour").textContent + document.querySelector(".minute").textContent + document.querySelector(".second").textContent //collects the current time spent and display it on the tab


  document.querySelector(".wrongg").textContent=wrong; //shows the wrong questions
  for ( var i = 0 ;i <= Object.keys(questions).length; i++){
      var new_element= document.createElement("P");
      new_element.className="display_wrong";
      new_element.textContent=questions[i];
      display_stat_cont.appendChild(new_element);
  }
  
 } 
 
 
 function close_tab(){
     //this function clears everything in other to reset the program.
    display_stat.style.display="none"; //closes the pop up
    correct = 0; //resets correct
    wrong = 0; //resets wrong
    questions={ }; // clears the object that contains the missed questions
  
  counter=0; //resets counter

  document.querySelector(".correct").textContent="";
  document.querySelector(".wrong").textContent="";
  document.querySelectorAll(".display_wrong").forEach(element => { element.innerHTML="";});; //REMOVES ALL NODE THAT DISPLAYS THE MISSED QUESTIONS WHEN THE POP UP SHOWS
  
 
  document.querySelectorAll(".time").forEach(element => { element.innerHTML="00:"}); //clears the time field

  
  document.querySelectorAll(".box").forEach(element => { element.innerHTML=""});
  //clears the time variables
second=0;
hour=0;
min=0;
active = 0; //sets the timer active to 1 so it can continue working
 }
 
 function next(){
    generate();
    active=1;
    
}

