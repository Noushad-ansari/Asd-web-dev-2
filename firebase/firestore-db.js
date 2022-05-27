const userDetails = document.querySelector(".userDetails")
const mobileProfileName = document.querySelector("#mobileProfileName")
// const myModel = document.querySelectorAll(".modal")



function createUserCollection(user) {

    firebase.firestore().collection("users").doc(user.uid).set({
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        phone: "",
        speciality: "",
        portFolioUrl: "",
        experience: ""
    })
}

async function getuserInfo(userID) {

    if (userID) {
        const userInfoSnap = await firebase.firestore()
            .collection('users')
            .doc(userID)
            .get()

        const userInfo = userInfoSnap.data()
        if (userInfo) {
            userDetails.innerHTML = `
       <h3>Welcome - ${userInfo.name}</h3>
       <h3>${userInfo.email}</h3>
       <h3>${userInfo.phone}</h3>
       `
            mobileProfileName.innerHTML = `Hello, ${userInfo.email}`
        }
    } else {
        console.log("no user found")
        userDetails.innerHTML = `
        <h3>Please Login...</h3>
        `
    }
}


// get user info in real time
async function getuserInfoRealtime(userID){
    console.log("hello get user info")
    if(userID){
      const userdocRef = await  firebase.firestore()
        .collection('users')
        .doc(userID)

        userdocRef.onSnapshot((doc)=>{
            if(doc.exists){
                 const userInfo = doc.data()
                    if(userInfo){
                        mobileProfileName.innerHTML = `Hello, ${userInfo.email}`
                        mobileProfileName.style.textDecoration = "underline"
                        userDetails.innerHTML = `
                        <ul class="collection">
                          <li class="collection-item"><h4s style = "text-decoration:underline;">Hello, ${userInfo.name}</h4></li>
                          <li class="collection-item"> Welcome - ${userInfo.email}</li>
                          <li class="collection-item">phone - ${userInfo.phone}</li>
                          <li class="collection-item">speciality -${userInfo.specialty}</li>
                          <li class="collection-item">Experience -${userInfo.experience}</li>
                          <li class="collection-item">portfolio - <a href="${userInfo.portfolioUrl}">open</li>
                        </ul>
                      
  


                        <button class="btn waves-effect #fbc02d #4db6ac teal darken-4 modal-trigger" href="#modal3">edit details</button>   
                        `
                        editProfile["name"].value = userInfo.name
                        editProfile["profileEmail"].value = userInfo.email
                        editProfile["phoneno"].value = userInfo.phone
                        editProfile["specialty"].value = userInfo.specialty
                        editProfile["prorfolioUrl"].value = userInfo.portfolioUrl
                        editProfile["experience"].value = userInfo.experience

                        if(firebase.auth().currentUser.photoURL){
                            document.querySelector('#proimg').src = firebase.auth().currentUser.photoURL
                        }


                }    
             }
        })


    }else{
        userDetails.innerHTML = `
        <h3>Please Login...</h3>
        `
    }
}


// update user details
function updateUserProfile(e){
    
    e.preventDefault()
    const userDocRef =  firebase.firestore()
    .collection('users')
    .doc(firebase.auth().currentUser.uid)


    userDocRef.update({
        name:editProfile["name"].value,
        email:editProfile["profileEmail"].value,
        phone:editProfile["phoneno"].value,
        specialty:editProfile["specialty"].value,
        portfolioUrl:editProfile["prorfolioUrl"].value,
        experience:editProfile["experience"].value

    })

    console.log("user information has updated")
    M.Modal.getInstance(myModel[3]).close()
}