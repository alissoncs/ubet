import React from 'react'
import { Field, Button } from '../App/Form'

export default class AuthBox extends React.Component {

  _handleSubmit() {

    console.log('Clicked')

  }

  render() {

    return <div class={"auth-box"}>
      <Field name={'login'} type={'text'} />
      <Field name={'pass'} type={'password'} />
      <Button label={'Entrar'} onClick={ this._handleSubmit.bind() }/>
    </div>

  }

}
