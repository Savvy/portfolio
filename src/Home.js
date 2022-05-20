import { ReactComponent as VSCode } from './icons/vsc.svg';
import { ReactComponent as Github } from './icons/github.svg'
import { ReactComponent as Nuxt } from './icons/nuxt.svg';
import { ReactComponent as Medusa } from './icons/medusa.svg';
import { ReactComponent as Strapi } from './icons/strapi.svg';
import { ArrowRight } from 'react-bootstrap-icons';

const Home = () => {
    return (
        <div className="home">
            <div id="projects">
                <h2>Projects</h2>
                <section>
                    <div className="projects">
                    <div className="project">
                            <div className="project-header">
                                <div className="project-label">Main Project</div>
                            </div>
                            <div className="project-body">
                                <div className="project-title">
                                    <h4>Eleos</h4>
                                    <span className="tags">Ionic, LogSnag, React.js</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit nisl eu enim laoreet, id malesuada nisi eleifend. Sed condimentum in lacus eu pulvinar.</p>
                                <a href='https://eleos.dev' target={'_blank'} rel='noreferrer' className="project-footer">
                                    <div className="url">eleos.dev</div>
                                    <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-header">
                                <div className="project-label">Main Project</div>
                            </div>
                            <div className="project-body">
                                <div className="project-title">
                                    <h4>Eleos</h4>
                                    <span className="tags">Ionic, LogSnag, React.js</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit nisl eu enim laoreet, id malesuada nisi eleifend. Sed condimentum in lacus eu pulvinar.</p>
                                <a href='https://eleos.dev' target={'_blank'} rel='noreferrer' className="project-footer">
                                    <div className="url">eleos.dev</div>
                                    <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-header">
                                <div className="project-label">Main Project</div>
                            </div>
                            <div className="project-body">
                                <div className="project-title">
                                    <h4>Eleos</h4>
                                    <span className="tags">Ionic, LogSnag, React.js</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit nisl eu enim laoreet, id malesuada nisi eleifend. Sed condimentum in lacus eu pulvinar.</p>
                                <a href='https://eleos.dev' target={'_blank'} rel='noreferrer' className="project-footer">
                                    <div className="url">eleos.dev</div>
                                    <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-header">
                                <div className="project-label">Main Project</div>
                            </div>
                            <div className="project-body">
                                <div className="project-title">
                                    <h4>Eleos</h4>
                                    <span className="tags">Ionic, LogSnag, React.js</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit nisl eu enim laoreet, id malesuada nisi eleifend. Sed condimentum in lacus eu pulvinar.</p>
                                <a href='https://eleos.dev' target={'_blank'} rel='noreferrer' className="project-footer">
                                    <div className="url">eleos.dev</div>
                                    <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div id="uses">
                <h2>What I use</h2>
                <section>
                    <h5>Development</h5>
                    <div className="uses">
                        <div className="use">
                            <div className="use-icon" style={{background: '#3C99D4'}}>
                                <VSCode />
                            </div>
                            <h6>VSCode</h6>
                        </div>
                        <div className="use">
                            <div className="use-icon" style={{background: '#24292F'}}>
                                <Github />
                            </div>
                            <h6>Github</h6>
                        </div>
                        <div className="use">
                            <div className="use-icon" style={{background: '#00DC82'}}>
                                <Nuxt />
                            </div>
                            <h6>Nuxt</h6>
                        </div>
                        <div className="use">
                            <div className="use-icon" style={{background: 'linear-gradient(224.82deg, #F796FF -7.3%, #7C3AED 101.29%)'}}>
                                <Medusa />
                            </div>
                            <h6>Medusa</h6>
                        </div>
                        <div className="use">
                            <div className="use-icon" style={{background: '#4E26E0'}}>
                                <Strapi />
                            </div>
                            <h6>Strapi</h6>
                        </div>
                    </div>
                </section>
                <section>
                    <h5>Apps</h5>
                    <div className="uses">
                        <div className="use">
                            <div className="use-icon" style={{background: '#4E26E0'}}>
                                <Strapi />
                            </div>
                            <h6>Strapi</h6>
                        </div>
                    </div>
                </section>
                <section>
                    <h5>Services</h5>
                    <div className="uses">
                        <div className="use">
                            <div className="use-icon" style={{background: '#4E26E0'}}>
                                <Strapi />
                            </div>
                            <h6>Strapi</h6>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;