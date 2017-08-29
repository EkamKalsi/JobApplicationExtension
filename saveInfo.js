function retrieveInfo()
{
    chrome.storage.local.get(["info"], function(result){
        alert(JSON.stringify(result));
    })
}

function saveInfo() {
    alert("here");
    var elements = document.getElementById("infoForm").elements;
    var info = {};
    for (var i = 0, element; element = elements[i++];) {
        if (element.type === "text")
        {
            info[element.name] = element.value;
        }    
    }
    alert(JSON.stringify(info));
    // Save it using the Chrome extension storage API.
    chrome.storage.local.set({"info": info}, function() {
      // Notify that we saved.
      alert("Information Saved");
    });
    alert("here2");
    retrieveInfo();
  }


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitUserInfo').addEventListener("click",saveInfo);
});