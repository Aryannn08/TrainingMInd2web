<?php
$x = 5; //this is an integer
$y = "John"; //this is a string
$age = 21;

echo $x."\n";
echo $y."\n";
echo $age."\n";

/*
Rules for PHP variables:

A variable starts with the $ sign, followed by the name of the variable
A variable name must start with a letter or the underscore character
A variable name cannot start with a number
A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
Variable names are case-sensitive ($age and $AGE are two different variables)

*/ 

//global,local and static variable
$z = 20;
function myTest(){
    $a = 25; //this is local scope
    global $z; //without global keyword, $z cannot be accessed
    echo "Variable x inside function is: $z\n";
};
function myTest2(){
    $GLOBALS['z'] = $GLOBALS['z']*2;
    echo "$GLOBALS[z]\n";
};
myTest();
echo  "Variable x outside function is: $z\n";
myTest2();
?>