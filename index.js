// React is loaded and is available as React and ReactDOM
// imports should NOT be used

const Message = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <a
        href="#"
        onClick={(ev) => {
          ev.preventDefault();
          setOpen(!open);
        }}
      >
        Want to buy a new car?
      </a>
      {open ? <p>Call +11 22 33 44 now!</p> : null}
    </React.Fragment>
  );
};

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<Message />, rootElement);

console.log("Before click: " + rootElement.innerHTML);
document.querySelector("a").click();
console.log("After click: " + rootElement.innerHTML);
