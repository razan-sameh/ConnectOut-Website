const img_div = document.querySelector('.profile_picture_div');
const img = document.querySelector('#image'); 
const file = document.querySelector('#file');
const upload_btn = document.querySelector('#upload_btn');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');

// img_div.addEventListener('mouseenter',function(){
//     upload_btn.style.display = 'block';
// });
// img_div.addEventListener('mouseleave',function(){
//     upload_btn.style.display = 'none';
// });
file.addEventListener('change',function(){
    const choose_file = this.files[0];
    if(choose_file){
        const reader = new FileReader();
        reader.addEventListener('load',function(){
            img.setAttribute('src',reader.result);
            img2.setAttribute('src',reader.result);
            img3.setAttribute('src',reader.result);
        });
        reader.readAsDataURL(choose_file);
    }
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('Save', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
        }, false)
    })
})()
