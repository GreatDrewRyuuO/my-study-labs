<?php 
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    $medtod = $_SERVER["REQUEST_METHOD"];
    if($medtod == "GET"){
        $json = file_get_contents('Film.JSON');
        echo $json;
    }
?>