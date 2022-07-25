import React from "react"

import CMS from 'netlify-cms-app'
// Initialize the CMS object


<><script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script></>

const Login = props => {
  CMS.init()
// Now the registry is available via the CMS object.

  return <button onClick={props.showNetlifyLoginModal}>Login</button>
}

export default Login