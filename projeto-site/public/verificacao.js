function verificacao(){
    var nomeSession = sessionStorage.getItem('nickname')
    if (nomeSession == null) {
        icon_menu.style.display = 'none';
    } else {
        icon_menu.style.display = 'block';
    }
}
window.onload = verificacao;