const hamburger=document.getElementById('hamburger');
const navlink=document.getElementById(navlink);

hamburger.addEventListener('click',()=>{
    navlinks.classlist.toogle('active')
});

const text ="Hi, I'm Mr.S";
const typedtext =document .getElementById('typed-text');
let index =0;

function type(){
   if (index <text.length){\
     typedText.textcontent  +=text.charAt(index);
     index ++;
    setTimeout(type, 150);
   }
}
type();