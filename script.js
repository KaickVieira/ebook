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

//fuction for show book page
function openBook(el) {
    if (el.classList.contains('turn')) {
            setTimeout(() => {
                book.style.display = 'flex'
         }, 800)
    }
}


//function for next page
function nextIndex() {
    pageNumber++;
    if (pageNumber >= totalPages) {
        pageNumber = 0;
    }
    showPage(pageNumber)
}

//function for previous page
function previousIndex() {
    pageNumber--;
    if (pageNumber < 0){
        pageNumber = totalPages - 1;
    }
    showPage(pageNumber);
}

//function for show page
function showPage(index) {
    pages.forEach((page, pageIndex) => {
        if (pageIndex === index) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none'
        }
    })
}

/*
const turn2 = document.getElementById('turn-2')
const turn3 = document.getElementById('turn-3')
const turn4 = document.getElementById('turn-4')
const turn5 = document.getElementById('turn-5')
const turn6 = document.getElementById('turn-6')
const turn7 = document.getElementById('turn-7')
const turn8 = document.getElementById('turn-8')
const turn9 = document.getElementById('turn-9')
const turn10 = document.getElementById('turn-10')
const turn11 = document.getElementById('turn-11')
const turn12 = document.getElementById('turn-12')
const turn13 = document.getElementById('turn-13')
const turn14 = document.getElementById('turn-14')
const turn15 = document.getElementById('turn-15')
const turn16 = document.getElementById('turn-16')
*/


