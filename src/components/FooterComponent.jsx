import { useState, useEffect } from 'react';

const FooterComponent = () => {
    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        const fetchContributors = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/KelySaina/c3lf/contributors');
                if (!response.ok) {
                    throw new Error('Failed to fetch contributors');
                }
                const data = await response.json();
                // Fetch additional data for each contributor
                const contributorsWithDetails = await Promise.all(
                    data.map(async contributor => {
                        const userResponse = await fetch(`https://api.github.com/users/${contributor.login}`);
                        if (!userResponse.ok) {
                            throw new Error(`Failed to fetch user details for ${contributor.login}`);
                        }
                        const userData = await userResponse.json();
                        return {
                            id: contributor.id,
                            login: contributor.login,
                            avatar_url: userData.avatar_url,
                            html_url: contributor.html_url
                        };
                    })
                );
                setContributors(contributorsWithDetails);
            } catch (error) {
                console.error('Error fetching contributors:', error);
            }
        };
        fetchContributors();
    }, []);

    return (
        <footer className="bg-gray-800 py-3">
            <div className="container mx-auto px-4">
                <div className="flex flex-col justify-center items-center">
                    <h3 className="text-white text-sm">
                        {contributors.length === 0 ? "" : contributors.length > 1 ? `${contributors.length} Contributors` : `${contributors.length} Contributor`}
                    </h3>
                    <ul className="flex flex-wrap items-center justify-center ml-4">
                        {contributors.map(contributor => (
                            <li key={contributor.id} className="mx-2 my-2">
                                <a href={contributor.html_url} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={contributor.avatar_url}
                                        alt={`Avatar of ${contributor.login}`}
                                        className="w-8 h-8 sm:w-12 sm:h-12 rounded-full"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
