function twitchMain(){
    let getDataBtn = $("#getData");
    let streamInput = $("#streamInput");
    
    getDataBtn.on("click",function(){
        //check to see if there was anything typed

        //TODO: ERROR HANDLING
        if(streamInput.val.length === 0) console.log("error");
        console.log(streamInput.val());
        makeRequest(streamInput.val());
    });   
}

function makeRequest(streamInput){
    let streamName = $("#streamName");
    let streamGame = $("#streamGame");
    let streamViewers = $("#streamViewers");
    const key = "?client_id=03i44s2mzxk0s9ksqzvhu16i5im3ul";
    const url = "https://api.twitch.tv/kraken/streams/";
    fetch(url+streamInput+key)
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
        //update view
        let streamStatus = data.stream;
        if(streamStatus){
            streamName.text(data.stream.channel.display_name);
            streamGame.text(data.stream.game);
            streamViewers.text(data.stream.viewers);
        } else{
            streamName.text(streamInput);
            streamGame.text("IS NOT LIVE");
            streamViewers.text("0");
        }
    })
    .catch(function(err){
        alert(err);
    });
}