export default function SignUp() {
	return (
		<form>
			<label>
				<p>Username</p>
				<input type='text' name='username' />
			</label>
			<label>
				<p>Password</p>
				<input type='password' name='password' />
			</label>
			<div>
				<button typ='submit'>Sign Up</button>
			</div>
		</form>
	);
}
