<?php

//while loop
$i = 1;
while($i <6){
    echo $i."\n";
    $i++;
}
echo PHP_EOL;

//do while loop
$j = 1;
do {
    echo $j."\n";
    $j++;
} while ($j < 6);
echo PHP_EOL;

//for loop
for($k=0; $k<5; $k++){
    echo $k."\n";
}
echo PHP_EOL;

//forEach in array
$colors = array("red", "green", "blue", "yellow");
foreach ($colors as $x){
    echo "$x"."\n";
}

//break in for loop
for($a=0; $a<10; $a++){
    if($a == 4){
        break;
    }
    echo "The number is: $a"."\n";
}

//break in while loop
$b = 1;
while ($b<10){
    if ($b == 4) {
        break;
    }
    echo "The number is: $b"."\n";
    $b++;
}
?>