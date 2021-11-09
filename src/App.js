import React from "react";
import ReactDOM from "react-dom";
import "./styles/output.css";
import Navbar from "./components/Navbar";
import UrlOpenerForm from "./components/UrlOpenerForm";

class App extends React.Component {
  componentDidMount() {
    document.title = "MultiUrlOpener";
  }
  render() {
    return (
      <div className="bg-gray-800 w-screen h-screen">
        <Navbar></Navbar>
        <div className="absolute left-0 top-0 w-screen">
          <div className=" flex items-center justify-center h-screen">
            <div className="w-3/6">
              <h1 className="text-xl mb-4 text-gray-400">
                Enter URLs you want to open
              </h1>
              <UrlOpenerForm></UrlOpenerForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
