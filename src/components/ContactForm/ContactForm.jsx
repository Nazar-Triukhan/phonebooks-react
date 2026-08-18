import { Component } from "react";
import style from './ContactForm.module.css'

class ContactForm extends Component {



    render() {

        const {hendelSend} = this.props
        return (
        <form onSubmit={hendelSend} className={style.form}>
          <p>Name:</p>
          <input
          className={style.inp}
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <p>Phone:</p>
          <input
          className={style.inp}
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit" className={style.btn}>Add contact</button>
        </form>
        )
    }
}

export default ContactForm