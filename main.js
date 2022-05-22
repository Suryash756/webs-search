function go(){
    search=document.getElementById("input_search").value;
    location.href="https://www."+search+".com";
    if(search=="https://www."+search+".com"){
        location.href=search;
    }
}