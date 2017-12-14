function getDersler(lisansTip,donem,yil) {
    dersler=document.getElementById("banner");
    dersler.innerHTML="";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var derslerJson = JSON.parse(this.responseText);
            i=0;
            derslerJson.forEach(element => {
              if(derslerJson[i].lisansTip==lisansTip && 
                derslerJson[i].donem==donem && 
                derslerJson[i].yil==yil){
                dersler.innerHTML = dersler.innerHTML+
                `
                    <div class="wrapper">
                        <div class="card">
                            <div class="container">
                                <h4><b>`+derslerJson[i].name+`</b></h4> 
                                <p>`+derslerJson[i].lisansTip+`</p> 
                                <p>`+derslerJson[i].donem+`</p> 
                                <p>`+derslerJson[i].yil+`</p>
                            </div>
                        </div>  
                    </div>
                ` 
              }
              
              i++;                                         
            });
            if(dersler.innerHTML=="")
            dersler.innerHTML= `<h2>Bu döneme ait ders bulunmamaktadır.</h2>`;                     
      }
    };
    
    xmlhttp.open("GET", "json/egitim.json", true);
    xmlhttp.send();
  }