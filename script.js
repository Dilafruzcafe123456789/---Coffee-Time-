document.addEventListener("DOMContentLoaded", function(){

    // Приветственное сообщение

    alert("Добро пожаловать в Coffee Time!");

    // Получение формы

    const form = document.querySelector("form");

    // Проверка формы

    form.addEventListener("submit", function(e){

        e.preventDefault();

        // Получение данных

        const name =
        document.querySelector(
        'input[type="text"]').value;

        const email =
        document.querySelector(
        'input[type="email"]').value;

        const message =
        document.querySelector(
        "textarea").value;

        // Проверка заполнения

        if(name === "" ||
           email === "" ||
           message === ""){

            alert(
            "Пожалуйста, заполните все поля!"
            );

        }else{

            alert(
            "Сообщение успешно отправлено!"
            );

            // Очистка формы

            form.reset();
        }

    });

});