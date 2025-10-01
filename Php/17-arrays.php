<?php

/*
In PHP, there are three types of arrays:

Indexed arrays - Arrays with a numeric index
Associative arrays - Arrays with named keys
Multidimensional arrays - Arrays containing one or more arrays
*/

$cars = array("Volvo", 5, "Toyota");
echo count($cars),"\n"; //this will print the number of elements inside the array
echo $cars[0]."\n"; //this will print the element at 0th index

// $cars[1] = "Hyundai";
var_dump($cars);

$x = 5;
var_dump($x);
?>