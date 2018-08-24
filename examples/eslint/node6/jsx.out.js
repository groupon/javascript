'use strict';

const { Component } = require('preact');
const h = require('pyper');

class Child extends Component {
  render(props) {
    return h('i', { id: props.id }, 'Wrapped');
  }
}

module.exports = ({ h: h2 }) => h('.x', h('span.y.z', h(Child, { id: h2 })));
