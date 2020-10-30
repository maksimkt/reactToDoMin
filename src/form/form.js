import React from 'react';
import '../form/form.css';

class SingInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'enter your email',
            password: ' enter your password',
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
    }
    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    handleChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit(e) {
        alert(this.state.email + this.state.password)
    }


    render() {
        return(
            <div className='form-box'>
                
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <h1>sing in to your acount</h1>     
                        <input className="input-text" type="email" value={this.state.email} onChange={this.handleChangeEmail} placeholder/>
                        <input className="input-text" type="password" value={this.state.password} onChange={this.handleChangePassword} placeholder/>
                        <label>
                            
                            <input type="checkbox" required/>
                            keep me singned in
                        </label>
                        <input className='submit-btn' type="submit" value='Sing in'/>
                        <a href = "#">forgot your password?</a> 
                    </div>    
                </form>
                
            </div>
        )};
}
export default SingInForm