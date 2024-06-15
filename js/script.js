const input = document.querySelector("#input")
const form = document.querySelector("#form")
const error_msg = document.querySelector("#error_msg")

form.addEventListener("submit",(e) =>{
    e.preventDefault()
    const emailRegex = new RegExp(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/)
    console.log(input.value.trim())
    if(input.value === ""){
        error_msg.textContent = "Please enter an email address"
        error_msg.className = "text-red-600 text-sm ml-6 "
        input.className = " text-sm border-2 outline-none border-red-500 rounded-full w-80 sm:w-96 ml-4 p-3";
        form.classList.replace('mb-10', 'mb-1')
        error_msg.remove(textContent)
        
    }
    else if(!input.value.match(emailRegex))
    {
        error_msg.innerHTML = "Please enter a valid email"
        error_msg.className = "text-red-600 text-sm ml-6 "
        input.className = " text-sm border-2 outline-none border-red-500 rounded-full w-80 sm:w-96 ml-4 p-3";
        form.classList.replace('mb-10', 'mb-1')
        return false;
    }else{
        error_msg.innerHTML="Email Submitted Successfully"
        error_msg.className = "text-green-600 text-sm ml-6 "
        form.classList.replace('mb-10', 'mb-1')
        input.className = "ml-4 text-sm border-2 outline-none border-green-500 rounded-full w-80 sm:w-96 p-3";
    return true;

    }
    
})
