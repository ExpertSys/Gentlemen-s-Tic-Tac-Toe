<!DOCTYPE html>
<html>
<head>
    <title>Tic Tac Toe</title>
    <script type="text/javascript" src="js/jquery-1.11.1.js"></script>
    <script type="text/javascript" src="js/jquery.js"></script>
<link rel="stylesheet" type="text/css" href="css/style.css">
<link href='https://fonts.googleapis.com/css?family=Roboto:400,300italic,300,100italic,100,400italic,500,500italic,700' rel='stylesheet' type='text/css'>
</head>
<body>
  <table id = "board">
            <tr>
                <td id = "00" onclick = "taketurn(0,0)"></td>
                <td id = "10" onclick = "taketurn(1,0)"></td>
                <td id = "20" onclick = "taketurn(2,0)"></td>
            </tr>
            <tr>
                <td id = "01" onclick = "taketurn(0,1)"></td>
                <td id = "11" onclick = "taketurn(1,1)"></td>
                <td id = "21" onclick = "taketurn(2,1)"></td>
            </tr>
            <tr>
                <td id = "02" onclick = "taketurn(0,2)"></td>
                <td id = "12" onclick = "taketurn(1,2)"></td>
                <td id = "22" onclick = "taketurn(2,2)"></td>
            </tr>
        </table>
        <div class = "retry">
        <a href = ""><button>Reset Game</button></a>
      </center>
<script type="text/javascript" src="js/index.js"></script>
</body>
</html>
