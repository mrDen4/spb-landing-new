//Кнопка заказать звонок
$('.header__btn').on('click', function() {
    $('.modal__card').toggleClass('modal__card--active');
    $('.bg__modal').toggleClass('bg__modal--active');
});

//Кнопка узнать цену
$('.buy__btn').on('click', function() {
    $('.modal__card-price').toggleClass('modal__card-price--active');
    $('.bg__modal').toggleClass('bg__modal--active');
});

//Выход из popup
$('.bg__modal').on('click', function() {
    $('.modal__card').removeClass('modal__card--active');
    $('.modal__card-price').removeClass('modal__card-price--active');
    $('.bg__modal').removeClass('bg__modal--active');
});

$('.modal__exit').on('click', function() {
    $('.modal__card').removeClass('modal__card--active');
    $('.modal__card-price').removeClass('modal__card-price--active');
    $('.bg__modal').removeClass('bg__modal--active');
});