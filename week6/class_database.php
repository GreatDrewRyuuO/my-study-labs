<?php 
    class database {
        private $pdo = null;
        private $dbname = 'customer';
        private $table = 'user';
        private $username;
        private $password;
        public function __construct($username , $password) {
            $this->username = $username;
            $this->password = $password;
            $dsn = "mysql:host=localhost; dbname=$this->dbname; charset=utf8";
            try {
                $this->pdo = new PDO($dsn, $this->username, $this->password);
                $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                // echo "Connected to the database successfully.<br>";
            } catch (PDOException $e) {
                die("Failed to connect to the database :".$e->getMessage());
            }
        }
        /** INSERT INTO {tablename} ($cols) VALUES ($vales) */
        public function insert($array){
            $cols = implode(", " , array_keys($array));
            $placesholders = ":" . implode(",:",array_keys($array));
            $sql = "INSERT INTO {$this->table} ($cols) VALUES ($placesholders)";

            echo "$sql<br>";

            $stmt = $this->pdo->prepare($sql);
            try {$stmt->execute($array);
                echo "Insert to the database successfully.<br>";
            } catch (PDOException $e) {
                echo "Failed to Insert to the database :".$e->getMessage(). "<br>";
            }
        }
        /** UPDATE {tablename} SET name = :name, password=:password WHERE id=:id and name=:name*/
        public function update($data , $where) {
            $setPart = "";
            foreach ($data as $key => $value){
                $setPart .= "$key = :$key, ";
            }
            $setPart = rtrim($setPart, ", ");

            $wherePart = "";
            foreach ($where as $key => $value){
                $wherePart .= "$key = :where_$key AND ";
            }
            $wherePart = rtrim($wherePart, " AND ");

            $sql = "UPDATE {$this->table} SET $setPart WHERE $wherePart";
            $stmt = $this->pdo->prepare($sql);

            $params = $data;
            foreach ($where as $key => $value) {
                $params["where_$key"] = $value;
            }

            try {
                $stmt->execute($params);
                echo "Update to the database successfully.<br>";
            } catch (PDOException $e) {
                echo "Failed to Update to the database :".$e->getMessage(). "<br>";
            }

        }
            /** DELETE FROM {tablename} WHERE id=:id */
        public function delete($where) {
            $wherePart = "";

            foreach ($where as $key => $value){
                $wherePart .= "$key=:$key AND ";
            }
            $wherePart = rtrim($wherePart, "AND ");

            $sql = "DELETE FROM {$this->table} WHERE {$wherePart}";
            $stmt = $this->pdo->prepare($sql);

            try {
                $stmt->execute($where);
                echo "Delete to the database successfully.<br>";
            } catch (PDOException $e) {
                echo "Failed to Delete to the database :".$e->getMessage(). "<br>";
            }
        }
         public function select($where = []) {
                $sql = "SELECT * FROM {$this->table}";
                $params = [];
                if (!empty($where)){
                    $wherePart = "";
                    foreach($where as $key => $value){
                        $wherePart.="$key = :$key AND ";

                    }
                    $wherePart = rtrim($wherePart, " AND ");
                    $sql .= "WHERE $wherePart";
                    $params = $where;
                }

                // echo "$sql<br>";
                $stmt = $this->pdo->prepare($sql);
                try {
                    $stmt->execute($params);
                    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    // echo "Select from the database successfully.<br>";
                    return $results;
                } catch (PDOException $e) {
                    echo "Failed to Select from the database :".$e->getMessage(). "<br>";
                    return [];
                }

            }   
        
    }
    
    // $db = new database();
    // $data = array(
    //     "name" => "theeraphats",
    //     "password" => "1234"
    // );
    // $db->insert($data);
    // $db->update(
    //     ["name" => "update_name", "password" => "12345678"], 
    //     ["id" => "002"]
    // );
    // $db->delete(
    //     ["id" => "002"]
    // );
    // print_r($db->select());
    
?>