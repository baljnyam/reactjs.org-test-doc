// const name = "Hey Man";
// const element = <h1>Hello, {name}</h1>;

// ReactDOM.render(element, document.getElementById("root"));

// function formatName(user) {
//   return user.firstName + " " + user.lastName;
// }

// const user = {
//   firstName: "Harper",
//   lastName: "Perez"
// };

// function getGreeting(user) {
//   if (user) {
//     return <h1> Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

// const element = (
//   <h1>
//     Hello, {formatName(user)}!, {getGreeting(user)}
//   </h1>
// );

// const element = <div tabIndex="0"></div>;
// const element = <img src={user.avatarUrl} />;
// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here</h2>
//   </div>
// );

// const title = response.potentiallyMaliciousInput;
// // This is safe
// const element = <h1>{title}</h1>;

// ReactDOM.render(element, document.getElementById("root"));
// Identical
// const element = <h1 className="greeting">Hello, world!</h1>;

// const element = React.createElement(
//   "h1",
//   { className: "greeting" },
//   "Hello, world"
// );

// function and class comonents

// function Welcome(props) {
//   return <h1> Hello, {props.name} </h1>;
// }

// class Welcome extends React.Component {
//   render() {
//     return <h1> Hello, {this.props.name} </h1>;
//   }
// }

// const element = <Welcome name="Sara" />
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// )

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Darius" />
      <Welcome name="Danny" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
