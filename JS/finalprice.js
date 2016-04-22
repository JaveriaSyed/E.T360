//selection of card
$('.card').on('click', function(e) {
  e.preventDefault();
  $('.card').removeClass('active');
  $(this).addClass('active');
  $('.form').stop().slideUp();
  $('.form').delay(300).slideDown();
});

function typeTour(tempTourName, tempPrice){
 tourName = tempTourName;
 price = tempPrice;
    
       
    setCookie('tempTour',tourName,2);
    setCookie('tempPrice',price,2);
    //alert(tourName+'\n'+price);
  
    
    window.location="./payment.html";
   
    readTour();
     
 
   // document.cookie="username=John Doe; expires=Thu, 18 Dec 2016 12:00:00 UTC";
}


function readTour()
{
  //var w =  tourName;  
    var w = 'Package: '+ getCookie('tempTour') + ', ' +'Price before Taxes: '+ getCookie('tempPrice'); 
    
    //window.location="./payment.html";
    
    document.getElementById("tourDetail").value = w;

}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}


function calculate(){
    var w;
    w = document.getElementById("tname").value;
    alert(w);
    
}
    
function cache(){
	    $(document).ready(function(){
            $("p").hide();
        });
 	}
	//Function to calculate the number of bills
function calculate(){
      var tot=0, res=0, s100=0, s50=0, s20=0, s10=0, s5=0, s2=0, s1=0, s25=0, s05=0, s010=0;
	  tot = parseFloat(document.getElementById("total").value);
		//for 100
        if (parseInt(tot/100) > 0)
		   { s100 =  parseInt(tot/100);
		     res = tot - (s100 * 100);
			$(document).ready(function(){
              $("#100d").show();
            });
			document.getElementById("100t").innerHTML = s100;
			document.getElementById("100i").src = "./IMAGES/MONEY/100$.jpg";
		     alert("100 : " + s100 + " res : " + res);
		   }
		else
		   {res = tot;
			$(document).ready(function(){
              $("#100d").hide();
            });
		   }
		 //for 50  
		if (parseInt(res/50) > 0)
		   { s50 =  parseInt(res/50);
		     res = res - (s50 * 50);
			$(document).ready(function(){
              $("#50d").show();
            });
			document.getElementById("50t").innerHTML = s50;
			document.getElementById("50i").src = "./IMAGES/MONEY/50$.jpg";
		     alert("50 : " + s50 + " res : " + res);
		   }   
		else
		   {res = res;
			$(document).ready(function(){
              $("#50d").hide();
            });
		   } 
        //for 20
        if (parseInt(res/20) > 0)
		   { s20 =  parseInt(res/20);
		     res = res - (s20 * 20);
			$(document).ready(function(){
              $("#20d").show();
            });
			document.getElementById("20t").innerHTML = s20;
			document.getElementById("20i").src = "./IMAGES/MONEY/20$.jpg";
            alert("20 : " + s20 + " res : " + res);
		   
		   }   
		else
		   {res = res;
			$(document).ready(function(){
              $("#20d").hide();
            });
		   }
		 //for 10
		 if (parseInt(res/10) > 0)
		   { s10 =  parseInt(res/10);
		     res = res - (s10 * 10);
			$(document).ready(function(){
              $("#10d").show();
            });
			document.getElementById("10t").innerHTML = s10;
			document.getElementById("10i").src = "./IMAGES/MONEY/10$.jpg";
		    alert("10 : " + s10 + " res : " + res);
		   }   
		else
		   {res = res;
			$(document).ready(function(){
              $("#10d").hide();
            });
		   }
        
        //for 5
         if (parseInt(res/5) > 0)
		   { s5 =  parseInt(res/5);
		     res = res - (s5 * 5);
			$(document).ready(function(){
              $("#5d").show();
            });
			document.getElementById("5t").innerHTML = s5;
			document.getElementById("5i").src = "./IMAGES/MONEY/5$.jpg";
		    alert("5 : " + s5 + " res : " + res);
		   }   
		else
		   {res = res;
			$(document).ready(function(){
              $("#5d").hide();
            });
		   }
            //for 2
         if (parseInt(res/2) > 0)
		   { s2 =  parseInt(res/2);
		     res = res - (s2 * 2);
			$(document).ready(function(){
              $("#2d").show();
            });
			document.getElementById("2t").innerHTML = s2;
			document.getElementById("2i").src = "./IMAGES/MONEY/2$.jpg";
		   }   
		else
		   {res = res;
			$(document).ready(function(){
              $("#2d").hide();
            });
		   }
    
             //for 1
         if (parseInt(res/1) > 0)
		   { s1 =  parseInt(res/1);
		     res = res - (s1 * 1);
			$(document).ready(function(){
              $("#1d").show();
            });
			document.getElementById("1t").innerHTML = s1;
			document.getElementById("1i").src = "./IMAGES/MONEY/1$.jpg";
		   }   
		else
		   {res = res;
			$(document).ready(function(){
              $("#1d").hide();
            });
		   }
        
             //for 25 cents
         if (parseInt(res/0.25) > 0.00)
		   { s25 =  parseInt(res/0.25);
		     res = res - (s25 * 1);
			$(document).ready(function(){
              $("#0.25d").show();
            });
			document.getElementById("0.25t").innerHTML = s1;
			document.getElementById("0.25i").src = "./IMAGES/MONEY/25cents.jpg";
		   }   
		else
		   {res = res;
			$(document).ready(function(){
              $("#0.25d").hide();
            });
		   }
    
           //for 10 cents
         if (parseInt(res/010) > 0)
		   { s010 =  parseInt(res/010);
		     res = res - (s010 * 1);
			$(document).ready(function(){
              $("#010d").show();
            });
			document.getElementById("010t").innerHTML = s1;
			document.getElementById("010").src = "./IMAGES/MONEY/10cents.jpg";
		   }   
		else
		   {res = res;
			$(document).ready(function(){
              $("#010").hide();
            });
		   }
    
          //for 5 cents
         if (parseInt(res/05) > 0)
		   { s05 =  parseInt(res/05);
		     res = res - (s05 * 1);
			$(document).ready(function(){
              $("#05d").show();
            });
			document.getElementById("05t").innerHTML = s1;
			document.getElementById("05").src = "./IMAGES/MONEY/5cents.jpg";
		   }   
		else
		   {res = res;
			$(document).ready(function(){
              $("#05").hide();
            });
		   }
        }

function showsummay()
{

	alert('\n\n'+'Your registration has already made!'+'\n\n\n'+'Confirmation of your transaction'+'\n'+'Client name: '+ getCookie('clientName')+'\n'+'E-mail: '+ getCookie('clientMail')+'\n'+'Type of transaction: '+ getCookie('typeTransaction')+'\n\n'+'Tour name: '+getCookie('tempTour')+'\n'+'Total Price: '+ price + '\n\n' +'Thank you for buying one of our tours');
	
	
}
    