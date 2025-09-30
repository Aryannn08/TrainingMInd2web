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
echo $c."\n";

//slicing strings
echo substr($x, 6, 5)."\n"; // output - World 
//slice till end
echo substr($x, 6)."\n"; //output - World
//slice from the end
echo substr($x, -5, 3)."\n";
//negative slicing
$d = "Hi, how are you?";
echo substr($d, 5, -3)."\n";

//escape character - \",\',\n,\$ to insert illegal values in string
$e = "We are the \"Vikings\" from north";
echo $e."\n";
?>