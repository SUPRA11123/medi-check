function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const password = (form.elements.namedItem('password') as HTMLInputElement).value;

        fetch('http://localhost:4000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        })
        .then(res => res.json())
        .then(data => alert(JSON.stringify(data)));
      }}>
        <input name="email" placeholder="Email" />
        <input name="password" placeholder="Password" type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
