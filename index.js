// React is already loaded

const Test = () => {
  const [state] = React.useState(0);

  return (
    <div>
      <h1>Demo - {state}</h1>
    </div>
  );
};

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<Test />, rootElement);
