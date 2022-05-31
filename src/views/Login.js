import React from 'react';
import xdimg from '../assets/xd.png'
import '../login.css'

const Login = () => {
    return(
        <>
            <div className='container'>
                <div className='container-login'>
                    <form className='container-login-form'>
                        <span className='login-form-title'>Bem vindo</span>
                        <span className='login-form-title'>
                            <img src={xdimg} alt='logo'/>
                        </span>

                        <label for='usuario' className='login-form-user'>Usuario: </label>
                        <input type='text'/>
                        <label for='senha' className='login-form-user'>Senha: </label>
                        <input for='text'/>

                        <button type='button' className='login-form-button'>Login</button>
                        <span className='login-form-cad'>Ainda não possui conta? <a href='#'>Cadastre-se</a></span>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login