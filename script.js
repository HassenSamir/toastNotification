const btn = document.getElementById("btn");
const container = document.getElementById("container");


btn.addEventListener('click', () => {
    createNotification();
});

function createNotification() {
    //we create a div element corresponding to each block printed on the browser
    const notif = document.createElement('div');
    //each block is a div with a "toast" id, we will use that id to style our blocks
    notif.classList.add('toast');
    //printed text in the div 
    notif.innerText = 'This challenge is crazy';
    //allow notif to be print in the #container <div>
    container.appendChild(notif);
    // remove notification two parameters function and delay
    setTimeout(() => {
        notif.remove();
    }, 3000);
}
