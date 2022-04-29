const addIdMenu = document.getElementsByClassName('hamburger-menu')[0];
addIdMenu.setAttribute('id', 'hamburger-menu');

const showMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');

showMenu.addEventListener('click', 
    function(){
        document.getElementById('hamburger-menu').style.display = 'block';
    }
);

closeMenu.addEventListener('click', 
    function(){
        document.getElementById('hamburger-menu').style.display = 'none';
    }
);