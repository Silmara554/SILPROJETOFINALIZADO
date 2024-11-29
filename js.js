function showDetails(section) {
    const details = document.getElementById(section + '-details');
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

document.querySelectorAll('.botao-curtida').forEach(function(button) {
    button.addEventListener('click', function() {
        alert('Você curtiu esse estilo de ensaio');
    });
});