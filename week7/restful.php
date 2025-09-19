<?php
require_once("connent.php");
require_once("user.php");
$DB = new Database();
$db = $DB->connent();
$controller = new User($db);

$method = $_SERVER["REQUEST_METHOD"];
$endpoint = $_SERVER["PATH_INFO"] ?? '/users';

switch($method){
    case 'GET' : 
        if($endpoint === "/users"){
            $controller->getAllUser();
        }else{
            $id = basename($endpoint);
            $controller->getUserID($id);
        }
        break;
    case 'POST' : 
        $data = json_decode(file_get_contents("php://input"),true);
        $controller->addUser($data);
        break;
    case 'PUT' : 
        $id = basename($endpoint);
        $data = json_decode(file_get_contents("php://input"),true);
        $controller->updateUser($id,$data);
        break;
    case 'DELETE' : 
        $id = basename($endpoint);
        $controller->deleteUser($id);
        break;
    default: echo json_encode(["message"=>"Unsupport Medtod"]);
}   
?>