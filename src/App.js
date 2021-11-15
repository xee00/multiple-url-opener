import React from "react";
import ReactDOM from "react-dom";
import "./styles/output.css";
import Navbar from "./components/Navbar";
import UrlOpenerForm from "./components/UrlOpenerForm";

// the main component of the project
class App extends React.Component {
  componentDidMount() {
    document.title = "MultiUrlOpener v1.0";
  }
  render() {
    return (
      <div className="">
        <Navbar></Navbar>
        <div className="">
          <div className=" flex justify-center">
            <div className="w-11/12 lg:w-5/6 xl:w-4/6 2xl:w-3/6 ">
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
