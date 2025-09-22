    function displayEven(){
        let output = "";
        for(i=1; i<=100; i++){
            if(i%2 === 0){
                output += i + " ";
            }
        }
        document.getElementById("result").innerHTML= output;
        console.log(output);
    }

    function displayPattern(){
        let output2 = "";
        for(let i=1;i<=5;i++){
            output2 += "*".repeat(i) + "<br>"; //read again this logic
        }
        document.getElementById("result2").innerHTML = output2;
    }
    
    function displayGrades(){
        const marks = parseInt(document.getElementById("grades").value);
        if(marks > 90){
          document.getElementById("result3").innerHTML = "The student has scored A grade.";
        }
        else if(marks > 80){
          document.getElementById("result3").innerHTML = "The student has scored B grade.";
        }
        else if(marks > 60){
          document.getElementById("result3").innerHTML = "The student has scored C grade.";
        }
        else if(marks > 50){
          document.getElementById("result3").innerHTML = "The student has scored C grade.";
        }
        else {
          document.getElementById("result3").innerHTML = "The student has failed in the exam";
        }
    }