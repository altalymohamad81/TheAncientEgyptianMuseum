
    var sizes = new Array("0px", "1px", "2px", "3px", "4px");
    sizes.pos = 0;
    function elast() {
    var el = document.all.elastic;
    if (null == el.direction)
       el.direction = 1;
    else if ((sizes.pos > sizes.length - 4) || (0 == sizes.pos))
       el.direction *= -1;
       el.style.letterSpacing = sizes[sizes.pos += el.direction];
    }
    setInterval('elast()', 300)
    