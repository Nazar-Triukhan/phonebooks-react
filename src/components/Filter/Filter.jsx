import { Component } from "react";
import styles from './Filter.module.css'

class Filter extends Component {


    render() {

        const {hedlelInput} = this.props
        return (
            <>
            <p>Find contact by name</p>
            <input className={styles.inp} type="text" onChange={hedlelInput} />
            </>

        )
    }
}

export default Filter