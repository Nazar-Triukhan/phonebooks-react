import { use, useContext } from 'react'
import styles from './Filter.module.css'
import { ContactContext } from '../../ContactContext'

function Filter (){

    const {hedlelInput} = useContext(ContactContext)


        return (
            <>
            <p>Find contact by name</p>
            <input className={styles.inp} type="text" onChange={hedlelInput} />
            </>

        )
    
}

export default Filter