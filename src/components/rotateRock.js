import $ from 'jquery';
function rotateRock(degree) {
            $('.rock-meter-stick').css({
                        'transform': 'rotate(' + degree + 'deg)'
            });
        
}

export default rotateRock;