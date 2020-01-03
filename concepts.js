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

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Darius" />
//       <Welcome name="Danny" />
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// It is possible to write this way, but bit complicated
// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img src="{props.author.avatorUrl}" alt="{props.author.name}" />
//         <div className="UserInfo-name">{props.author.name}</div>
//       </div>
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">{formatDate(props.date)}</div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: "I hope you enjoy learning React!",
//   author: {
//     name: "Hello Kitty",
//     avatarUrl: "https://placekitten.com/g/64/64"
//   }
// };

// ReactDOM.render(
//   <Comment date={comment.date} text={comment.text} author={comment.author} />,
//   document.getElementById("root")
// );

// bit extraction needed

// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Avatar(props) {
//   return (
//     <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">{props.user.name}</div>
//     </div>
//   );
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">{formatDate(props.date)}</div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: "I hope you enjoy learning React!",
//   author: {
//     name: "Hello Kitty",
//     avatarUrl: "https://placekitten.com/g/64/64"
//   }
// };
// ReactDOM.render(
//   <Comment date={comment.date} text={comment.text} author={comment.author} />,
//   document.getElementById("root")
// );

// All React components must act like pure functions with respect to their props.

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, World!</h1>
//       <h2>It is {new Date().toLocaleDateString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }

// setInterval(tick, 1000);
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
}

setInterval(tick, 1000);
/*
1. reate an ES6 class, with the same name, that extends React.Component.

2. Add a single empty method to it called render().

3. Move the body of the function into the render() method.

4. Replace props with this.props in the render() body.

5. Delete the remaining empty function declaration.
*/

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, her is the function to class</h1>
        <h2>
          That's it. We need states
          {this.props.date.toLocaleTimeString()}.
        </h2>
      </div>
    );
  }
}

// Local state to class

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Clock />, document.getElementById("root"));

//States
// function FormattedDate(props) {
//   return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <FormattedDate date={this.state.date} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Clock />, document.getElementById("root"));

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="warning">Warning!</div>;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById("root"));
