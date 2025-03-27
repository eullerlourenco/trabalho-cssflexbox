const btnChangeTheme = document.getElementById('btnChangeTheme');

btnChangeTheme.addEventListener('click', function(event) {
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')) {
        event.target.classList.remove('bi-moon');
        event.target.classList.add('bi-brightness-high');
    } else {
        event.target.classList.remove('bi-brightness-high');
        event.target.classList.add('bi-moon');
    }
});