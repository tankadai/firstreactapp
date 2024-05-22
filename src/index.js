import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const MyComponent = () => {
  return (
    <div>
      <p>This is Tanka.EXE</p>
      <div>
        <button>Button 1</button>
        <button>Button 2</button>
      </div>
      <div>
        <a href="/Resume.pdf" download="MyCV.pdf">
          <button>Download CV</button>
        </a>
        <a href="/public/tanka2017.png" download="tanka2017.png">
          <button>Download Image</button>
        </a>
      </div>
    </div>
  );
};
ReactDOM.render(<MyComponent />, document.getElementById('root'));
