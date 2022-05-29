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

import Project from '../components/Project';
import Use from '../components/Use';

const Home = () => {
    return (
        <div className="home">
            <div id="projects">
                <h2>Projects</h2>
                <section>
                    <div className="projects">
                        <Project label="Main Project" title="Eleos"
                            tags="Ionic, LogSnag, React.js" url="https://eleos.app" urlText="eleos.app"
                            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit nisl eu enim laoreet, id malesuada nisi eleifend. Sed condimentum in lacus eu pulvinar." />

                        <Project label="Side Project" title="NoName" type='side-project'
                            tags="NodeJS, NuxtJS, MongoDb" url="https://noname.red" urlText="noname.red"
                            description= "NoName is an open sourced modern forum software. Built using NuxtJS on the frontend while also making use of NodeJs, Express, and MongoDb on the backend. Including multiple forms of authentication and extensive configuration." />

                        <Project label="Commission" title="DesertMC Discord Bot" type='commission'
                            tags="Javascript, discord.js" url="https://discord.gg/desertmc" urlText="discord.gg/desertmc"
                            description= "This bot was commissioned to include reaction roles, giveaways, various commands, action logging and a ticketing system. This bot also includes full configuration." />

                        <Project label="Commission" title="Enardo Servers" type='commission'
                            tags="Javascript, NuxtJS" url="https://enardoservers.com" urlText="enardoservers.com"
                            description= "Design and developed a landing page for a Rust game server as well as a theme for Tebex.io, a game server monetization platform. Project makes api calls to a rust game server api providing live player count." />

                        <Project label="Commission" title="Supremium Host" type='commission'
                            tags="HTML5, CSS, Javascript" url="https://savvy.github.io/supremium-host/" urlText="savvy.github.io/supremium-host"
                            description= "Designed and developed a hosting company's landing page." />

                        <Project label="Commission" title="Pyronic Landing" type='commission'
                            tags="HTML5, CSS, Javascript" url="https://savvy.github.io/Pyronic/" urlText="savvy.github.io/pyronic"
                            description= "Designed and developed a landing page for an eSports Organization." />

                        <Project label="Side Project" title="FirstCinema" type='side-project'
                            tags="HTML5, CSS, Javascript, Vue.Js" url="https://firstcinema.github.io/" urlText="firstcinema.github.io"
                            description= "Designed and developed a movie review site." />

                        <Project label="Commission" title="NinjaNode" type='commission'
                            tags="HTML5, CSS, Javascript" url="https://savvy.github.io/NinjaNode-Frontend/" urlText="savvy.github.io/NinjaNode-Frontend"
                            description= "Designed and developed a hosting company's landing page." />
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