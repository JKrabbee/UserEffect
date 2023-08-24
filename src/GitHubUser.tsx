import axios from 'axios';
import { useEffect, useState } from 'react';


interface UserData {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  followers: number;
  following: number;
  public_repos: number;
}

type Name = 'JKrabbeee' | 'RafaelApolinario' 

function GitHubUser () {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [gitName, setGitName] = useState<Name>('JKrabbeee')

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get<UserData>(`https://api.github.com/users/${gitName}`);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [gitName]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userData) {
    return <p>No user data available.</p>;
  }

  return (
    <div>
      <h2>GitHub User: {userData.login}</h2>
      <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
      <p>Name: {userData.name}</p>
      <p>Location: {userData.location}</p>
      <p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p>
      <p>Public Repos: {userData.public_repos}</p>
    </div>
  );
};

export default GitHubUser;
