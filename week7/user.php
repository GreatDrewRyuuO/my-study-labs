<?php 
    class User{
        private $conn;

        public function __construct($conn){
            $this->conn = $conn;
        }

        public function respond($status,$data){
            http_response_code($status);
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
            exit;
        }

        public function getAllUser(){
            $stmt = $this->conn->query("SELECT * FROM user ORDER BY id asc");
            $users = $stmt->fetchALL(PDO::FETCH_ASSOC);
            $this->respond(200,$users);
        }

        public function getUserID($id){
            $stmt = $this->conn->prepare("SELECT * FROM user WHERE id =:id");
            $stmt->bindParam(":id",$id);
            $stmt->execute();
            if ($stmt->rowCount() === 0) {
                $this-> respond(404, ["message"=> "User not Found"]);
            }
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            $this->respond(200,$user);
        }

        public function addUser($data){
            if (empty($data["name"]) || empty($data["password"])) {
                $this->respond(400, ["message" => "missing name or password"]);
            }

            if (!empty($data["id"])) {
                $stmt = $this->conn->prepare("INSERT INTO user(id, name, password) VALUES(:id, :name, :password)");
                $stmt->bindParam(":id", $data["id"]);
            } else {
                $stmt = $this->conn->prepare("INSERT INTO user(name, password) VALUES(:name, :password)");
            }
            $stmt->bindParam(":name", $data["name"]);
            $stmt->bindParam(":password", $data["password"]);

            if ($stmt->execute()) {
                $id = !empty($data["id"]) ? $data["id"] : $this->conn->lastInsertId();
                $user = [
                    "id" => $id,
                    "name" => $data["name"],
                    "password" => $data["password"]
                ];
                $this->respond(201, $user);
            } else {
                $this->respond(500, ["message" => "Create Failed Please Try Again"]);
            }
        }

        public function updateUser($id,$data){
            if (empty($data["name"]) || empty($data["password"])) {
                $this->respond(400,["message"=>"missing name or password"]);
                
            }
            $stmt = $this->conn->prepare(
                "UPDATE user SET name=:name, password=:password WHERE id=:id"
            );
            $stmt->bindParam(":id",$id);
            $stmt->bindParam(":name",$data["name"]);
            $stmt->bindParam(":password",$data["password"]);

            if($stmt->execute()){
                $this->getUserID($id);
            }else{
                $this->respond(500, ["message"=>"Failed to Update Please Try Again."]);
            }
        }

        public function deleteUser($id){
            $stmt = $this->conn->prepare(
                "DELETE FROM user WHERE id=:id"
            );
            $stmt->bindParam(":id",$id);
            if ($stmt->execute()) {
                $this->respond(200,["message"=>"Sucessfuly to Delete."]);
            }else{
                $this->respond(500,["message"=>"Failed to Delete Please Try Again."]);
            }
        }
    }
?>