export default function App_click({ children, onClick, disabled }) {
  return (
    <div>
      <App_click1
        onClick1={() => alert("Game")}
        onClick2={() => alert("Movies")}
      />
      <App_click2
        onClick1={() => alert("Game")}
        onClick2={() => alert("Movies")}
      />
    </div>
  );
}

function App_click1({ onClick1, onClick2 }) {
  return (
    <div>
      <Button onClick={onClick1}>Play Game</Button>
      <Button onClick={onClick2}>Play Movies</Button>
    </div>
  );
}
function App_click2({ onClick1, onClick2 }) {
  return (
    <div>
      <button onClick={onClick1}>Play Game</button>
      <button onClick={onClick2}>Play Movies</button>
    </div>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
