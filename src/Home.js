import { ReactComponent as VSCode } from './icons/vsc.svg';
import { ReactComponent as Github } from './icons/github.svg'
import { ReactComponent as Nuxt } from './icons/nuxt.svg';
import { ReactComponent as Medusa } from './icons/medusa.svg';
import { ReactComponent as Strapi } from './icons/strapi.svg';

import { ReactComponent as Discord } from './icons/discord.svg';
import { ReactComponent as Render } from './icons/render.svg';
import { ReactComponent as Figma } from './icons/figma.svg';
import { ReactComponent as Espanso } from './icons/espanso.svg';
import { ReactComponent as Brave } from './icons/brave.svg';
import { ReactComponent as ShareX } from './icons/sharex.svg';
import { ReactComponent as Bitwarden } from './icons/bitwarden.svg';
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
                                <div className="project-label side-project">Side Project</div>
                            </div>
                            <div className="project-body">
                                <div className="project-title">
                                    <h4>NoName</h4>
                                    <span className="tags">NuxtJS, NodeJS, MongoDb</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit nisl eu enim laoreet, id malesuada nisi eleifend. Sed condimentum in lacus eu pulvinar.</p>
                                <a href='https://noname.red' target={'_blank'} rel='noreferrer' className="project-footer">
                                    <div className="url">noname.red</div>
                                    <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-header">
                                <div className="project-label commission">Commission</div>
                            </div>
                            <div className="project-body">
                                <div className="project-title">
                                    <h4>DesertMC Discord Bot</h4>
                                    <span className="tags">Javascript, discord.js</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit nisl eu enim laoreet, id malesuada nisi eleifend. Sed condimentum in lacus eu pulvinar.</p>
                                <a href='https://discord.gg/desertmc' target={'_blank'} rel='noreferrer' className="project-footer">
                                    <div className="url">discord.gg/desertmc</div>
                                    <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-header">
                                <div className="project-label commission">Commission</div>
                            </div>
                            <div className="project-body">
                                <div className="project-title">
                                    <h4>Enardo Servers</h4>
                                    <span className="tags">NuxtJS</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit nisl eu enim laoreet, id malesuada nisi eleifend. Sed condimentum in lacus eu pulvinar.</p>
                                <a href='https://enardoservers.com' target={'_blank'} rel='noreferrer' className="project-footer">
                                    <div className="url">enardoservers.com</div>
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
                        <a href='https://code.visualstudio.com/' className="use">
                            <div className="use-icon" style={{background: '#3C99D4'}}>
                                <VSCode />
                            </div>
                            <h6>VSCode</h6>
                        </a>
                        <a href='https://github.com' className="use">
                            <div className="use-icon" style={{background: '#24292F'}}>
                                <Github />
                            </div>
                            <h6>Github</h6>
                        </a>
                        <a href='https://nuxtjs.org/' className="use">
                            <div className="use-icon" style={{background: '#00DC82'}}>
                                <Nuxt />
                            </div>
                            <h6>Nuxt</h6>
                        </a>
                        <a href='https://medusajs.com/' className="use">
                            <div className="use-icon" style={{background: 'linear-gradient(224.82deg, #F796FF -7.3%, #7C3AED 101.29%)'}}>
                                <Medusa />
                            </div>
                            <h6>Medusa</h6>
                        </a>
                        <a href='https://strapi.io/' className="use">
                            <div className="use-icon" style={{background: '#4E26E0'}}>
                                <Strapi />
                            </div>
                            <h6>Strapi</h6>
                        </a>
                    </div>
                </section>
                <section>
                    <h5>Apps</h5>
                    <div className="uses">
                        <a href='https://discord.com/' className="use">
                            <div className="use-icon" style={{background: '#5865F2'}}>
                                <Discord />
                            </div>
                            <h6>Discord</h6>
                        </a>
                        <a href='https://www.figma.com/' className="use">
                            <div className="use-icon" style={{background: '#A259FF'}}>
                                <Figma />
                            </div>
                            <h6>Figma</h6>
                        </a>
                        <a href='https://espanso.org/' className="use">
                            <div className="use-icon" style={{background: 'linear-gradient(207.38deg, #303030 18.35%, #232323 84.67%)'}}>
                                <Espanso />
                            </div>
                            <h6>Espanso</h6>
                        </a>
                        <a href='https://brave.com' className="use">
                            <div className="use-icon" style={{background: '#FF2000'}}>
                                <Brave />
                            </div>
                            <h6>Brave</h6>
                        </a>
                        <a href='https://getsharex.com/' className="use">
                            <div className="use-icon" style={{background: '#00A822'}}>
                                <ShareX />
                            </div>
                            <h6>ShareX</h6>
                        </a>
                    </div>
                </section>
                <section>
                    <h5>Services</h5>
                    <div className="uses">
                        <a href='https://render.com/' className="use">
                            <div className="use-icon" style={{background: '#0fe0b6'}}>
                                <Render />
                            </div>
                            <h6>Render</h6>
                        </a>
                        <a href='https://bitwarden.com/' className="use">
                            <div className="use-icon" style={{background: '#175DDC'}}>
                                <Bitwarden />
                            </div>
                            <h6>Bitwarden</h6>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;