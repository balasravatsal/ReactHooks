import { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarsons";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await response.json();
        setUser(user);
      } catch (e) {
        // console.log(e);
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <h2>Oops, there was an error</h2>;
  }

  return (
    <div>
      <img
        style={{ width: "150px", borderRedius: "25px" }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h4>Works at {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  );
};

export default MultipleReturnsFetchData;
