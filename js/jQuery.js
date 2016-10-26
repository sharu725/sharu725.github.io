 var contactform =  document.getElementById('theForm');
contactform.setAttribute('action', '//formspree.io/' + 'sharathdt+webjeda' + '@' + 'gmail' + '.' + 'com');


var ev = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;
    var x = document.getElementById("email_address");
 function email_validate(email){
        if(!ev.test(email))
            {
                x.innerHTML	= "Not a valid email";
                x.style.display = "block";
            }
        else
            {
                x.innerHTML	= "Looks good!";
                x.style.display = "block";
            }
        };

function hidemsg(){
    x.style.display = "none"
}

