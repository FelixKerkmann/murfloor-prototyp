AFRAME.registerComponent('change-wall-color', {
    schema: {
        color: {default: ''}
    },
    init: function(){
        var data = this.data;
        this.el.addEventListener('click', function(){
            let cur = this.getAttribute("material").color;
            let walls = document.querySelectorAll(".wall");
            walls.forEach(function (elem) {
                elem.setAttribute("color", setNewColor(cur))
            })
        })
    }
});

function setNewColor(cur) {
    const colors = [
        "antiquewhite",
        "burlywood",
        "darkgrey",
        "skyblue",
        "sienna",
        "lightgrey",
    ];
    let index = colors.indexOf(cur) + 1;
    if (index >= colors.length) {
        index = 0;
    }
    return colors[index];
}

