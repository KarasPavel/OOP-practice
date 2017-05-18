$(document).ready(function () {

    $(".call").click(function (e) {
        e.preventDefault();
        $(".callback.popup").css("display", "block");
    });
    $(".close").click(function (e) {
        e.preventDefault();
        $(".popup").css("display", "none");
    });

    var scroll = function (e) {
        var id = "#" + $(e.target).attr("data-to");
        var mnuH = $('header .top-mnu').height();
        var top = $(id).offset().top - mnuH;
        $('body,html').animate({scrollTop: top}, 1500);
    };

    var increase = function (e) {
        $(this).find('.hover-img').toggleClass("big");
    };

    $('.top-mnu nav').on('click', scroll);
    $('#contact-us').on('click', scroll);
    $("#up").on('click', scroll);
    $('.hover-block').on('mouseenter mouseleave', increase);

    //validation
    var mailPattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
    var numPattern = /^\++[0-9]{10,12}$/;
    var namePattern = /[A-Za-zА-Яа-яЁё]{2,20}$/;

    var mail = $('#mail');
    var num = $('#num');
    var name = $('#name');
    var namePop = $("#name-pop");
    var numPop = $("#number-pop");

    var formPop = $("#form-popup");
    var form = $('#form');

    num.on('click', function (e) {
        $(e.target).val('+');
    });
    var check = function (elem, pattern) {
        var valid = elem.parent().find('.valid');
        if (elem.val() != '') {
            if (elem.val().search(pattern) == 0) {
                valid.text('Подходит');
                elem.removeClass('error').addClass('ok');
                return true;
            } else {

                valid.text('Не подходит');
                elem.addClass('error').removeClass('ok');
                return false;
            }
        } else {

            valid.text('Поле не должно быть пустым!');
            elem.addClass('error').removeClass('ok');
            return false;
        }
    };
    var checkMail = function () {
        if (check(mail, mailPattern)) {
            return true;
        }

    };
    var checkName = function () {
        if (check(name, namePattern)) {
            return true;
        }
    };
    var checkNum = function () {
        if (check(num, numPattern)) {
            return true;
        }
    };

    var checkNumPopUp = function () {
        if (check(numPop, numPattern)) {
            return true;
        }
    };
    var checkNamePopUp = function () {
        if (check(namePop, namePattern)) {
            return true;
        }
    };

    form.on('submit', function (e) {
        e.preventDefault();
        checkMail();
        checkNum();
        checkName();

        mail.on('input', checkMail);
        num.on('input', checkNum);
        name.on('input', checkName);
        if (checkMail() && checkNum() && checkName()) {
            sendingSuccess(mail, num, name);
        }
        else {
            alert("Заполните корректно все поля");
        }
    });
    formPop.on('submit', function (e) {
        e.preventDefault();

        checkNumPopUp();
        checkNamePopUp();

        numPop.on('input', checkNumPopUp);
        namePop.on('input', checkNamePopUp);
        if (checkNumPopUp() && checkNamePopUp()) {
            sendingSuccess(numPop, namePop);
        }
        else {
            alert("Заполните корректно все поля");
        }
    });
});

function sendingSuccess(f1, f2, f3) {
    for (var i = 0; i < arguments.length; i++) {
        arguments[i].val('');
    }
    alert("Ваша заявка успешно отправлена")
} 