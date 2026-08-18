import { Component } from "react";
import style from './  ContactList.module.css'


class ContactList extends Component {


    render () {

        const {itemFilter, deleteItem} = this.props
        return (
             <ul className={style.list}>
          {itemFilter.map(({ name, number, id }) => {
            return (
              <li className={style.item} key={id}>
                <p>{name}: {number}</p>
                <button type="button" onClick={() => deleteItem(id)}>delete</button>
              </li>
            );
          })}
        </ul>
        )
    }
}

export default ContactList