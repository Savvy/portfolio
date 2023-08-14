import Image from 'next/image';
import styles from '../styles/project.module.css';
import { ArrowRight, Github } from 'react-bootstrap-icons';

function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.projectHeader}>
                <div className={styles.projectMeta}>
                    <div className={`${styles.projectLabel} ${styles[props.type] ?? ''}`}>{props.label}</div>
                    {props.source &&
                        <a href={props.source} target={'_blank'} className={styles.projectSource} rel="noreferrer">
                            <Github size={25} />
                        </a>
                    }
                </div>
                <div className={styles.projectImage} style={{ backgroundImage: `url('/projects/${props.image}.png')`}}></div>
                {/* <Image
                    src={`/projects/${props.image}.png`}
                    width={1920}
                    height={1080}
                    alt={`${props.title} Preview`}
                    className={styles.projectImage}
                    objectFit='cover'
                    
                /> */}
            </div>
            <div className={styles.projectBody}>
                <div className={styles.projectTitle}>
                    <h4>{props.title}</h4>
                    <span className={styles.tags}>{props.tags}</span>
                </div>
                <p>{props.description}</p>
                <a href={props.url} target={'_blank'} rel='noreferrer' className={styles.projectFooter}>
                    <div className={styles.url}>{props.urlText}</div>
                    <ArrowRight size={20} />
                </a>
            </div>
        </div>
    );
}

export default Project;