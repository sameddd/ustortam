function getPersonel(tag) {
  personel=document.getElementById("banner");
  personel.innerHTML="";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var personelJson = JSON.parse(this.responseText);
          i=0;
          personelJson.forEach(element => {
            if(personelJson[i].tag==tag){
              personel.innerHTML = personel.innerHTML+ `<div class="col-sm-4">
                                                          <div class="card" style="width: 60%;">
                                                            <img src="`+personelJson[i].image+ `" alt="Avatar" style="width:100%">
                                                            <div class="container">
                                                                <h4><b>`+personelJson[i].name+`</b></h4> 
                                                                <p>`+personelJson[i].email+`</p> 
                                                            </div>
                                                        </div>  
                                                    </div>`;  
            }
            
            i++;                                         
          });
                              
    }
  };
  xmlhttp.open("GET", "json/personel.json", true);
  xmlhttp.send();
}