function Hello() {
    return (
        <ul>
            Welcome to Binocular Homepage!
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
    );
}

function PageButton(props) {
    return (
        <button type="button">{props.message}</button>
        );
}

ReactDOM.render(<Holder />, document.querySelector("#root"));
ReactDOM.render(
    (<div>
    <PageButton message="Home" />
    <PageButton message="Create an Account" />
    <PageButton message="Log In" />
    <PageButton message="Profile" />
    <PageButton message="Reviews" />
    <PageButton message="Q & A" />
    <PageButton message="Log Out" />

    </div>), document.querySelector("#root"));