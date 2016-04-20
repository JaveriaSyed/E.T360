function loginmenu()
{
	var user=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	if ((user == "admin") && (password=="1234"))
	{
		window.location="./mainPage.html";
        
    }
	else
	{			
        alert("Wrong username or password."+'\n'+ "Please try again.");
    }
}

