const menu = document.querySelector(".main_nav");
const mbutton = document.querySelector(".mmenu");
const header = document.querySelector("header");
const select = document.querySelector(".sort");
const main_item = document.querySelectorAll(".main_item");
const main_img = document.querySelector(".main_img");
const gallery = document.querySelector(".img_list");
const close = document.querySelector(".close");
const choose = document.querySelectorAll(".left_side a,.right_side a");


[].forEach.call(choose,function(elem){
    elem.addEventListener("click",function(e){
        e.preventDefault();
        var x = window.matchMedia("(max-width:1024px)");
        if(x.matches) {
            return;
        }
        document.querySelector(".modal").style.display = "block";
        document.querySelector(".wrapper").style.display = "flex";
    })
});

gallery.addEventListener("click",function(e){
    if(e.target.tagName == "IMG") {
        var src = e.target.getAttribute("src");
        main_img.setAttribute("src",src);
    }
});

close.addEventListener("click",function(){
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".wrapper").style.display = "none";
});

select.addEventListener("click",function(e){
    var option = select.options[select.selectedIndex].value;
    
    select.style.width = option.length*12 + "px";
});

header.addEventListener("click",function(e){
});

mbutton.addEventListener("click",function(e){
    e.preventDefault();
    
    if(menu.classList.contains("hide")) {
        menu.classList.remove("hide");
        setTimeout(function(){
            menu.style.transform = "translateY(0%)"
            menu.style.opacity = "1";
        },300);
    } else {
        menu.style.opacity = "0";
        menu.style.transform = "translateY(-150%)"
        setTimeout(function(){
            menu.classList.add("hide");
        },500);
    }
});

[].forEach.call(main_item,function(elem){

});
