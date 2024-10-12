import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // Define a skills mapping based on languages
    const languageSkills = {
        JavaScript: 'Web Development, Front-end Development, React.js',
        Python: 'Backend Development, Data Analysis, Machine Learning',
        HTML: 'Web Design, Front-end Development',
        CSS: 'Web Design, Styling, Responsive Design',
        Java: 'Backend Development, Object-Oriented Programming',
        Ruby: 'Backend Development, Web Development',
        TypeScript: 'Web Development, Front-end Development, Strong Typing',
        PHP: 'Backend Development, Server-Side Scripting',
        C: 'System Programming, Low-Level Development',
        'C++': 'System Programming, Game Development',
    }
    const skills = data.languages.map(language => languageSkills[language] || 'General Programming Skills')

    return (
        <div className='bg-white text-gray-900 p-10 rounded-lg shadow-lg'>
            <div className='flex items-center'>
                <div className='w-1/3'>
                    <img src={data.user.avatar_url} alt="Git profile" width={200} className='rounded-full border-4 border-gray-200'/>
                </div>

                <div className='w-2/3 pl-6'>
                    <p className='text-3xl font-semibold'>{data.user.name || "N/A"}</p>
                    <p className='text-xl text-gray-700'>{data.user.login}</p>
                    <div className='flex justify-center items-center mt-4'>
                        <p className='mr-6 text-lg'>
                            <a href={`https://github.com/${data.user.login}?tab=followers`} target="_blank" rel="noopener noreferrer" className='font-semibold text-blue-600'>
                                {data.user.followers}
                            </a> Followers
                        </p>
                        <p className='mr-6 text-lg'>
                            <a href={`https://github.com/${data.user.login}?tab=following`} target="_blank" rel="noopener noreferrer" className='font-semibold text-blue-600'>
                                {data.user.following}
                            </a> Following
                        </p>
                        <p className='text-lg'>
                            <a href={`https://github.com/${data.user.login}?tab=repositories`} target="_blank" rel="noopener noreferrer" className='font-semibold text-blue-600'>
                                {data.user.public_repos}
                            </a> Repos
                        </p>
                    </div>
                </div>
            </div>            
            <div className='mt-8 text-center'>
                <p className='text-2xl font-semibold text-gray-800'>Skills:</p>
                <div className='flex flex-wrap justify-center mt-2'>
                    {skills.map((skill, index) => (
                        <span 
                            key={index} 
                            className='bg-cream text-gray-900 p-3 m-2 rounded-lg text-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const userResponse = await fetch('https://api.github.com/users/aloneking789')
    const userData = await userResponse.json()

    const repoResponse = await fetch('https://api.github.com/users/aloneking789/repos')
    const repoData = await repoResponse.json()
    const languageCounts = {}
    repoData.forEach(repo => {
        if (repo.language) {
            languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1
        }
    })

    const sortedLanguages = Object.keys(languageCounts)
                                  .sort((a, b) => languageCounts[b] - languageCounts[a])

    return {
        user: userData,
        languages: sortedLanguages, 
    }
}
