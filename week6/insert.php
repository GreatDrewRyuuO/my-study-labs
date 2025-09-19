<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insert</title>
    <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
    <div class="form-container">
        <h2>Insert</h2>
        <form action="./crub_form.php" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" require>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" require>
            <div class="button-group">
                <button type="submit" name="insert">Create</button>
            </div>
        </form>
    </div>
</body>
</html>