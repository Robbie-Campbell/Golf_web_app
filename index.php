<!-- Thanyou for having a look at this webapp! i hope that you  enjoy it, if you have any suggestions for improving the source code
or general quality of life, don't hesitate to get in contact with me at: robbielcampbell31@gmail.com. Thanks and enjoy! !-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Golf name randomiser</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>
<body>
    <div class="container text-center">
        <h1 class="title">Golf Game Randomizer</h1>
            <div class="insert_names">
                <input type="text" class="name_1" placeholder="Input First Name">
                <input type="text" class="name_2" placeholder="Input Second Name">
                <input type="text" class="name_3" placeholder="Input Third Name">
                <input type="text" class="name_4" placeholder="Input Final Name">
                <button class="btn btn-primary">Click to get your matchup</button>
            </div>
        <div class="results">
            <h1 class="first_pairing"></h1>
            <h1 class="second_pairing"></h1>
            <button class="retry btn btn-secondary">Do another matchup?</button>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>