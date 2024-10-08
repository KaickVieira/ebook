//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn'); //recebe a classe nextprev-btn

const pages = document.querySelectorAll('.book-page');//recebe a classe book-page
const book = document.querySelector('.book');//recebe a classe book
const cover = document.getElementById('turn-0');//recebe o id turn-0
let totalPages = pages.length; //conta a quantidade de páginas existentes
let pageNumber = 0; //deixa o pageNumber definido como 0

//função para cada elemento (el) dentro de index
pageTurnBtn.forEach((el, index)  => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);
        //remove o turn das páginas que já contem e torna o z-index igual ao index da página
        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 15 - index;
            }, 500)
        } 
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 10 + index;
            }, 500);
        }
        openBook(cover); //chamada de função
    
    }

});

//função para mostrar a página do livro ao abrir
function openBook(el) {
    if (el.classList.contains('turn')) {
            setTimeout(() => {
                book.style.display = 'flex'
         }, 800)
    }
}


//função para avançar para a próxima página
function nextIndex() {
    pageNumber++;
    if (pageNumber >= totalPages) {
        pageNumber = 0;
    }
    showPage(pageNumber)
}

//função para voltar para a página anterior
function previousIndex() {
    pageNumber--;
    if (pageNumber < 0){
        pageNumber = totalPages - 1;
    }
    showPage(pageNumber);
}

//função para mostrar a página do livro
function showPage(index) {
    pages.forEach((page, pageIndex) => {
        if (pageIndex === index) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none'
        }
    })
}



