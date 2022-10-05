
import Project from './Project';
// import Use from '../components/Use';

const Main = () => {
    return (
        <div className="home">
            <div id="projects">
                <h2>Projects</h2>
                <section>
                    <div className="projects">
                        <Project label="Main Project" title="Slait"
                            tags="React Native, ExpressJS, MongoDb" url="https://slait.net" urlText="slait.net"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit nisl eu enim laoreet, id malesuada nisi eleifend. Sed condimentum in lacus eu pulvinar." />

                        <Project label="Main Project" title="Eleos"
                            tags="Ionic, LogSnag, React.js" url="https://eleos.app" urlText="eleos.app"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit nisl eu enim laoreet, id malesuada nisi eleifend. Sed condimentum in lacus eu pulvinar." />

                        <Project label="Side Project" title="NoName" type='side-project'
                            source='https://github.com/Savvy/noname'
                            tags="NodeJS, NuxtJS, MongoDb" url="https://noname.red" urlText="noname.red"
                            description="NoName is an open sourced modern forum software. Built using NuxtJS on the frontend while also making use of NodeJs, Express, and MongoDb on the backend. Including multiple forms of authentication and extensive configuration." />

                        <Project label="Commission" title="DesertMC Discord Bot" type='commission'
                            tags="Javascript, discord.js" url="https://discord.gg/desertmc" urlText="discord.gg/desertmc"
                            description="This bot was commissioned to include reaction roles, giveaways, various commands, action logging and a ticketing system. This bot also includes full configuration." />

                        <Project label="Commission" title="Enardo Servers" type='commission'
                            tags="Javascript, NuxtJS" url="https://enardoservers.com" urlText="enardoservers.com"
                            description="Design and developed a landing page for a Rust game server as well as a theme for Tebex.io, a game server monetization platform. Project makes api calls to a rust game server api providing live player count." />

                        <Project label="Commission" title="Supremium Host" type='commission'
                            source='https://github.com/Savvy/supremium-host'
                            tags="HTML5, CSS, Javascript" url="https://savvy.github.io/supremium-host/" urlText="savvy.github.io/supremium-host"
                            description="Designed and developed a hosting company's landing page." />

                        <Project label="Commission" title="Pyronic Landing" type='commission'
                            source='https://github.com/Savvy/Pyronic'
                            tags="HTML5, CSS, Javascript" url="https://savvy.github.io/Pyronic/" urlText="savvy.github.io/pyronic"
                            description="Designed and developed a landing page for an eSports Organization." />

                        <Project label="Side Project" title="FirstCinema" type='side-project'
                            source='https://github.com/firstcinema/firstcinema.github.io'
                            tags="HTML5, CSS, Javascript, Vue.Js" url="https://firstcinema.github.io/" urlText="firstcinema.github.io"
                            description="Designed and developed a movie review site." />

                        <Project label="Commission" title="NinjaNode" type='commission'
                            source='https://github.com/Savvy/NinjaNode/'
                            tags="HTML5, CSS, Javascript" url="https://savvy.github.io/NinjaNode/" urlText="savvy.github.io/NinjaNode"
                            description="Designed and developed a hosting company's landing page." />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Main;