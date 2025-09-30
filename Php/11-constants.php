<?php
/*
A constant is an identifier (name) for a simple value. The value cannot be changed during the script.
A valid constant name starts with a letter or underscore (no $ sign before the constant name).
Note: Unlike variables, constants are automatically global across the entire script.
*/

//constant using define keyword
define("Greeting", "Welcome to Php!");

echo Greeting."\n";

//constant using const keyword
const MYCAR = "Volvo";
echo MYCAR."\n";

const price = 400;
echo price;

/*
PHP Magic Constants

__CLASS__        - If used inside a class, the class name is returned.
__DIR__          - The directory of the file.
__FILE__         - The file name including the full path.
__FUNCTION__     - If inside a function, the function name is returned.
__LINE__         - The current line number.
__METHOD__       - If used inside a function that belongs to a class, both class and function name is returned.
__NAMESPACE__    - If used inside a namespace, the name of the namespace is returned.
__TRAIT__        - If used inside a trait, the trait name is returned.
ClassName::class - Returns the name of the specified class and the name of the namespace, if any.
*/

?>