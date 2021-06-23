<html>
    <head>
        <title>Regular Expression</title>
        <script>
            function Validate()
            {
                var user1=document.getElementById("user").value;
                var regx=/[19]BEC\d{4}/;
                if(regx.test(user1))
                {
                    alert("Valid");
                }
                else{
                    document.getElementById("key").style.visibility="visible";
                }
            }

        </script>
        <body>
            <input id="user" placeholder="UserName" type="text">
            <label id="key" style="color: darkred; visibility: hidden;">Invalid</label> 
            <button onclick="Validate()">Submit</button>
        </body>
    </head>
</html>
