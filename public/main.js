const choice = document.querySelector('.choices');
const myForm = document.getElementById('user');
console.log(choice);
choice.addEventListener("change", (e) => {
    e.preventDefault();
    const ans = e.target.value;
    if (myForm.childElementCount > 0) {
        myForm.querySelectorAll('*').forEach(n => n.remove());
    }
    
    if (ans === "search") {
        myForm.action = "/results";
        let user = document.createElement('input');
        user.setAttribute("type", "text");
        user.setAttribute("name", "id");
        user.setAttribute("placeholder", "search");
        let button = document.createElement("button");
        button.innerText = "Submit";
        myForm.appendChild(user);
        myForm.appendChild(button);
    }
    else if (ans === "add") {
        console.log('not implemented yet');
    }
});