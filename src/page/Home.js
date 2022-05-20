import { ReactComponent as VSCode } from '../icons/vsc.svg';
import { ReactComponent as Github } from '../icons/github.svg'
import { ReactComponent as Nuxt } from '../icons/nuxt.svg';
import { ReactComponent as Medusa } from '../icons/medusa.svg';
import { ReactComponent as Strapi } from '../icons/strapi.svg';

import { ReactComponent as Discord } from '../icons/discord.svg';
import { ReactComponent as Render } from '../icons/render.svg';
import { ReactComponent as Figma } from '../icons/figma.svg';
import { ReactComponent as Espanso } from '../icons/espanso.svg';
import { ReactComponent as Brave } from '../icons/brave.svg';
import { ReactComponent as ShareX } from '../icons/sharex.svg';
import { ReactComponent as Bitwarden } from '../icons/bitwarden.svg';

import Use from '../components/Use';
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
                        <Use icon={<VSCode />} name='VSCode' url='https://code.visualstudio.com/' background='#3C99D4' />
                        <Use icon={<Github />} name='Github' url='https://github.com/' background='#24292F' />
                        <Use icon={<Nuxt />} name='Nuxt.js' url='https://nuxtjs.org/' background='#00DC82' />
                        <Use icon={<Medusa />} name='Medusa' url='https://medusajs.com/' background='linear-gradient(224.82deg, #F796FF -7.3%, #7C3AED 101.29%)' />
                        <Use icon={<Strapi />} name='Strapi' url='https://strapi.io/' background='#4E26E0' />
                    </div>
                </section>
                <section>
                    <h5>Apps</h5>
                    <div className="uses">
                        <Use icon={<Discord />} name='Discord' url='https://discord.com/' background='#5865F2' />
                        <Use icon={<Figma />} name='Figma' url='https://www.figma.com/' background='#A259FF' />
                        <Use icon={<Espanso />} name='Espanso' url='https://espanso.org/' background='linear-gradient(207.38deg, #303030 18.35%, #232323 84.67%)' />
                        <Use icon={<Brave />} name='Brave' url='https://brave.com/' background='#FF2000' />
                        <Use icon={<ShareX />} name='ShareX' url='https://getsharex.com/' background='#00A822' />
                    </div>
                </section>
                <section>
                    <h5>Services</h5>
                    <div className="uses">
                        <Use icon={<Render />} name='Render' url='https://render.com/' background='#0fe0b6' />
                        <Use icon={<Bitwarden />} name='Bitwarden' url='https://bitwarden.com/' background='#175DDC' />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;