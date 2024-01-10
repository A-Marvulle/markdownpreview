import './App.css';
import { useState } from 'react';
import { marked } from 'marked';

function App() {
  const placeholder = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`

  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.


  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
  
  const [text, setText] = useState(placeholder);
  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="App">
    <div className="fluid-container d-flex flex-column align-items-stretch">
      <div className="row m-xl-2 flex-grow-1 justify-content-center">

        <div className="col-5 m-4">
          <h2 className='text-center'>Input</h2>
          <hr style={{ margin: '10px 0', width: '100%' }} />
          <textarea
            id="editor"
            onChange={(event) => {
              setText(event.target.value);
            }}
            value={text}
            className="form-control border border-2 border-dark rounded p-3"
            style={{ height: '80vh' }} 
          ></textarea>
        </div>
  
        <div className="col-5 m-4">
        <h2 className='text-center'>Output</h2>
          <hr style={{ margin: '10px 0', width: '100%' }} />
          <div className="overflow-auto border border-2 border-dark rounded p-3 bg-white" style={{ maxHeight: '80vh', minHeight: '80vh' }}>
            <div
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked(text) }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default App;
