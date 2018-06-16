ReactDOM.render(
    React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { style: { backgroundColor: background=`blue`, color: fontColor=`white`, width: "29%", height: "31vw", padding: "25px", display: "inline-block", verticalAlign: "top" }},
            React.createElement(
                "h1",
                null,
                `${fontColor} on ${background}`)
            ),
            React.createElement(
                "div",
                { style: { backgroundColor: background=`red`, color: fontColor=`blue`, width: "29%", height: "31vw", padding: "25px", display: "inline-block", verticalAlign: "top" }},
                React.createElement(
                    "h1",
                    null,
                    `${fontColor} on ${background}`)
                ),
                React.createElement(
                    "div",
                    { style: { backgroundColor: background=`pink`, color: fontColor=`green`, width: "29%", height: "31vw", padding: "25px", display: "inline-block", verticalAlign: "top" }},
                    React.createElement(
                        "h1",
                        null,
                        `${fontColor} on ${background}`)
                    )
                )
    , document.getElementById("react")
);    