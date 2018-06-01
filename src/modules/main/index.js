import React, { Component } from 'react'
import './style.css'
import { Input, Button, Modal } from 'components'
import { isErc20Valid } from 'utils';

class Main extends Component {

  state = {
    erc20Value: '',
    erc20AddressHasError: false,
    erc20AddressIsValid: false,
  }

  changeErc20Value = ({target: {value: erc20Value }}) => {
    this.setState({
      erc20Value,
    })
    this.removeErrorFromErc20Value()
  }

  removeErrorFromErc20Value = () => {
    this.setState({
      erc20AddressHasError: false,
      erc20AddressIsValid: false,
    })
  }

  checkErc20Address = () => {
    const { erc20Value } = this.state;

    const erc20Validilidation = isErc20Valid(erc20Value);

    this.setState({
      erc20AddressHasError: !erc20Validilidation,
      erc20AddressIsValid: erc20Validilidation
    });
  }

  render () {
    const { erc20Value, erc20AddressHasError, erc20AddressIsValid } = this.state;


    const modalActions = [
      { text: 'Close', onClick: this.removeErrorFromErc20Value },
    ];

    return (
      <div className="main">
        <Input
          autoFocus
          value={erc20Value}
          label="Check Erc20 Wallet"
          isInvalid={erc20AddressHasError}
          invalidMessage={erc20AddressHasError && "The Address is not valid"}
          onChange={this.changeErc20Value}
        />
        <div className="main-button">
          <Button
            appearance="primary"
            onClick={this.checkErc20Address}
          >
            Check Address
          </Button>
          {erc20AddressIsValid && (
            <Modal
              heading="Ethereum Address"
              onClose={this.removeErrorFromErc20Value}
              actions={modalActions}
            >
              Your Address: {erc20Value} is Valid
            </Modal>
          )}
        </div>
      </div>
    )
  }
}

export default Main
