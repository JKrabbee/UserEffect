import axios from "axios";
import { useEffect, useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";

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

type Name = "JKrabbee" | "RafaelApolinario";

function App() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [gitName, setGitName] = useState<Name>("JKrabbee");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get<UserData>(
          `https://api.github.com/users/${gitName}`
        );
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

  function handleGitName(id: number) {
    if (id === 1) {
      setGitName("JKrabbee");
    } else if (id === 2) {
      setGitName("RafaelApolinario");
    }
  }

  return (
    <>
      <Header funcao={handleGitName} />
      <Content userData={userData} />
    </>
  );
}

export default App;
