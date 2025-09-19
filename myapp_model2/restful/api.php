<?php 
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');

    $host = 'localhost';
    $db = 'employees';
    $user = 'root';
    $pass = '';
    $dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

    try {
        $pdo = new PDO($dsn,$user,$pass);
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
        exit();    
    }

    if($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){
        exit(0);
    }

    $requestMedhod = $_SERVER['REQUEST_METHOD'];
    switch ($requestMedhod) {
        case 'GET':
            $stmt = $pdo->query("SELECT * FROM employees");
            $employees = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($employees);
            break;
        case 'POST':
            $data = json_decode(file_get_contents('php://input'));
            $stmt = $pdo->prepare("INSERT INTO employees(name, age , position)VALUES(?,?,?)");
            $stmt->execute([$data->name,$data->age,$data->position]);
            echo json_encode(['id' => $pdo->lastInsertId()]);
            break;
        case 'PUT':
            $data = json_decode(file_get_contents('php://input'));
            $stmt = $pdo->prepare("UPDATE employees SET name=?,age=?,position=? WHERE id=?");
            $stmt->execute([$data->name, $data->age, $data->position, $data->id]);
            echo json_encode(['message'=>'Employee updated']);
            break;
        case 'DELETE':
            $id = intval(basename($_SERVER['REQUEST_URI']));
            $stmt = $pdo->prepare("DELETE FROM employees WHERE id= ?");
            $stmt->execute([$id]);
            echo json_encode(['message' => 'request received']);
            break;
        case 'OPTIONS':
            header('HTTP/1.1 200 OK');
            break;
        default:
            http_response_code(405);
            echo json_encode(['error' => 'Method Not Allowed']);
            break;
    }
?>