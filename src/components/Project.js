import { ArrowRight } from 'react-bootstrap-icons';

function Project(props) {
    return (
        <div className="project">
            <div className="project-header">
                <div className={ `project-label ${props.type}` }>{ props.label }</div>
            </div>
            <div className="project-body">
                <div className="project-title">
                    <h4>{ props.title }</h4>
                    <span className="tags">{ props.tags }</span>
                </div>
                <p>{ props.description }</p>
                <a href={ props.url } target={'_blank'} rel='noreferrer' className="project-footer">
                    <div className="url">{ props.urlText }</div>
                    <ArrowRight size={20} />
                </a>
            </div>
        </div>
    );
}

export default Project;