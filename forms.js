

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passrepeat = document.getElementById('passrepeat');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passrepeatValue = passrepeat.value.trim();

    if(usernameValue ===""){

        //show error

        setErrorFor(username, 'Username should not be blank');

    }else{
        //show success
        setSuccessFor(username);
    }

    if(emailValue ===""){

        //show error

        setErrorFor(email, 'email should not be blank');

    }else{
        //show success
        setSuccessFor(email);
    }

    if(passwordValue ===""){

        //show error

        setErrorFor(password, 'Password should not be blank');

    }else{
        //show success
        setSuccessFor(password);
    }

    if(passrepeatValue ===""){

        //show error

        setErrorFor(passrepeat, 'Password should not be blank');
    
    }else if(
        passrepeatValue!==passwordValue
    ){
        setErrorFor(passrepeat, 'Passwords do not match!');
    }else{
        setSuccessFor(passrepeat);
    }
        
}
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;

    formControl.className = 'form-control error'
}

function setSuccessFor(input){
    const formControl=input.parentElement;
    formControl.className = 'form-control success'

}

