
function OpenMenu(MenuName) {
    document.getElementById(MenuName).style.animationName = 'slider'
    document.getElementById(MenuName).style.left = '0px';

}

function CloseMenu(MenuName) {
    document.getElementById(MenuName).style.animationName = 'n_slider'
    document.getElementById(MenuName).style.left = '-322px';
}