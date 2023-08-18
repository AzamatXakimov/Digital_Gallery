import React from 'react';
import InputMask from 'react-input-mask';

class PhoneInput extends React.Component {
    render() {
        return (
        <InputMask
            mask="+999 (99) 999 99 99"
            maskChar="_"
            placeholder="Telefon raqam" 
            aria-label="Enter your phone number"
            alwaysShowMask={false}
            className="login-form-input"
            value={this.props.value}
            onChange={this.props.onChange}
            required
        />
        );
    }
}

export default PhoneInput;