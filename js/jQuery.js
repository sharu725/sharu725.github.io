 var contactform =  document.getElementById('theForm');
contactform.setAttribute('action', '//formspree.io/' + 'sharathdt+webjeda' + '@' + 'gmail' + '.' + 'com');


 $('#email_address').on('keyup', function() {
            var re = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(this.value);
                if(!re) {
                    $('#error').show();
                } else {
                $('#error').hide();
    }   
})
