function Hello() {
    return (
        <ul>
            <h />Welcome to Binocular Homepage!
            <p />Features Coming Soon:
            <li>Homepage</li>
            <li>Create an Account</li>
            <li>Log In</li>
            <li>Profile</li>
            <li>Reviews</li>
            <li>Q & A</li>
            <li>Log Out</li>
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