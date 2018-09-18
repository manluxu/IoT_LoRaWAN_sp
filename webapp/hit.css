$(document).click(function() {

    var svg = Snap.select('#pin');
    var hole = svg.select('#hole');
    var marker = svg.select('#marker');

    marker.attr({
        transform: 't0 220'
    });
    hole.attr({
        rx: 0,
        ry: 0
    });

    hole.animate({
        rx: 80,
        ry: 6
    }, 500, mina.easeout, function() {
        marker.animate({
            transform: 't0 0'
        }, 500, mina.easein, function() {
            marker.animate({
                transform: 's-1 1'
            }, 250, mina.easein, function() {
                marker.animate({
                    transform: 's1 1'
                }, 250, mina.easeout)
            });
        });
    });
});
