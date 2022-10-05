import styles from '../styles/use.module.css';

function Use(props) {
    return (
        <a href={props.url} target={'_blank'} rel='noreferrer' className={styles.use}
            onMouseEnter={(e) => {
                e.target.style.background = props.background
            }}
            onMouseLeave={(e) => {
                e.target.style.background = '';
            }}
        >
            <div className={styles.useIcon} style={{ background: props.background }}>
                {props.icon}
            </div>
            <h6>{props.name}</h6>
        </a>
    );
}

export default Use;