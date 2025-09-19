    <?php 
    require_once "class_database.php";
    $db = new database("theeraphat","ji)98hFuhvjd2GPg");
    ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
    <div class="form-container">
    
        <h2>CRUD</h2>
            <div class="button-group">
                <a href="insert.php" class="btn-link">Create</a>
                <a href="update.php" class="btn-link">Update</a>
                <a href="delete.php" class="btn-link">Delete</a>
            </div>
    </div>
    <div class="form-container">
        <h2>ALL USER</h2>
        <table border="1" cellspacing="0" cellpadding="5" align="center">
            <thead>
                <tr >
                    <th>ID</th>
                    <th>Name</th>
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