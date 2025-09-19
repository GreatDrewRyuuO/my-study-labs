<?php 
    class Database {
        private $dsn = "mysql:host=localhost;dbname=employee;charset=utf8";
        private $user = "theeraphat";
        private $password = "WY0_e4j*i(qfYA9[";

        public $conn;

        public function connent(){
            try {
                $this->conn = new PDO(
                    $this->dsn,
                    $this->user,
                    $this->password
                );
                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $this->conn;
            } catch (PDOException $e) {
                echo json_encode(["error"=> $e->getMessage()]);
            }
        }
    }
?>