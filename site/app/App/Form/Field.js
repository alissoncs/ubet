import React from 'react'

export default class Field extends React.Component {

  render() {

    return <p>{'Field: ' + this.props.name + ' - ' + this.props.type }</p>

  }

}
