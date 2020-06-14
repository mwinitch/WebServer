const choice = document.querySelector('.choices');
const myForm = document.getElementById('user');

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
        myForm.action = "/append";
        let language = document.createElement('input');
        language.setAttribute("type", "text");
        language.setAttribute("name", "lang");
        language.setAttribute("id", "lang");
        let languageLabel = document.createElement('label');
        languageLabel.setAttribute("for", "lang");
        languageLabel.setAttribute("form", "user");
        languageLabel.innerText = "Lanuage:"

        let typed = document.createElement('input');
        typed.setAttribute("type", "text");
        typed.setAttribute("name", "type");
        typed.setAttribute("id", "type");
        let typedLabel = document.createElement('label');
        typedLabel.setAttribute("for", "type");
        typedLabel.setAttribute("form", "user");
        typedLabel.innerText = "Typed:"

        let button = document.createElement("button");
        button.innerText = "Submit";
        
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        div1.appendChild(languageLabel);
        div1.appendChild(language);
        div2.appendChild(typedLabel);
        div2.appendChild(typed);
        myForm.appendChild(div1);
        myForm.appendChild(div2);
        myForm.append(button);
    }
});