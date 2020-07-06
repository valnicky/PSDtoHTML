$(document).ready(init);
/*(function () {
    init();
})();*/


function init() {
    const selMenu = document.querySelector('.header2 .menu'); // console.log(selMenu);
    const ul = document.querySelector('.header2 .list2');
    selMenu.click(function () {
        ul.setAttribute('display', 'flex');
        // $('.list2').toggle();
        console.log('click' + ul);
    });

    toggleFunc();
}

function toggleFunc() {
    const menubf = document.querySelector('.menu');
    menubf.addEventListener('click', () => {
        const list2 = document.querySelector('.list2');
        if (list2.style.display === 'none';) {
            list2.style.display = 'block';
        }

    });



}