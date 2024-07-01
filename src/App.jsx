import React, { useEffect, useState } from "react";
import Profile from "./Components/Profile";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getMovieData } from "./Redux/movieSlice";

const App = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  // const [loading, setLoading] = useState(true);
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const { myMovie, loading } = useSelector((state) => state.movie);
  // const [myMovie, setMyMovie] = useState();
  // const getData = async () => {
  //   const response = await axios.get(
  //     "https://www.omdbapi.com/?i=tt3896198&apikey=d7f42210&s"
  //   );

  //   setMyMovie(response.data);
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  useEffect(() => {
    dispatch(getMovieData());
  }, []);

  return (
    <div>
      <div>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label>Name:</label>
          <input type="text" name="name" onChange={changeHandler} />
          <label>Email:</label>
          <input type="email" name="email" onChange={changeHandler} />
        </form>
      </div>
      <Profile user={user} />
      {/* <button onClick={getData}>Click me to get Data</button> */}
      {loading ? (
        <div style={{ marginTop: "9px" }}>"No available data"</div>
      ) : (
        <div>
          <h2>{myMovie.Title} </h2>
        </div>
      )}
    </div>
  );
};

export default App;
