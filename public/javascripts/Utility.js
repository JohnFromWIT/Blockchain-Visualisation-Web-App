//------Utility - Useful Functions-------

function timeString(Time)
{
    return Time.getDay()+'/'+Time.getDate()+'-'+Time.getHours()+':'+Time.getMinutes()+':'+Time.getSeconds();
}

function refreshAll()
{
    refreshBlockList();
    refreshNodeList();
    retrieveMessages();
}

function retrieveAll()
{
retrieveUsers();
retrieveBlocks();
retrieveMessages();
}

function setDatabaseListeners()
{
db.collection("messages")
    .onSnapshot(function (snapshot) {
        retrieveMessages()
    },function (error) {
        console(error);
    });

db.collection("blocks")
    .onSnapshot(function (snapshot) {
        retrieveBlocks()
    },function (error) {
        console(error);
    });

db.collection("users")
    .onSnapshot(function (snapshot) {
        retrieveUsers()
    },function (error) {
        console(error);
    });
}

String.prototype.contains = function(str) { return this.indexOf(str) != -1; };

var containsProfanity = function(text){
    var returnVal = false;
    for (var i = 0; i < profanities.length; i++) {
        if(text.toLowerCase().contains(profanities[i].toLowerCase())){
            returnVal = true;
            break;
        }
    }
    return returnVal;
}

function snackbar(text){
    var snackbar = document.getElementById("messageSnackbar");
    snackbar.innerText = text;
    snackbar.className = "show";
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}