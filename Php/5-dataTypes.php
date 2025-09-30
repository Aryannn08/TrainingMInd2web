<?php
$x = "Hello World";
$b = "Again";
$z = 25;
var_dump($x); //this will check the data type of the variable created
var_dump($z);
echo strtoupper($x)."\n"; //to convert a string to uppercase
echo strtolower($x)."\n"; //to convert a string to lowercase
echo str_replace("World", "Everyone",$x)."\n"; //to replace something in a string
echo strrev($x)."\n"; //this will print the reverse of the string
echo trim($x)."\n"; //this will remove the whitespaces

$a = explode(" ",$x);
print_r($a);

$y = str_split(str_replace(" ","",$x));
print_r($y);

//string concatenation
$c = $x . " " . $b; // "$x $y" will work same
echo $c;
?>