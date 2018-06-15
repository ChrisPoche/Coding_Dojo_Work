const reactContainer = document.getElementById("react");
ReactDOM.render(
    React.createElement(
    "div",
    { className: "list" }, 
    React.createElement(
        "h1",
        null,
        "Hello Dojo!"),
    React.createElement(
        "h2",
        null,
        "Things I need to do:"
    ),
    React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            "Learn React"
        ),
        React.createElement(
            "li",
            null,
            "Read every book on my bookshelf"
        ),
        React.createElement(
            "li",
            null,
            "Run a Marathon"
        ),
        React.createElement(
            "li",
            null,
            "See the world"
        ),
    )
),reactContainer);
