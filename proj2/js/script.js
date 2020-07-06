$(document).ready(init);
/*(function () {
    init();
})();*/


function init() {
    const selMenu = document.querySelector('.header2 .menu');// console.log(selMenu);
    const ul = document.querySelector('.header2 .list2');
    selMenu.click(function () {
        ul.setAttribute('display', 'flex');
        // $('.list2').toggle();
        console.log('click' + ul);
    });
}