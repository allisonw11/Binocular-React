function Hello() {
    return (
        <ul>
            <li>Hi World!</li>
        </ul>
    );
}

function Holder() {
    return (
        <React.Fragment>
            <Hello />
        </React.Fragment>
    )
}

ReactDOM.render(<Holder />, document.querySelector("#root"));