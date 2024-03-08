var toggle = document.querySelector('#toggle-btn');
var menu = document.getElementById('menu');

toggle.onclick = function () {
    menu.classList.toggle('active');
    return console.log('hello');
}

document.addEventListener('click', function(event) {
    var clickMenu = menu.contains(event.target);
    var clickToggle = toggle.contains(event.target);
    if (!clickMenu && !clickToggle) {
        menu.classList.remove('active');
    }
});