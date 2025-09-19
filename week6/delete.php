<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delete</title>
    <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
    <div class="form-container">
        <h2>Delete</h2>
        <form action="./crub_form.php" method="post">
            <label for="id">ID:</label>
            <input type="text" id="id" name="id" require>
            <div class="button-group">
                <button type="submit" name="delete">Delete</button>
            </div>
        </form>
    </div>
</body>
</html>