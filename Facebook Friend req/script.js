var btn = document.querySelector("#add")
var istatus = document.querySelector("h5")
var check = 0

btn.addEventListener('click', function(){
    if (check == 0) {
    istatus.innerHTML = "Friends"
    istatus.style.color = "Green" 
    btn.innerHTML = "Remove Friend"
    check = 1
    }
    else {
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"  
        btn.innerHTML = "Add Friend"
        check = 0
    }
})