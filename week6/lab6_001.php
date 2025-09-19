<?php 
    $table = "user";
    $array = array(
        "name" => "admin",
        "password" => "1234"
    );
print_r($array);
echo "<br>";
print_r(array_keys($array));
echo "<br>";
$cols = implode(", ", array_keys($array));
$valus = implode(", ", $array);
print_r($cols);
echo "<br>";
print_r($valus);

$sql = "INSERT INTO $table ($cols) VALUES ($valus)";
echo "<br>";
echo $sql;
/*  insert into "tablename" (id,name) values (002,'mock') */
?>