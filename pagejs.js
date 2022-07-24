$(document).ready(function(){
    $("#formContact").validate({
        rules:{
            nameplace:{
                required:true,
                minlength:4,
            },
            emailplace:{
                required:true,
                email:true,
            },
            contactNoplace:{
                required:true,
                minlength:10,
            },
            place:{
                required:true,
            }
            
        }
    })
     
})