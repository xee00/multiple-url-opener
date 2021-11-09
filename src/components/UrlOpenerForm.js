import React, {Component} from "react";

class UrlOpenerForm extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    urls : [],
    number_of_urls : 0,
    number_of_valid_urls : 0
  }

  sum = (array) => {
    return array.reduce((a,b) => a + b, 0)
  }

  // credits: https://stackoverflow.com/a/5717133
  isValidURL = (str) => {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

  addProtocolIfMissing = (url) => {
    if (url.toLowerCase().startsWith("http")){
      return url
    } else {
      return "https://" + url
    }
  }

  open = () => {
    var urls = this.state.urls
    for (var i = 0; i < urls.length; i++) {
      let url = this.addProtocolIfMissing(urls[i])
      window.open(url);
    }
  }

  formatTextarea = (area) => {
    if (area.children.length == 0) {
      if (this.isValidURL(area.textContent)) {
        area.style.color="green"
      } else {
        area.style.color="red"
      }
    }
    for (let i=0; i<area.children.length; i++){
      if (this.isValidURL(area.children[i].textContent)) {
        area.children[i].style.color = "green"
      } else {
        area.children[i].style.color = "red"
      }
    }
  }

  handleInput = (e) => {
    this.setState({urls: e.currentTarget.innerText.split(" ").join("").split("\n").filter(e =>  e)}) // replace all spaces, split lines, remove empty strings
    this.setState({number_of_urls: this.state.urls.length})
    this.setState({number_of_valid_urls: this.sum(this.state.urls.map(this.isValidURL))})
    this.formatTextarea(e.currentTarget)
    this.forceUpdate()
  }

  render() {
    return (
      <form className="w-full">
        <div className="mb-4">
          <div className="bg-white h-96 p-2  bg-gray-300" contentEditable={true} onInput={this.handleInput}>
          </div>
        </div>
        <div className="flex justify-between">
        <label
            className="block text-gray-400 text-sm mb-2"
          >
            {this.state.number_of_urls} URLs ({this.state.number_of_valid_urls} valid, not valid ones will be skipped)
          </label>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={this.open}
          >
            Open
          </button>
        </div>
      </form>
    );
  }
}

export default UrlOpenerForm;