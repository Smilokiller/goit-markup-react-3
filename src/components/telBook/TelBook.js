import React, { Component } from "react";
import { TelInput } from "./telInput/TelInput";
import { ContactList } from "./telInput/ContactList";
import { FindInput } from "./telInput/FindInput";
import { v4 as uuidv4 } from "uuid";

export class TelBook extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem("contacts")),
    filter: "",
    name: "",
    number: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.contacts !== null) {
      const lookingFor = this.state.contacts.find(
        (el) => el.name === this.state.name
      );
      if (lookingFor) {
        alert("This user already in contact list");
        this.setState({ name: "", number: "" });
      } else {
        localStorage.setItem(
          "contacts",
          JSON.stringify([
            ...this.state.contacts,
            { id: uuidv4(), name: this.state.name, number: this.state.number },
          ])
        );

        this.setState({
          contacts: JSON.parse(localStorage.getItem("contacts")),
        });

        this.setState({ name: "", number: "" });
      }
    } else {
      this.setState({
        contacts: [],
      });
      localStorage.setItem(
        "contacts",
        JSON.stringify([
          ...this.state.contacts,
          { id: uuidv4(), name: this.state.name, number: this.state.number },
        ])
      );
      this.setState({
        contacts: JSON.parse(localStorage.getItem("contacts")),
      });
    }
  };

  handleFilter = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.findContact);
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((el) => el.id !== id),
    }));
  };

  render() {
    const filterarr = this.state.contacts.filter((el) => {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
      const name = el.name.toLowerCase();
      const filterName = this.state.filter.toLowerCase();
      if (name.includes(filterName)) {
        return el;
      }
    });

    return (
      <>
        <h2>Name</h2>
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <TelInput
            name={"name"}
            onChange={this.handleChange}
            value={this.state.name}
          />
          <TelInput
            name={"number"}
            onChange={this.handleChange}
            value={this.state.number}
          />

          <button type="input">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <FindInput onChange={this.handleFilter} />
        <ul>
          {filterarr.map((el) => (
            <ContactList contactsList={el} onClick={this.handleDelete} />
          ))}
        </ul>
      </>
    );
  }
}
