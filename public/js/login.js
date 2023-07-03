let input=document.getElementById('emailLogin');
let label=document.getElementById('emailLoginLabel');

input.addEventListener("focusin",function(){
    console.log('event generated');
    label.style.display="none";
});
input.addEventListener("focusout",function(){
    console.log('event2 generated');
    var check = input.value;
    if(check==""){
        label.style.display="block";
    }
});

let password=document.getElementById('passwordLogin');
let passwordLabel=document.getElementById('passwordLoginLabel');

password.addEventListener("focusin",function(){
    console.log('event generated');
    passwordLabel.style.display="none";
});
password.addEventListener("focusout",function(){
    console.log('event2 generated');
    var check = input.value;
    if(check.trim()===""){
        passwordLabel.style.display="block";
    }
});




ScrollReveal({ 
    distance: '100px',
    duration:1000,
    delay:200
});

ScrollReveal().reveal('.othercontainer', {origin:'right'});
ScrollReveal().reveal('#email,#password',{
    origin:'left'
});
ScrollReveal().reveal('.login-info',{
    origin:'top'
});


var signup=document.getElementById('signup');

signup.addEventListener("click",function(){
    location.href="/signup";
})