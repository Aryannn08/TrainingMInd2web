<?php

//creating a function
function myMessage() {
    echo "Hello and Welcome";
}
myMessage(); //calling a function
echo PHP_EOL;

//function with argument
function displayName($fname){
    echo "$fname is at Mind2Web"."\n";
}
displayName("Aryan");
?>