import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';

let marked = require('marked');

class App extends Component {
  state = {
    markdown: ''
  }

  updateMarkdown = function (newMarkdown) {
    this.setState({markdown: newMarkdown})
  }
log
  render() {
    return (
    <div className="App container">
      <div>
        <Form>
          <Form.Group controlId="formControlsTextarea">
            <Form.Label>Markdown Input</Form.Label>
              <Form.Control as="textarea" id="editor" placeholder="Enter Markdown" value={this.state.markdown} onChange={(event) => this.updateMarkdown(event.target.value)} />
          </Form.Group>
        </Form>
      </div>
        <div id="preview">
        <h1>Markdown Output</h1>
          <div dangerouslySetInnerHTML={{ __html: marked(this.state.markdown)}}>
          
        </div>
      </div>
    </div>
  );
  }
}

export default App;