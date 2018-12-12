function twitchMain(){
    let getDataBtn = $("#getData");
    let streamName = $("#streamName");
    getDataBtn.on("click",function(){
        //check to see if there was anything typed

        //TODO: ERROR HANDLING
        if(streamName.val.length === 0) console.log("error");
        console.log(streamName.val());
        makeRequest(streamName.val());
    });   
}

function makeRequest(streamName){
    const key = "?client_id=03i44s2mzxk0s9ksqzvhu16i5im3ul";
    const url = "https://api.twitch.tv/kraken/streams/";
    fetch(url+streamName+key)
    .then(function(res){
        if(!res.ok){
            throw Error("Oops! Something went wrong.");
        }
        return res;
    })
    .then(function(res){
        console.log(res);
        return res.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        alert(err);
    });
}