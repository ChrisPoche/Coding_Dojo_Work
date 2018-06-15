const vanillaContainer = document.getElementById("vanilla");
const reactContainer = document.getElementById("react")

const render = () => {

    vanillaContainer.innerHTML = `
    <div class="clock">
    <h2>The time is,</h2>
    <h3>${new Date().toLocaleTimeString()}</h3>
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
            "The time is,"),
        React.createElement(
            "h3",
            null,
            time
        )
    ),reactContainer);
}

setInterval(render, 1000);