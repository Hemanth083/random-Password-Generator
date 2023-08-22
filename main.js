let passwordContainer = document.getElementById("password");
let Body = document.body;
let Button = document.getElementById("button");

let Width = window.innerWidth;
let Height = window.innerHeight;

Body.style.height = Height + "px";
Body.style.width = Width + "px";


let randomPasswordGenerator = (length) => {
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    const symbols = "!@#$%^&*()-_=+";
    const everything = lowerCaseLetters + upperCaseLetters + digits + symbols;
    let password = "";

    const randomElement = (element) => {
        const randomIndex = Math.floor(Math.random() * element.length)
        return element[randomIndex];
    }

    password = password + randomElement(lowerCaseLetters);//here only 1 letter will be added to the password
    password = password + randomElement(upperCaseLetters);//here only 1 letter will be added to the password
    password = password + randomElement(digits);          //here only 1 digits will be added to the password
    password = password + randomElement(symbols);         //here only 1 symbols will be added to the password

    for (let i = password.length; i < length; i++) {
        password += randomElement(everything);
    }
    console.log(password);

    return password;


}

Button.addEventListener("click", () => {
    let result = randomPasswordGenerator(12);
    passwordContainer.value = "";
    passwordContainer.value = result;
})
