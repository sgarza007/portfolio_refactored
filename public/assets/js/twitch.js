function twitchMain(){
    fetch("https://api.twitch.tv/kraken/streams/requiemslaps?client_id=03i44s2mzxk0s9ksqzvhu16i5im3ul")
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