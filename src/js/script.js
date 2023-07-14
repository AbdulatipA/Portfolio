const menuList = document.querySelector('.menu_list'),
      menuItem = document.querySelectorAll('.menu_item'),
      menuLink = document.querySelectorAll('.menu_link'),

      menuIcon = document.querySelectorAll('.menu_icon'),

      sectionTogle = document.querySelectorAll('.sec-togle');


function hideSection() {
    sectionTogle.forEach(item => {
        item.classList.add('section-hide');
        item.classList.remove('section-active');
    });

    menuLink.forEach(item => {
        item.classList.remove('menu_active');
    });

    menuIcon.forEach(item => {
        item.classList.remove('menu_icon-active');
    });
};
hideSection();


function showSection(i = 0) {
    sectionTogle[i].classList.add('section-active');
    menuLink[i].classList.add('menu_active');
    menuIcon[i].classList.add('menu_icon-active');
}
showSection();


menuList.addEventListener('click', (e) => {
    const target = e.target;
    console.log(target);
    menuItem.forEach((item, i) => {

        if (item == target) {
            hideSection();
            showSection(i);
        }
        
    });

    menuLink.forEach((item, i) => {

        if (item == target) {
            hideSection();
            showSection(i);
        }
        
    });
});