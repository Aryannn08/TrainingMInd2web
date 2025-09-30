<?php
//There are three main types - integer, float and number strings.
//There are also infinity and NaN

$a = 5;
$b = 5.34;
$c = "25";

var_dump($a);
var_dump($b);
var_dump($c);

//to check if a number is int, float or string in bool value
var_dump(is_int($a));
var_dump(is_float($b));
var_dump(is_string($c));

/*
PHP_INT_MAX - The largest integer supported
PHP_INT_MIN - The smallest integer supported
PHP_INT_SIZE -  The size of an integer in bytes
PHP_FLOAT_MAX - The largest representable floating point number
PHP_FLOAT_MIN - The smallest representable positive floating point number
PHP_FLOAT_DIG - The number of decimal digits that can be rounded into a float and back without precision loss
PHP_FLOAT_EPSILON - The smallest representable positive number x, so that x + 1.0 != 1.0
*/

//to check if a value is infinite or not
$x = 1.9e411;
echo (is_infinite($x) ? "true" : "false")."\n";
echo (is_finite($x) ? "true" : "false")."\n";

//to check if a variable is numeric
$x = 5985;
var_dump(is_numeric($x));
$x = "5985";
var_dump(is_numeric($x));
$x = "58.59" + 100;
var_dump(is_numeric($x));
$x = "Hello";
var_dump(is_numeric($x));

//Strings and floats to integers
//The (int), (integer), and intval() functions are often used to convert a value to an integer.
$x = 23465.768;
$int_cast = (int)$x; //float to int
echo $int_cast."\n";

$x = "23465.768";
$str_cast = (int)$x;
echo $str_cast;
?>