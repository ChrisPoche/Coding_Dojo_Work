const vanillaContainer = document.getElementById("vanilla");
const reactContainer = document.getElementById("react")

const render = () => {

    vanillaContainer.innerHTML = `
    <div class="clock">
    <h2>The time is: ${new Date().toLocaleTimeString()}</h2>
    </div>
    `;

    var time = new Date().toLocaleTimeString();
    ReactDOM.render(
        React.createElement(
        "div",
        { className: "clock" }, 
        React.createElement(
            "h2",
            null,
            `The time is: ${time}`)
    ),reactContainer);
}

setInterval(render, 1000);