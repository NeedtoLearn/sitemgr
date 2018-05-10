import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown direction="right" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Action
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem>Start</DropdownItem>
            <DropdownItem>Stop</DropdownItem>
            <DropdownItem>Restart</DropdownItem>
            <DropdownItem>Kill</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}