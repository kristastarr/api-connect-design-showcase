import React from 'react'
import './login-page.scss';
import Userfront from "@userfront/react";

Userfront.init("8nw5y4yn");

const LoginForm = Userfront.build({
  toolId: "mlnnrkn"
});

const LoginPage = () => {
	return (
		<div>
			<LoginForm />
		</div>
	)
}

export default LoginPage