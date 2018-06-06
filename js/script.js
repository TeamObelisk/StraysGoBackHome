var APIURL = 'https://raw.githubusercontent.com/106-NCHU-MIS-Project/mobirise/gh-pages/Test/Test.json';

var xhr = new XMLHttpRequest();
xhr.open("GET", APIURL, true);
// xhr.setRequestHeader();
xhr.send();

xhr.onreadystatechange = function(){
  if (this.readyState === 4 && this.status === 200){
    var data = JSON.parse(this.responseText);
    console.log(data);
    // $('.ininin').text(data[0].animal_kind);
  }
}
