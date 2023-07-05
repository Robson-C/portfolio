
function mostrar(n) {
    let projeto = document.getElementById(`proj_${n}`)

    if (projeto.classList.contains('mostra')) {
        projeto.classList.remove('mostra')
        projeto.querySelector('div').removeAttribute('style')
    } else {
        projeto.classList.add('mostra')
        projeto.querySelector('div').style.display = 'flex'
    }


}



function size_window(){
    let projetos = document.getElementById('projetos')
    let filhos = projetos.children

    if (window.screen.width < 840){
        for (n in filhos) {
            if (n > 2){
                filhos[n].classList.add('hide')
            }
        }
    } else {
        for (n in filhos) {
            if (n > 2){
                filhos[n].classList.remove('hide')
            }
        }
    }
}