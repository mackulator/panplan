import { useState } from "react";
import { useNavigate } from "react-router-dom"
import logo from './assets/logo.png'


function SignupForm(props) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	// const navigate = useNavigate();


	async function Signup(e) {
		// e.preventDefault();
		const url = 'http:localhost:8000/accounts'
		const response = await fetch(url, {
		method: "post",
		body: JSON.stringify({
			username,
			password,
			confirmPassword,
		}),
		headers: {
			"Content-Type": "application/json",
		},
		});
		let jsonResponse = await response.json();
		if (response.ok && jsonResponse !== null) {
		setUsername("");
		setPassword("");
		setConfirmPassword("");
		// navigate("/login");
		} else {
		alert(
			"Your signup failed. The most likely reason is you tried a username that is taken."
		);
		}
	}





	return (
		<>
		<div className="wrapper">
			<div className="logo">
			{<img src={logo} height="100"/>}PanPlan
			</div>
		<div className="row">
			<form className="p-3 mt-3" onSubmit={Signup}>
			<div className="form-field d-flex align-items-center">
				<span className="***CHANGE***"></span>
				<input
				value={username}
				type="username"
				onChange={(e) => setUsername(e.target.value)}
				className="form-control"
				id="username"
				aria-describedby="username"
				placeholder="Enter Username"
				/>
			</div>
			<div className="form-field d-flex align-items-center">
				<span className="***CHANGE***"></span>
				<input
				value={password}
				type="password"
				onChange={(e) => setPassword(e.target.value)}
				className="form-control"
				id="password"
				aria-describedby="password"
				placeholder="Enter Password"
				/>
			</div>
			<div className="form-field d-flex align-items-center">
				<span className="***CHANGE***"></span>
				<input
				value={confirmPassword}
				type="password"
				onChange={(e) => setConfirmPassword(e.target.value)}
				className="form-control"
				id="confirm-password"
				aria-describedby="confirm-password"
				placeholder="Confirm Password"
				/>
			</div>
			<button className="btn mt-3">Sign up</button>
			</form>
			<div className="text-center fs-6">
			<a href="/login">Log in</a>
			{/* </div> */}
		</div>
		</div>
		</div>
		</>
	);
}

export default SignupForm;