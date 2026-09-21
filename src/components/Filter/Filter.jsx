
import styles from './Filter.module.css'

function Filter ({hedlelInput}){

        return (
            <>
            <p>Find contact by name</p>
            <input className={styles.inp} type="text" onChange={hedlelInput} />
            </>

        )
    
}

export default Filter