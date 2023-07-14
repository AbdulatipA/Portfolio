const mainWrap = document.querySelector('.portfolio_wrap'),
      content = document.querySelectorAll('.work_wrap'),
      tabs = document.querySelectorAll('.portfolio_item');
     

function hideContent() {
    content.forEach(item => {
        item.classList.add('work_card-hide');
    });

    tabs.forEach(item => {
        item.classList.remove('menu-portfolio_active');
    });
}

hideContent();


function showContent(i = 0) {
    content[i].classList.remove('work_card-hide');
    tabs[i].classList.add('menu-portfolio_active');
}

showContent();


mainWrap.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('portfolio_item')) {
        tabs.forEach((item, i) => {
            if (item == target) {
                hideContent();
                showContent(i);
            }
        });
    }
});

