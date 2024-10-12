import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const members = [
    { 
        name: 'Tony Stark', 
        logo: 'https://via.placeholder.com/50', 
        github: '#', 
        instagram: '#', 
        linkedin: '#' },
    { 
        name: 'Thor Odinson', 
        logo: 'https://via.placeholder.com/50', 
        github: '#', 
        instagram: '#', 
        linkedin: '#' },
    { 
        name: 'Bruce Banner', 
        logo: 'https://via.placeholder.com/50', 
        github: '#', 
        instagram: '#', 
        linkedin: '#' },
    { 
        name: 'Steve Rogers', 
        logo: 'https://via.placeholder.com/50', 
        github: '#', 
        instagram: '#', 
        linkedin: '#' },
    { 
        name: 'Clint Barton', 
        logo: 'https://via.placeholder.com/50', 
        github: '#', 
        instagram: '#', 
        linkedin: '#' },
    { 
        name: 'Natasha Romanoff', 
        logo: 'https://via.placeholder.com/50', 
        github: '#', 
        instagram: '#', 
        linkedin: '#' },
];

function Github() {
    return (
        <div className="bg-white text-gray-900 p-10 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-center mb-8">Team Elite</h1>
            <img src="https://cdn.marvel.com/content/1x/001avn_ons_inl_02_0.jpg" alt="Team Elite" className="w-full h-auto max-w-2xl mx-auto mb-8" />

            <div className="flex flex-wrap justify-center">
                {members.map((member, index) => (
                    <div key={index} className="bg-gray-100 p-6 m-4 rounded-lg shadow-lg max-w-xs flex flex-col items-center">
                        <img src={member.logo} alt={member.name} className="w-20 h-20 rounded-full mb-4" />
                        <h2 className="text-xl font-semibold">{member.name}</h2>
                        <div className="flex space-x-4 mt-4">
                            <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-blue-600"><FaGithub /></a>
                            <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-pink-600"><FaInstagram /></a>
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 hover:text-blue-700"><FaLinkedin /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Github;
