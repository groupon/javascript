'use strict';

const { h, Component } = require('preact');

class Child extends Component {
  render(props) {
    return <i id={props.id}>Wrapped</i>;
  }
}

module.exports = ({ h }) => (
  <div className="x">
    <span class="y z"><Child id={h} /></span>
  </div>
);
