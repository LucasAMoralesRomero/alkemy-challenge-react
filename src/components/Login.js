function Login() {
    const submitHandler = e => {
        e.preventDefault();
        console.log('Se va a enviar el formulario ');
        //capturamos los campos del form
        const username = e.target.username.value;
        const password = e.target.password.value;
        if(username === '' || password === ''){
            console.log('LOs campos no pueden estar vacios!!!');
            return;
        }
        //vamos a hacer un mockup de validacion, dando los datos de usuario y password que deberia tener
        if(username !== 'challenge@alkemy.org' || password !== 'react') {
            console.log('Credenciales invalidas!');
            return;
    }
}

    return (
        <>
        <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <br/>
                <span>Usuario:</span> 
                <br/>
                <input type="text" name="username" placeholder="Usuario" />
                <br/>
                <span>Contraseña</span>
                <br/>
                <input type="password" name="password" placeholder="Contraseña"/>
                <br/>
                <button type="submit">Iniciar sesión</button>
            </form> 
        </>
    )

}

export default Login;