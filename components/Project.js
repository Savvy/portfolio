import styles from '../styles/project.module.css';
import { ArrowRight, Github } from 'react-bootstrap-icons';

function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.projectHeader}>
                <div className={`${styles.projectLabel} ${styles[props.type] ?? ''}`}>{ props.label }</div>
                { props.hasOwnProperty('source') &&
                    <a href={ props.source } target={'_blank'} className={styles.projectSource} rel="noreferrer"><Github size={25} /></a>
                }
            </div>
            <div className={styles.projectBody}>
                <div className={styles.projectTitle}>
                    <h4>{ props.title }</h4>
                    <span className={styles.tags}>{ props.tags }</span>
                </div>
                <p>{ props.description }</p>
                <a href={ props.url } target={'_blank'} rel='noreferrer' className={styles.projectFooter}>
                    <div className={styles.url}>{ props.urlText }</div>
                    <ArrowRight size={20} />
                </a>
            </div>
        </div>
    );
}

export default Project;