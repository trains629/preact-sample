import { h, render } from "preact";

function Card({children,caption}) {
  return <div className="card">
    <div className="card-header">
      {caption}
    </div>
    <div className="card-body">
      {children}
    </div>
  </div>
}

function App() {
  return <div className="container">
    <Card caption="preact sample"></Card>
  </div>;
}

render(<App />, document.querySelector("#root"));