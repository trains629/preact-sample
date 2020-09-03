import { h, render } from "preact";
//import 'bulma/css/bulma.css';
import "./styles.scss";

function Card({children,caption}) {
  return <div className="card">
    <header className="card-header has-background-success">
      <p className="card-header-title has-text-success-light">
        {caption}
      </p>
      <a className="card-header-icon">
        <span className="icon">
          <i className="fas fa-angle-down"/>
        </span>
      </a>
    </header>
    <div className="card-content">
      {children}
    </div>
    <footer className="card-footer">

    </footer>
  </div>
}

function App() {
  return <div className="container" style={{marginTop:"32px"}}>
    <Card caption="preact sample">
      <div style={{height:200}}></div>
    </Card>
  </div>;
}

render(<App />, document.querySelector("#root"));