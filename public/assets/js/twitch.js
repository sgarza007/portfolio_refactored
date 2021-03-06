function twitchMain(){
    let getDataBtn = $("#getData");
    let streamInput = $("#streamInput");
    
    getDataBtn.on("click",function(){
        makeRequest(streamInput.val());
    });   
}

function makeRequest(streamInput){
    let streamName = $("#streamName");
    let streamGame = $("#streamGame");
    let streamViewers = $("#streamViewers");
    //create a URL for api call
    const key = "?client_id=03i44s2mzxk0s9ksqzvhu16i5im3ul";
    const url = "https://api.twitch.tv/kraken/streams/";
    fetch(url+streamInput+key)
    //handle error
    .then(function(res){
        $("#errorMessage").removeClass("rubberBand");
        return res.json();
    })
    .then(function(data){
        if(!data.error){
            $("#errorMessage").text("");
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
        } else{
            console.log(data);
            throw Error("Oops! Something went wrong: "+data.error);
        }
    })
    .catch(function(err){
        $("#errorMessage").text(err);
        $("#errorMessage").addClass("rubberBand");
    });
}