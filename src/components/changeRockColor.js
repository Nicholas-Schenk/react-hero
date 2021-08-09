import $ from 'jquery';
function changeRockColor(color){
    if(color === 'red'){
        $('#rock-image').addClass("red-rock");
        $('#rock-image').removeClass("yellow-rock");
        $('#rock-image').removeClass("green-rock");
    
    } else if(color === 'yellow'){
        $('#rock-image').addClass("yellow-rock");
        
        $('#rock-image').removeClass("red-rock");
        $('#rock-image').removeClass("green-rock");
    
    } else if(color === 'green'){
        $('#rock-image').addClass("green-rock");
        
        $('#rock-image').removeClass("yellow-rock");
        $('#rock-image').removeClass("red-rock");
    
    }
}

export default changeRockColor;