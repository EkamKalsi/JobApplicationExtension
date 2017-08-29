function openAddInfo(){
    chrome.tabs.create({'url': chrome.extension.getURL('UserInfoForm.html'), 'selected': true})
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addInfo').addEventListener("click",openAddInfo);
});