let getButton = document.getElementById("getBtn")
let saveButton = document.getElementById("postBtn")
let editButton = document.getElementById("editBtn")

getButton.addEventListener('click', fetchUserData)
saveButton.addEventListener('click', saveUserData)
editButton.addEventListener('click', editUserData)


// get user data 
async function fetchUserData() {
    let data = await fetch('http://localhost:3000/users')
    let response = await data.json()
    // console.log(response)
}


// post user data 
async function saveUserData() {
    
    let payload = {
        name : "kumar", 
        email : "example@gmail.con"
    }

    let data = await fetch('http://localhost:3000/users', {
        method : "POST",
        body : JSON.stringify(payload)
    })


}


async function editUserData() {
    let data = await fetch('http://localhost:3000/users/NQaQBJ1XTgs', {
        method : 'PUT',
        body : JSON.stringify({
            name : "sabari",
            role : "software engineer with AI expertise"
        })
    })
}