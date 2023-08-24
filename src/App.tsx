import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header'
import Content from './co'

interface UserData {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  followers: number;
  following: number;
  public_repos: number;
  bio: string;
}

type Name = '' | 'JKrabbeee' | 'RafaelApolinario' 

function App() {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [gitName, setGitName] = useState<Name>('');
    
    
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
    <Header />
    <Content />
  )

}

export default App
