var Array1 =  ["North America", 
               "Central America", 
               "South America"]; 


var Array2 =  [" North America was reached by its first human populations during the last glacial period, via crossing the Bering land bridge. The so-called Paleo-Indian period is taken to have lasted until about 10,000 years ago (the beginning of the Archaic or Meso-Indian period). The Classic stage spans roughly the 6th to 13th centuries. The Pre-Columbian era ended with the arrival of European settlers during the Age of Discovery and the Early Modern period. Present-day cultural and ethnic patterns reflect different kind of interactions between European colonists, indigenous peoples, African slaves and their descendants. European influences are strongest in the northern parts of the continent while indigenous and African influences are relatively stronger in the south. Because of the history of colonialism, most North Americans speak English, Spanish or French and societies and states commonly reflect Western traditions.",
               
"Central America was inhabited by the indigenous peoples of Mesoamerica to the north and west and the Isthmo-Colombian peoples to the south and east. Soon after Christopher Columbus's voyages to the Americas, the Spanish began to colonize the Americas. From 1609 until 1821, most of the territory within Central America—except for the lands that would become Belize and Panama—was governed as the Captaincy General of Guatemala. After achieving independence from Spain in 1821, the former Captaincy General was annexed to the First Mexican Empire, but soon seceded from Mexico to form the Federal Republic of Central America, which lasted from 1823 to 1838. The seven states finally became independent autonomous nations, beginning with Nicaragua, Honduras, Costa Rica, and Guatemala (1838), followed by El Salvador (1841), then Panama (1903), and finally Belize (1981).",
               
"Most of the population lives near the continent's western or eastern coasts while the interior and the far south are sparsely populated. The geography of western South America is dominated by the Andes mountains; in contrast, the eastern part contains both highland regions and large lowlands where rivers such as the Amazon, Orinoco, and Paraná flow. Most of the continent lies in the tropics.", 


var Array3 = [".", 
              "./images/viet/T2hn_2.jpg",
              "./images/viet/t3pq_2.jpg",
              "./images/Col/Regions/SanAndresRegion.jpg"];






function findCity() {
    var indexPosition = -1;
    var cityName = document.getElementById("city").value.toLowerCase();

    switch (cityName) 
    {
        case "North America":
            {
                indexPosition = 0; 
            }
            break;
            
        case "Central America";
            {
                indexPosition = 1;
            }
            break;
                   
        case "South America": 
            {
                indexPosition = 2; 
            }
            break;  
    }
    
    
    if (indexPosition == -1)
    {


        alert(document.getElementById("city").value + " is not within the montreal region.");
    }
    else
    {
        
        document.getElementById("id2").innerHTML=Array2[indexPosition];
        document.getElementById("tempImg").src=Array3[indexPosition];
        document.getElementById("cityName").innerHTML=Array1[indexPosition];
        
         window.scrollTo(0, 700);
    }   
}


function showRegion(region)
{
    var index = 0;
    
    switch(region)
        {
            case "SanAndres":
                {
                            
                    index = 3;   
                }
                break;
        case "caribbean coast":
                {
                            
                    index = 4;
 
                }
                break;
                
        case "pacific coast":
                {
                            
                    index = 5;


                }
                break;
        }
    
                    document.getElementById("cityName").innerHTML=Array1[index];  
                    document.getElementById("id2").innerHTML=Array2[index];
                    document.getElementById("tempImg").src=Array3[index];
                
    window.scrollTo(0, 700);

}/*
