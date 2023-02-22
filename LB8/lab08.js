$(document).ready(function(){
    // табы на js
    document.querySelector('#surname').addEventListener('blur', function(){
        if (!/^[A-Za-z]+$/.test(this.value)){
            alert("Некорректная фамилия");
        }
    })
    $(".dws-form").on("click",".tab",function(){
        
        //удаление класса active
        $(".dws-form ").find(".active").removeClass("active");
        
        //добавляем active
        $(this).addClass("active");
        
        //выборка элемента по индексу 
        $(".tab-form").eq($(this).index()).addClass("active");
    })
});

