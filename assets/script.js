var toggle = document.querySelector('#toggle-btn');
var menu = document.getElementById('menu');
var body = document.getElementById('body')
var aboutId = document.getElementById('AboutBtn');
var projectId = document.getElementById('ProjectBtn');
var resumeId = document.getElementById('ResumeBtn');
var contactId = document.getElementById('ContactBtn');

toggle.onclick = function () {
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        var aboutBtn = document.createTextNode('About');
        var projectBtn = document.createTextNode('Projects');
        var resumeBtn = document.createTextNode('Resume');
        var contactBtn = document.createTextNode('Contact');

        aboutId.appendChild(aboutBtn);
        projectId.appendChild(projectBtn);
        resumeId.appendChild(resumeBtn);
        contactId.appendChild(contactBtn);
    } else {
        aboutId.innerHTML = '';
        projectId.innerHTML = '';
        resumeId.innerHTML = '';
        contactId.innerHTML = '';
    }
}

document.addEventListener('click', function(event) {
    var clickMenu = menu.contains(event.target);
    var clickToggle = toggle.contains(event.target);
    if (!clickMenu && !clickToggle) {
        menu.classList.remove('active');
    }
});