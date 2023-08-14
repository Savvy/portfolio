import VSCode from './icons/vsc.svg';
import Github from './icons/github.svg';
import Nuxt from './icons/nuxt.svg';
import Medusa from './icons/medusa.svg';
import Strapi from './icons/strapi.svg';

import Discord from './icons/discord.svg';
import Render from './icons/render.svg';
import Figma from './icons/figma.svg';
import Espanso from './icons/espanso.svg';
import Brave from './icons/brave.svg';
import ShareX from './icons/sharex.svg';
import Bitwarden from './icons/bitwarden.svg';

import Project from './Project';
import Use from './Use';

import projects from '../data/projects';

const Main = () => {
    return (
        <div className="home">
            <div id="projects">
                <h2>Projects</h2>
                <section>
                    <div className="projects">
                        {/*
                        <Project label="Side Project" title="NoName" type='sideProject'
                            source='https://github.com/Savvy/noname'
                            tags="NodeJS, NuxtJS, MongoDb" url="https://noname.red" urlText="noname.red"
                            description="NoName is an open sourced modern forum software. Built using NuxtJS on the frontend while also making use of NodeJs, Express, and MongoDb on the backend. Including multiple forms of authentication and extensive configuration." />
                        */}
                        {!!projects && projects.map((project) => (
                            <Project
                                key={project.title}
                                label={project.label}
                                title={project.title}
                                type={project.type}
                                source={!!project.source ? project.source : false}
                                tags={project.tags}
                                url={project.url}
                                urlText={project.urlText}
                                description={project.description}
                                image={project.image}
                            />
                        ))}
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
                        <Use icon={<Brave />} name='Brave' url='https://brave.com/' background='#c2220c' />
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

export default Main;