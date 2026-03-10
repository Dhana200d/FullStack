<!DOCTYPE html>
<html>
<head>
    <title>Ice Cream Shop</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #fff0f5;
        }

        h1 {
            color: #d63384;
        }

        .box {
            margin-top: 20px;
            padding: 20px;
            border: 2px solid #ff69b4;
            width: 300px;
            margin-left: auto;
            margin-right: auto;
            border-radius: 10px;
            background-color: white;
        }

        button {
            margin: 8px;
            padding: 8px 15px;
            border: none;
            background-color: #ff69b4;
            color: white;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #d63384;
        }

        #offer {
            display: none;
            color: green;
            font-weight: bold;
            margin-top: 10px;
        }
    </style>
</head>
<body>

    <h1 id="title">Welcome to Ice Cream World 🍦</h1>

    <div class="box">
        <p id="flavor">Flavor: Vanilla</p>

        <button onclick="changeFlavor()">Change Flavor</button>
        <button onclick="changeStyle()">Change Background</button>
        <button onclick="toggleOffer()">Show/Hide Offer</button>

        <p id="offer">🎉 Special Offer: Buy 1 Get 1 Free!</p>
    </div>

    <script>
        // Change text content
        function changeFlavor() {
            document.getElementById("flavor").innerHTML = "Flavor: Chocolate 🍫";
        }

        // Change style using DOM
        function changeStyle() {
            document.body.style.backgroundColor = "#e0ffff";
            document.getElementById("title").style.color = "#0077b6";
        }

        // Show / Hide element
        function toggleOffer() {
            var offerText = document.getElementById("offer");

            if (offerText.style.display === "none") {
                offerText.style.display = "block";
            } else {
                offerText.style.display = "none";
            }
        }
    </script>

</body>
</html>
