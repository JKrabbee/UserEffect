import axios from "axios";
import { useEffect, useState } from "react";
import Content from "../components/Content";
import Header from "../components/Header";

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

type Name = "JKrabbee" | "RafaelApolinario" | "guilhermebari";

function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [gitName, setGitName] = useState<Name>("JKrabbee");

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    const fetchUserData = async () => {
      try {
        const response = await axios.get<UserData>(
          `https://api.github.com/users/${gitName}`,
          {
            cancelToken: cancelTokenSource.token,
          }
        );
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchUserData();

    return () => {
      cancelTokenSource.cancel("Component unmounted or dependency changed");
    };
  }, [gitName]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userData) {
    return <p>No user data available.</p>;
  }

  function handleGitName(username: string) {
    switch (username) {
      case "JKrabbee":
        setGitName("JKrabbee");
        break;
      case "RafaelApolinario":
        setGitName("RafaelApolinario");
        break;
      case "guilhermebari":
        setGitName("guilhermebari");
        break;
      default:
    }
  }

  return (
    <>
      <Header funcao={handleGitName} />
      <Content userData={userData} />
    </>
  );
}

export default Home;
