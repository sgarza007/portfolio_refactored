function main(){
    let squares = $(".square");
    squares.on("click", function () {
        console.log("Clicked");
    });
    squares.each(function(i){
        $(this).css("color",randomRGB);
    });
}

//create a random RGB generator
function randomRGB(){
    let r = randomNum();
    let g = randomNum();
    let b = randomNum();
    return "rgb("+r+", "+g+", "+b+")";
}

function randomNum(){
    return Math.floor(Math.random()*256);
}