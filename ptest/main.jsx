let users = [
    {
        "name":"javad khaki",
        "age" : 20
    }
];


const app = ReactDOM.createRoot(document.getElementById("app"));

function Welcome(props){
    let id = props.id;
    return <div>welcome , {users[id].name}</div>
}

app.render(<Welcome id="0" />);

