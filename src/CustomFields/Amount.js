import React, { Component } from "react";
import CurrencyInput from "react-currency-input";

export default class Amount extends Component {
  handleChange = e => {
    this.props.input.onChange(this.refs.myinput.state.value);
  };

  render() {
    const { help, required, disabled, markdown, label, input } = this.props;
    const { touched, error, warning } = this.props.meta;
    return (
      <div>
        <CurrencyInput
          value={input.value}
          onChangeEvent={this.handleChange}
          disabled={disabled}
          ref="myinput"
        />
      </div>
    );
  }
}
