import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    inputChange = e => {
      const { name, value } = e.currentTarget;
      this.setState({ [name]: value});
    };
    formSabmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.resetForm();
    };

    resetForm = () => { this.setState({ name: '', number: '' }); };
    
    render() {
        return (
            <form  className="form"onSubmit={this.formSabmit}>
             <label >
               Имя
               <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={this.state.name}
                onChange={this.inputChange}
               />
                </label>
             <label >
               Номер телефона
               <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                value={this.state.number}
                onChange={this.inputChange}
               />
             </label>
             <button title="submit">Добавить контакт</button>
            </form>
        );
    };
};

export default Form;