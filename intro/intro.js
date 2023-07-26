function clickButton() {
    console.log(`Hello World!`);
    const mytext = document.getElementById("mytext");
    mytext.innerHTML = `It worked!!`;
    mytext.style = `font-size: 50px`;
    mytext.className = `myclass`;

    const bgcolor = document.getElementById("bgcolor");

    const body = document.body;
    body.style.backgroundColor = bgcolor.value;
}