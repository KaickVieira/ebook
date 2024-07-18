//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

const pages = document.querySelectorAll('.book-page');
const book = document.querySelector('.book')
const cover = document.getElementById('turn-0')
const turns = document.getElementById('turn-2')
let totalPages = pages.length;
let pageNumber = 0;


pageTurnBtn.forEach((el, index)  => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);
        
        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        } 
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
        openBook(cover);
    }

});

//fuction for show book page
function openBook(el) {
    if (el.classList.contains('turn')) {
            setTimeout(() => {
                book.style.display = 'flex'
         }, 900)
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
//function close book
function closeBook() {
    const cover = document.querySelector('.cover .cover-left');

    if (cover && !cover.classList.contains('turn')) {
        pages.style.display = 'block';
    } else {
        pages.style.display = 'none'
    }
}
*/ 