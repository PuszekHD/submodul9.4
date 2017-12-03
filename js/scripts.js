function drawTree(height) {
    var star = "";
    for ( var i = 0; i < height ; i++) {
        star += " o *";
        var space = "";
        for (var j = height; j > i; j--) {
            space += "  ";
        }
        if (i < 1) {
            star = "*";
        }
        console.log(space + star);
    }
}

drawTree(5);