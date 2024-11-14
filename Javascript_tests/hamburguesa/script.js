function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuButton = document.getElementById('menu-button');
    
    menu.classList.toggle('show');
    menuButton.classList.toggle('show');
}

function clickCharacter() {
    alert('Character clicked!');
}
