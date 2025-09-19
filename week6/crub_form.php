<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Results</title>
    <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
    <div class="form-container">
    <?php 
    require_once "class_database.php";

    $db = new database("theeraphat","ji)98hFuhvjd2GPg");

    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['insert'])){
            $name = $_POST['name'];
            $password = $_POST['password'];
            $data = [
                'name' => $name,
                'password' => $password
            ];
            $db->insert($data);
        } else if (isset($_POST['update'])){
            $db->update(
                ["name" => $_POST['name']],
                ["id" => $_POST['id']]
            );
        } else if (isset($_POST['delete'])){
            $db->delete(
                ["id" => $_POST['id']]
            );
        } else {
            echo "Invalid request.";
        }
    }
    ?>
    </div>
    <div class="form-container">
        <h2>ALL USER</h2>
        <table border="1" cellspacing="0" cellpadding="5" align="center">
            <thead>
                <tr >
                    <th>ID</th>
                    <th >Name</th>
                    <th>Createdate</th>
                </tr>
            </thead>
            <tbody>
            <?php
            $users = $db->select();
            if ($users && count($users) > 0) {
                foreach($users as $user) {
                    echo '<tr>';
                    echo '<td>'.htmlspecialchars($user['id']).'</td>';
                    echo '<td>'.htmlspecialchars($user['name']).'</td>';
                    echo '<td>'.htmlspecialchars($user['createdate']).'</td>';
                    echo '</tr>';
                }
            } else {
                echo '<tr><td colspan="3"">No User</td></tr>';
            }
            ?>
            </tbody>
        </table>
    </div>
</body>
</html>
