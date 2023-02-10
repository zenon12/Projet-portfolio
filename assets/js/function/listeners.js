var collapse=document.querySelector(".owner-portfolio-details .icon-mobile") ;
var menuMobile=document.getElementById("menu-mobile") ;
var li=document.querySelectorAll(".menu-body ul li") ;



var listenersFunction={
    managerMenuMobile: ()=>{
        if (menuMobile && menuMobile.style.display === "none") {
            menuMobile.style.display="block" ;
            menuMobile.classList.add("leftToright");
        }else if (menuMobile) {
            menuMobile.classList.add("rightToleft");
            setTimeout(()=>{
                menuMobile.style.display="none" ;
                menuMobile.classList.remove("rightToleft");
                menuMobile.classList.remove("leftToright");
           },1200) ;
        }
    }
}



var setUpListeners=()=>{
    collapse.onclick=listenersFunction.managerMenuMobile ;
    menuMobile.onmouseleave=listenersFunction.managerMenuMobile ;
    li.forEach(element => {
        element.onclick=listenersFunction.managerMenuMobile ;
    });
}

