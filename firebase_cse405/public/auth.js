//function to display correct menu items

const loggedOutLinks = document.querySelector('.logged-out');
const loggedInLinks = document.querySelector('.logged-in');

const setupUI = (user) => {
    if (user) {
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    }else{
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}



//keep track if a user is logged in or not

var db = firebase.firestore();
var employeesRef = db.collection("employees");
auth.onAuthStateChanged(user => {
    if(user){
        console.log('user logged in: ', user);


        employeesRef.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id}`);

            })

        })

        document.getElementById("datable").style.display;
        document.getElementById("filter_button").style.display = "none";
        setupUI(user);

    }else{
        console.log('user logged out');
        document.getElementById("datable").style.display = "none";
        document.getElementById("filter_button").style.display = "none";
        document.getElementById("createEmployee").style.display ="none";
        setupUI();
    }
});


const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit',(e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    console.log(email,password);
    document.getElementById("filter_button").style.display = "none";





//sign up and stay signed in afterwards
    auth.createUserWithEmailAndPassword(email,password).then(cred => {


        console.log(cred.user);
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
        document.getElementById("datable").style.display;
        location.reload();
        document.getElementById("filter_button").style.display = "none";
    });

});
//logout user
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user logged out')

    });
    document.getElementById("filter_button").style.display = "none";
    document.getElementById("createEmployee").style.displey = "none";
});

//sign in a current user

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    auth.signInWithEmailAndPassword(email, password).then(cred =>{
        console.log('logged in');
        console.log(cred.user);

        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
        document.getElementById("datable").style.display;
        location.reload();
        document.getElementById("filter_button").style.display = "none";
    });
});