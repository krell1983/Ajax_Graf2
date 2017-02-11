<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html;charset=UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" type="text/css" href="CSS/style.min.css" />
        <title>AJAX</title>
    </head>
    <body>      
        <div class="WebPage">
            <h1>Ajax Graf</h1>
            <div class="Graf_Box"> 
                <div class="Graf_Box_Grafs"> 
                    <?php
                    for ($x = 1; $x <= 18; $x++) {
                        echo "<div class='Graf NR$x'></div>";
                    }
                    ?>
                </div> 
                <div class="Graf_BoxBack_Ground_Box">  
                    <?php
                    for ($nr = 100; $nr > 0; $nr = $nr - 10) {
                        echo "<div class='ROW'><div class='Graf_Text'>$nr</div></div>";
                    }
                    ?>
                </div>         
            </div> 
            <div class="connection">Connection to server status: 
                <div class="status"></div>
            </div>  
        </div>        
    </body>
    <script src="JS/jquery-2.2.3.min.js"></script>
    <script src="JS/AJAX.min.js"></script>
</html>
