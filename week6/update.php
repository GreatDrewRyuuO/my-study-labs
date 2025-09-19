<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update</title>
    <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
    <div class="form-container">
        <h2>Update</h2>
        <form action="./crub_form.php" method="post">
            <label for="id">ID:</label>
            <input type="text" id="id" name="id" require>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
            <div class="button-group">
                <button type="submit" name="update">Update</button>
            </div>
        </form>
    </div>
</body>
</html>