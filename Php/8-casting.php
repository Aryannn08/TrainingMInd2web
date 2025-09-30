<?php

/*
Casting in PHP is done with these statements:

(string) - Converts to data type String
(int) - Converts to data type Integer
(float) - Converts to data type Float
(bool) - Converts to data type Boolean
(array) - Converts to data type Array
(object) - Converts to data type Object
(unset) - Converts to data type NULL
*/
$a = 5;
$b = 5.34;
$c = "hello";
$d = true;
$e = NULL;

//int to string
// $a = (string) $a;
// echo var_dump($a);
//float to int
$b = (int) $b;
echo var_dump($b);
//int to float
$a = (float) $a;
echo var_dump($a);
echo $a; //internally the 5 is now a float i.e. 5.00 but it will display only 5.
//int to bool - if a value is 0,NULL, false or empty it will display false , else true is displayed
$a = (bool)$a;
echo var_dump($a);

?>