alert("Know your time !");

var canvas = document.getElementById("canvas");  //making the variable with the value of the html class canvas
var ctx = canvas.getContext("2d");               // creating the context within canvas of 2 dimensional
var radius = canvas.height / 2;                 // defining the radius of the circle
ctx.translate(radius,radius);                   // translating the circle at the middle 
radius = 270;

setInterval(drawClock, 1000);                 // calling the function to draw clock

function drawClock(){

    // drawing the big circle
    ctx.arc(0, 0, radius, 0, 360);      //defining the coordinates x,y , radius , starpoint , and endpoint of the circle
    ctx.fillStyle = "white";                // filling the circle
    ctx.strokeStyle = "darkcyan";       // coloring the outer line of a circle
    ctx.lineWidth = 15;                 // defining the line width of the circle
    ctx.stroke();               // without defining the stroke function strokestyle doesn't run
    ctx.fill();                 // same as the case of stroke
    
    // drawing the middle small circle
    ctx.beginPath();                                    // creating the new path/circle 
    ctx.arc(0, 0, radius/15, 0, 360);
    ctx.fillStyle = "black";
    ctx.fill();

    //drawing the number in a clock
    ctx.font = '18px Arial';                    // applying the font size and style for clock hr number
    ctx.textBaseline = "middle";                // .textBaseling position of the text from the baseline
    ctx.textAlign = "centre";                   // .textAlign helps to arrange the positing of the text

    let num;
    
    for (num = 1; num<= 12; num++ ){            // applying for loop to the the number 

        let ang = num * Math.PI / 6;            // defining the angle to arrange numbet

        ctx.rotate(ang);                        // rotating the number in defined angle
        ctx.translate(0, -radius * 0.85);       // translating the position 
        ctx.rotate(-ang);                       // again rotating in negative angle
        ctx.fillText(num, 0,0);                 // filling the text in angle position
        ctx.rotate(ang);                        // re-rotation in defined angel
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);

        // drawing the clock hand 

        let time = new Date();                  // getting the present time
        let hour = time.getHours();             // getting the present hour
        let minute = time.getMinutes();         // getting the present minute
        let second = time.getSeconds();            // getting the present second

        // hour hand
        ctx.beginPath();
        ctx.lineWidth = 7;
        hour = hour%12;
        hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
        ctx.moveTo(0,0);
        ctx.rotate(hour)
        ctx.lineTo(0, -radius*0.4);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.rotate(-hour);
        
        
        // minute hand
        ctx.beginPath();
        ctx.lineWidth = 5;
        minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
        ctx.moveTo(0,0);
        ctx.rotate(minute);
        ctx.lineTo(0, -radius*0.6);
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.rotate(-minute);
        

        // second hand
        ctx.beginPath();
        ctx.lineWidth= 3;
        second = (second*Math.PI/30);
        ctx.moveTo(0,0);
        ctx.rotate(second);
        ctx.lineTo(0, -radius*0.8);
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.rotate(-second);
    }
 
    
}














