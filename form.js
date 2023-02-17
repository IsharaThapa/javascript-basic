<html>
    <head>
        <title>
            Input box
        </title>
    </head>
    <body>
            <input type ="text" name="name" id="name"/>
            <button type="submit" onsubmit ="increaseSize()">Submit</button>
      
        <h2 id ="font-size"></h2>
        <script>
            function increaseSize(){
                var a = document.getElementById("name").value;
                document.getElementById("font-size").innerHTML = a;
            } 
        </script>
    </body>
</html>