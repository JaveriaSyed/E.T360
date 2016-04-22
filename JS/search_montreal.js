    function checkRegion() {
    "use strict";
    var arrNames =  ["montreal west",  "montreal", "montreal east"],
        arrInfos =  [" Montreal West (French: Montréal-Ouest) is an on-island suburb in southwestern Quebec, Canada on the Island of Montreal.Montreal West is a small, close-knit community made up primarily of single-family dwellings. The town is largely composed of young families, and has a population of 5,184, as of the 2006 census. The town's area is 1.6 km². About 66% of the population of Montreal West speak English as their first language.", "Montreal: Historically the commercial capital of Canada, it was surpassed in population and economic strength by Toronto in the 1970s. It remains an important centre of commerce, aerospace, finance, pharmaceuticals, technology, design, education, culture, tourism, gaming, film and world affairs.[28] Along with Washington D.C and New York City, Montreal is one of the three North American cities home to organizations of the United Nations,[29] being the location for the headquarters of the International Civil Aviation Organization. Montreal has the second-highest number of consulates in North America.[29] Montreal was also named a UNESCO City of Design.[30][31] In 2009, Montreal was named North America's leading host city for international association events, according to the 2009 preliminary rankings of the International Congress and Convention Association (ICCA).[32] The 2016 edition of QS Best Student Cities ranked Montreal the 7th-best city in the world to be a university student.[33] In August 2015, the Economist Intelligence Unit's Global Liveability Ranking placed Montreal 14th out of 140 cities.[34]",
                "Montreal East (in French: Montréal-Est), is an on-island suburb in southwestern Quebec, Canada on the island of Montreal, formerly part of the borough of Rivière-des-Prairies–Pointe-aux-Trembles–Montréal-Est. Montreal-Est has consistently been home to many large oil refineries since 1915."],
        arrImgs = ["./IMAGES/MontrealWest.jpg", "./IMAGES/Montreal_Canada.jpg", "./IMAGES/BIODOME.jpg"],
        result,
        nRegion,
        imgRegion,
        index = -1,
        i = 0;
    nRegion = document.getElementById("RName").value.toLowerCase();
    for (var i = 0; i < 3; i++)
              {
                if (arrNames[i] == nRegion)
                {
                  index = i;
                  result = "Region: "+arrNames[index].toUpperCase()+
                           " General Info: "+arrInfos[index];
                  imgRegion = "A Quick Look"+arrImgs[index];		  
                }
              }
	  if (index == -1)
	  {
		result = "Region does not Exist! Select one on the Island";
		imgRegion = "./IMAGES/Montreal_Canada.jpg";
	  }  

	  switch (nRegion){
	    case "montreal west" :
			result = "Region: "+arrNames[0].toUpperCase()+
			         " General Info: "+ arrInfos[0];
			imgRegion = "./IMAGES/MontrealWest.jpg";
            break;					 
		case "montreal" :
			result = "Region: "+ arrNames[1].toUpperCase()+
			         " General Info:  "+ arrInfos[1];
			imgRegion = "./IMAGES/Montreal_Canada.jpg";
            break;	
        case "montreal east" :
			result = "Region: "+ arrNames[2].toUpperCase()+
			         " General Info:  "+ arrInfos[2];
			imgRegion = "./IMAGES/BIODOME.jpg";
            break;	
		
		default :
			result = "Region does not exist within Montreal";
			imgRegion = "./IMAGES/Montreal_Canada.jpg";
			break;					 
		}
        document.getElementById("Res").innerHTML = result;
		document.getElementById("Rimg").src = imgRegion;	  
	}
function setRegion(Result)
	{
        "use strict";
        document.getElementById("RName").value = Result;
        checkRegion();
	}
      
     