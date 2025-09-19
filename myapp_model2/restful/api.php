<?php 
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');

    $host = 'localhost';
    $db = 'employees';
    $user = 'root';
    $pass = '';
    $dsn = "mysql:host=$host;dbname=$db;"

    $requestMedhod = $_SERVER['REQUEST_METHOD'];
    switch ($requestMedhod) {
        case 'GET':
            $stmt = $pdo->query("SELECT * FROM employees");
            $employees = $stmt->fetchAll(PDO::FETCH_ASSOC)
            echo json_encode(['message' => 'GET request received']);
            break;
        case 'POST':
            $data = json_decode(file_get_contents('php://input'), true);
            echo json_encode(['message' => 'POST request received', 'data' => $data]);
            break;
        case 'PUT':
            $data = json_decode(file_get_contents('php://input'), true);
            echo json_encode(['message' => 'PUT request received', 'data' => $data]);
            break;
        case 'DELETE':
            echo json_encode(['message' => 'DELETE request received']);
            break;
        case 'OPTIONS':
            header('HTTP/1.1 200 OK');
            break;
        default:
            header('HTTP/1.1 405 Method Not Allowed');
            echo json_encode(['error' => 'Method Not Allowed']);
            break;
    }
?>