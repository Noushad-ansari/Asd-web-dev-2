const myModel = document.querySelectorAll(".modal")
const userInfo = document.querySelector("#userInfo")
const profileName = document.querySelector("#profileName")

// Signup
async function signup(e) {
    e.preventDefault()
    const email = document.querySelector("#signupEmail")
    const password = document.querySelector("#signupPassword")
    // console.log(email.value)
    // console.log(password.value)
    try {
        const result = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        // userInfo.innerHTML = `Welcome Dear ${result.user.email}` xxx
        console.log(result)
        createUserCollection(result.user)
        // updating userName
        // result.user.updateProfile({
        //     displayName: "i am New User",
        //   })

        // send varification mail to user
        result.user.sendEmailVerification()


        M.toast({ html: `Welcome ${result.user.email}`, classes: "green" })
    } catch (err) {
        console.log(`Something went Wrong : ${err}`)
        M.toast({ html: err.message, classes: "red" })
    }


    console.log(userInfo)
    email.value = ""
    password.value = ""

    M.Modal.getInstance(myModel[0]).close()
}

// Login
async function login(e) {
    e.preventDefault()
    const email = document.querySelector("#loginEmail")
    const password = document.querySelector("#loginPassword")

    console.log("hello")

    try {
        const result = await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        console.log(result)
        // userInfo.innerHTML = `Welcome - ${result.user.email}` ///xxxxxx

        M.toast({ html: `Welcome ${result.user.email}`, classes: "green" })
    } catch (err) {
        console.log(`Something went Wrong : ${err.message}`)
        M.toast({ html: `Wrong Credentials ${err.message}` , classes: "red" })
    }


    email.value = ""
    password.value = ""
    M.Modal.getInstance(myModel[1]).close()
}


// Logout
function logout() {
  
    firebase.auth().signOut().then(() => console.log("logout successful"))
    M.toast({ html: "you are logged out", classes: "green" })
    // console.log("hello")
}

// login With Goggle
async function loginWithGoggle() {

    try {
        var provider = new firebase.auth.GoogleAuthProvider();
        const result = await firebase.auth().signInWithPopup(provider)
        console.log("google Auth -"+result.user.uid)
        M.toast({ html: `Welcome ${result.user.displayName}`, classes: "green" })
    } catch (err) {
        console.log(err)
        M.toast({ html: "Something went Wrong ", classes: "red" })
    }

}


// Listener
const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // getuserInfo(user.uid)
        getuserInfoRealtime(user.uid)
        document.querySelector("#loginli").style.display = "none"
        document.querySelector("#mobileLoginli").style.display = "none"
        document.querySelector("#mobileSignupli").style.display = "none"
        document.querySelector("#signupli").style.display = "none"
        document.querySelector("#mobileLogoutli").style.display = "block"
        document.querySelector("#mobileResetBtn").style.display = "block"
        document.querySelector("#mobileProfileName").style.display = "block"
        document.querySelector("#logoutli").style.display = "block"
        document.querySelector("#resetBtn").style.display = "block"
        // console.log(user, "hello i am from auth state chage")
        // console.log("id from auth :" + user.uid)
        

    } else {
        // getuserInfo(null)
      getuserInfoRealtime(null)

        document.querySelector("#mobileProfileName").style.display = "none"
        document.querySelector("#resetBtn").style.display = "none"
        document.querySelector("#logoutli").style.display = "none"
        document.querySelector("#mobileResetBtn").style.display = "none"
        document.querySelector("#mobileLogoutli").style.display = "none"
        document.querySelector("#loginli").style.display = "block"
        document.querySelector("#signupli").style.display = "block"
    }
});

//   unsubscribe()




// Password Reset
function resetPassword(e) {
    e.preventDefault()
    let userNewPassword = document.querySelector("#NewPassword")


    const user = firebase.auth().currentUser;

    user.updatePassword(userNewPassword.value).then(() => {
        console.log("password changed")
        M.toast({ html: "your password has reset now ", classes: "green" })

        M.Modal.getInstance(myModel[2]).close()
    }).catch((error) => {
        // An error ocurred
        console.log(error.message)
        // ...
    });
    userNewPassword.value = " "
}

// Password Reset with email link
function sendResetPassLink(e) {
e.preventDefault()
    let userEmail = document.querySelector("#NewPasswordEmail").value
    firebase.auth().sendPasswordResetEmail(userEmail)
  .then(() => {
    // Password reset email sent!
    // ..
    alert("Password reset email sent!")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
    // console.log(userEmail)
    M.Modal.getInstance(myModel[4]).close()
}




// firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });