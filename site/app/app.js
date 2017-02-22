import React from 'react'
import ReactDOM from 'react-dom'
import Header from './App/Header.js'
import AuthBox from './Authentication/AuthBox'

let root = document.getElementById('root')
ReactDOM.render(<div><Header /><AuthBox/></div>, root);
