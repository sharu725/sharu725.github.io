 var contactform =  document.getElementById('theForm');
contactform.setAttribute('action', '//formspree.io/' + 'sharathdt+webjeda' + '@' + 'gmail' + '.' + 'com');


var ev = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;
    var x = document.getElementById("email_address");
 function email_validate(email){
        if(!ev.test(email))
            {
                x.innerHTML	= "Not a valid email";
                x.style.display = "block";
                x.style.color = "#960c0c"
            }
        else
            {
                x.innerHTML	= "Looks good!";
                x.style.display = "block";
                x.style.color = "rgba(13, 109, 39, 0.71)"
            }
        };

function hidemsg(){
    x.style.display = "none"
}

