AFRAME.registerComponent('change-floor-texture', {
    schema: { },
    init: function(){
        var data = this.data;
        this.el.addEventListener('click', function(){
            let floor = document.querySelector("#floor");
            let cur = floor.getAttribute("src");
            floor.setAttribute("src", setNewTexture(cur));
        })
    }
});
function setNewTexture(cur) {
    const textures = [
        "#wood-floor",
        "#wood-floor-2",
        "#tiles",
        "#tiles-pattern",
        "#stones",
        "#concrete"
    ];
    let index = textures.indexOf(cur) + 1;
    if (index >= textures.length) { index = 0; }
    return textures[index];
}


