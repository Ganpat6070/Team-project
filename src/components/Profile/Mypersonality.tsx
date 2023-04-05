import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Mypersonality.css";
import { Link, useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { toast } from "react-toastify";
import PhotoCard from "./PhotoCard";

const Mypersonality = () => {
  const navigate = useNavigate();
  const [diet, setDiet] = useState("");
  const [smoke, setSmoke] = useState("");
  const [drink, setDrink] = useState("");
  const [hobby, setHobby] = useState("");
  const [music, setMusic] = useState<string[]>([]);
  const [musicrange, setMusicrange] = useState<number>(0);
  const [reading, setReading] = useState<string[]>([]);
  const [readingrange, setReadingrange] = useState<number>(0);
  const [movies, setMovies] = useState<string[]>([]);
  const [movierange, setMovierange] = useState<number>(0);
  const [sports, setSports] = useState<string[]>([]);
  const [sportrange, setSportrange] = useState<number>(0);
  const [foods, setFoods] = useState<string[]>([]);
  const [foodrange, setFoodrange] = useState<number>(0);
  const [dress, setDress] = useState<string[]>([]);
  const [dressrange, setDressrange] = useState<number>(0);


  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);

  const mypersonality: any = {
    diet,
    smoke,
    drink,
    hobby,
    musicrange,
    music,
    readingrange,
    reading,
    movierange,
    movies,
    sportrange,
    sports,
    foodrange,
    foods,
    dressrange,
    dress,
  };
  let profileid: string | null = localStorage.getItem("profileID");

  const saveData = async () => {
    let response = await fetch("http://localhost:8000/my-personality", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        profileid: `${profileid}`,
      },
      body: JSON.stringify({
        diet: diet,
        smoke: smoke,
        drink: drink,
        music: music,
        musicRange: musicrange,
        reading: reading,
        readingRange: readingrange,
        movies: movies,
        moviesRange: movierange,
        sports: sports,
        sportsRange: sportrange,
        foods: foods,
        foodsRange: foodrange,
        dress: dress,
        dressRange: dressrange,
      }),
    });
    const res = await response.json();
    console.log(res);
    if (response.status === 201) {
      setIsLoading(false)
      setButtonLoading(true)
      toast.success("My Personality is saved!");
      navigate("/astrodata");
    }
  };

  const dietHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setDiet(e.target.value);
    // console.log(fname)
  };
  const smokeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setSmoke(e.target.value);
    // console.log(fname)
  };
  const drinkHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setDrink(e.target.value);
  };
  const hobbyHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!(e.target.value === "")) setHobby(e.target.value);
  };

  const musicHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setMusic([...music, value]);
    } else {
      setMusic(music.filter((box) => box !== value));
    }
  };
  const readHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setReading([...reading, value]);
    } else {
      setReading(reading.filter((box) => box !== value));
    }
  };
  const moviesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setMovies([...movies, value]);
    } else {
      setMovies(movies.filter((box) => box !== value));
    }
  };
  const sportsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setSports([...sports, value]);
    } else {
      setSports(sports.filter((box) => box !== value));
    }
  };
  const foodHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setFoods([...foods, value]);
    } else {
      setFoods(foods.filter((box) => box !== value));
    }
  };
  const dressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setDress([...dress, value]);
    } else {
      setDress(dress.filter((box) => box !== value));
    }
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    saveData();
    console.log(mypersonality);
  };

  return (
    <div
      className="background_image"
      style={{
        backgroundImage: `url("../../image/BG.png")`,
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <ProgressBar />
      <PhotoCard />
      <div
        style={{ width: "55%" }}
        className="container-sm my-5 bg-light rounded-5 border border-dark p-3"
      >
        <form className="mx-2 my-2">
          <p
            className="fs-3 
 "
            style={{ color: "#6E6E6E" }}
          >
            My Personality
          </p>

          <div className="row">
            <div className="col">
              <label className="mb">
                Diet
                <br />
              </label>
              <select
                onChange={dietHandler}
                style={{ height: "50%" }}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select "
              >
                <option value=""  hidden>Please Select</option>
                <option>Veg</option>
                <option>Non-Veg</option>
                <option>Other</option>
              </select>
            </div>
            {/* <div className="col-xl-">
            <label htmlFor="eid">Education in Detail</label>
            <br />
            <input type="text" id="eid" className="form-control" />
          </div> */}
            <div className="col">
              <label className="mb">
                Smoke
                <br />
              </label>
              <select
                onChange={smokeHandler}
                style={{ height: "50%" }}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select "
              >
                <option value=""  hidden>Please Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="col">
              <label>
                Drink
                <br />
              </label>
              {/* <input type="number" className="form-control mt-1 rounded-2 border-secondary" /> */}
              <select
                onChange={drinkHandler}
                style={{ height: "50%" }}
                className="form-control text-dark mt-1 rounded-2 border-secondary form-select "
              >
                <option value=""  hidden>Please Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>
          <div
            className="mt-2"
            style={{
              width: "100",
              height: "40%",
              color: "black",
              backgroundColor: "#eeeeee",
              fontSize: "larger",
            }}
          >
            Hobbies
          </div>
          <Row>
            <Col className="mt-3 mb-2">
              <label>
                Let your parter know your Hobbies & interests.
                <br />
              </label>
              <br />
              <span style={{ fontStyle: "italic", fontSize: "small" }}>
                Impedit nisi assumenda eligendi corporis ex veniam quibusdam
                sunt provident quam eaque? Sint quasi ea ad quod dolorum soluta
                autem! Fugiat, itaque.
              </span>
              <br />
              <select
                onChange={hobbyHandler}
                style={{ height: "30%" }}
                className="form-control text-dark mt-1 mb-1 rounded-2 border-secondary form-select"
              >
                <option value=""  hidden>Please Select</option>
                <option>Cooking</option>
                <option>Hiking</option>
                <option>Gardening</option>
                <option>Collecting Art</option>
                <option>Learning a new language</option>
                <option>Blogging</option>
                <option>DIY and Crafts</option>
                <option>Video Production</option>
              </select>
            </Col>
          </Row>
          <Row>
            <div
              className="mt-2 slidecontainer"
              style={{
                width: "100",
                height: "40%",
                color: "black",
                backgroundColor: "#eeeeee",
                fontSize: "larger",
              }}
            >
              Music
              <input
                type="range"
                min="1"
                max="101"
                className="slider"
                id="myRange"
                step="20"
                value={musicrange}
                onChange={(e) => setMusicrange(parseInt(e.target.value))}
              />
            </div>

            <Col className="mt-3">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="music"
                  value="Film Music"
                  checked={music.includes("Film Music")}
                  onChange={musicHandler}
                />
                &nbsp;Film Music
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="music"
                  value="Devotional"
                  checked={music.includes("Devotional")}
                  onChange={musicHandler}
                />
                &nbsp;Devotional
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="music"
                  value="Albums"
                  checked={music.includes("Albums")}
                  onChange={musicHandler}
                />
                &nbsp;Albums
              </label>
            </Col>
            <Col className="mt-3">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="music"
                  value="Western"
                  checked={music.includes("Western")}
                  onChange={musicHandler}
                />
                &nbsp;Western
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="music"
                  value="Hindi Songs"
                  checked={music.includes("Hindi Songs")}
                  onChange={musicHandler}
                />
                &nbsp;Hindi Songs
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="music"
                  value="Gujrati Songs"
                  checked={music.includes("Gujrati Songs")}
                  onChange={musicHandler}
                />
                &nbsp;Gujrati Songs
              </label>
            </Col>
            <Col className="mt-3">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="music"
                  value="Music Is My Life"
                  checked={music.includes("Music Is My Life")}
                  onChange={musicHandler}
                />
                &nbsp;Music Is My Life
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="music"
                  value="Tamil Songs"
                  checked={music.includes("Tamil Songs")}
                  onChange={musicHandler}
                />
                &nbsp;Tamil Songs
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="music"
                  value="Don't Listen To Music"
                  checked={music.includes("Don't Listen To Music")}
                  onChange={musicHandler}
                />
                &nbsp;Don't Listen To Music
              </label>
            </Col>
          </Row>
          <Row>
            <div
              className="mt-2 slidecontainer"
              style={{
                width: "100",
                height: "40%",
                color: "black",
                backgroundColor: "#eeeeee",
                fontSize: "larger",
              }}
            >
              Reading
              <input
                type="range"
                min="1"
                max="101"
                className="slider"
                step="20"
                value={readingrange}
                onChange={(e) => setReadingrange(parseInt(e.target.value))}
              />
            </div>
            <Col className="mt-3">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="reading"
                  value="Newspapers"
                  checked={reading.includes("Newspapers")}
                  onChange={readHandler}
                />
                &nbsp;Newspapers
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="reading"
                  value="Trade Journals"
                  checked={reading.includes("Trade Journals")}
                  onChange={readHandler}
                />
                &nbsp;Trade Journals
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="reading"
                  value="Self Help Books"
                  checked={reading.includes("Self Help Books")}
                  onChange={readHandler}
                />
                &nbsp;Self Help Books
              </label>
            </Col>
            <Col className="mt-3">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="reading"
                  value="Management Books"
                  checked={reading.includes("Management Books")}
                  onChange={readHandler}
                />
                &nbsp;Management Books
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="reading"
                  value="Comedy"
                  checked={reading.includes("Comedy")}
                  onChange={readHandler}
                />
                &nbsp;Comedy
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="reading"
                  value="Biographies"
                  checked={reading.includes("Biographies")}
                  onChange={readHandler}
                />
                &nbsp;Biographies
              </label>
            </Col>
            <Col className="mt-3">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="reading"
                  value="Devotional Books"
                  checked={reading.includes("Devotional Books")}
                  onChange={readHandler}
                />
                &nbsp;Devotional Books
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="reading"
                  value="Romance"
                  checked={reading.includes("Romance")}
                  onChange={readHandler}
                />
                &nbsp;Romance
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="reading"
                  value="I Don't Read Much"
                  checked={reading.includes("I Don't Read Much")}
                  onChange={readHandler}
                />
                &nbsp;I Don't Read Much
              </label>
            </Col>
          </Row>
          <Row>
            <div
              className="mt-2 slidecontainer"
              style={{
                width: "100",
                height: "40%",
                color: "black",
                backgroundColor: "#eeeeee",
                fontSize: "larger",
              }}
            >
              Movies
              <input
                type="range"
                min="1"
                max="101"
                className="slider"
                step="20"
                value={movierange}
                onChange={(e) => setMovierange(parseInt(e.target.value))}
              />
            </div>
            <Col className="mt-3">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="movie"
                  value="English"
                  checked={movies.includes("English")}
                  onChange={moviesHandler}
                />
                &nbsp;English
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="movie"
                  value="Hindi"
                  checked={movies.includes("Hindi")}
                  onChange={moviesHandler}
                />
                &nbsp;Hindi
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="movie"
                  value="Other Language Movies"
                  checked={movies.includes("Other Language Movies")}
                  onChange={moviesHandler}
                />
                &nbsp;Other Language Movies
              </label>
            </Col>
            <Col className="mt-3">
              <label htmlFor="Action">
                <input
                  type="checkbox"
                  name="movie"
                  id="Action"
                  value="Action"
                  checked={movies.includes("Action")}
                  onChange={moviesHandler}
                />
                &nbsp;Action
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="movie"
                  value="Romance"
                  checked={movies.includes("Romance")}
                  onChange={moviesHandler}
                />
                &nbsp;Romance
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="movie"
                  value="Comedy"
                  checked={movies.includes("Comedy")}
                  onChange={moviesHandler}
                />
                &nbsp;Comedy
              </label>
            </Col>
            <Col className="mt-3">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="movie"
                  value="Family Stories"
                  checked={movies.includes("Family Stories")}
                  onChange={moviesHandler}
                />
                &nbsp;Family Stories
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="movie"
                  value="Spy"
                  checked={movies.includes("Spy")}
                  onChange={moviesHandler}
                />
                &nbsp;Spy
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="movie"
                  value="Don't See Much Movies"
                  checked={movies.includes("Don't See Much Movies")}
                  onChange={moviesHandler}
                />
                &nbsp;Don't See Much Movies
              </label>
            </Col>
          </Row>
          <div className="row">
            <div
              className="mt-2 slidecontainer"
              style={{
                width: "100",
                height: "40%",
                color: "black",
                backgroundColor: "#eeeeee",
                fontSize: "larger",
              }}
            >
              Sports
              <input
                type="range"
                min="1"
                max="101"
                className="slider"
                step="20"
                value={sportrange}
                onChange={(e) => setSportrange(parseInt(e.target.value))}
              />
            </div>
            <div className="col-xl mt-3">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="sport"
                  value="Cricket"
                  checked={sports.includes("Cricket")}
                  onChange={sportsHandler}
                />
                &nbsp;Cricket
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="sport"
                  value="Football"
                  checked={sports.includes("Football")}
                  onChange={sportsHandler}
                />
                &nbsp;Football
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="sport"
                  value="Tennis"
                  checked={sports.includes("Tennis")}
                  onChange={sportsHandler}
                />
                &nbsp;Tennis
              </label>
            </div>
            <div className="col-xl mt-3">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="sport"
                  value="Badminton"
                  checked={sports.includes("Badminton")}
                  onChange={sportsHandler}
                />
                &nbsp;Badminton
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="sport"
                  value="Basketball"
                  checked={sports.includes("Basketball")}
                  onChange={sportsHandler}
                />
                &nbsp;Basketball
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="sport"
                  value="Table Tennis"
                  checked={sports.includes("Table Tennis")}
                  onChange={sportsHandler}
                />
                &nbsp;Table Tennis
              </label>
            </div>
            <div className="col-xl mt-3">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="sport"
                  value="Swimming"
                  checked={sports.includes("Swimming")}
                  onChange={sportsHandler}
                />
                &nbsp;Swimming
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="sport"
                  value="Boxing"
                  checked={sports.includes("Boxing")}
                  onChange={sportsHandler}
                />
                &nbsp;Boxing
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="sport"
                  value="Don't Like Sports Much"
                  checked={sports.includes("Don't Like Sports Much")}
                  onChange={sportsHandler}
                />
                &nbsp;Don't Like Sports Much
              </label>
            </div>
          </div>
          <div className="row">
            <div
              className="mt-2 slidecontainer"
              style={{
                width: "100",
                height: "40%",
                color: "black",
                backgroundColor: "#eeeeee",
                fontSize: "larger",
              }}
            >
              Foods
              <input
                type="range"
                min="1"
                max="101"
                className="slider"
                step="20"
                value={foodrange}
                onChange={(e) => setFoodrange(parseInt(e.target.value))}
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="food"
                  value="South Indian"
                  checked={foods.includes("South Indian")}
                  onChange={foodHandler}
                />
                &nbsp;South Indian
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="food"
                  value="North Indian"
                  checked={foods.includes("North Indian")}
                  onChange={foodHandler}
                />
                &nbsp;North Indian
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="food"
                  value="Chinese"
                  checked={foods.includes("Chinese")}
                  onChange={foodHandler}
                />
                &nbsp;Chinese
              </label>
            </div>
            <div className="col mt-3">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="food"
                  value="Kathiyawadi"
                  checked={foods.includes("Kathiyawadi")}
                  onChange={foodHandler}
                />
                &nbsp;Kathiyawadi
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="food"
                  value="Mexican"
                  checked={foods.includes("Mexican")}
                  onChange={foodHandler}
                />
                &nbsp;Mexican
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="food"
                  value="Italian"
                  checked={foods.includes("Italian")}
                  onChange={foodHandler}
                />
                &nbsp;Italian
              </label>
            </div>
            <div className="col mt-3">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="food"
                  value="Thai"
                  checked={foods.includes("Thai")}
                  onChange={foodHandler}
                />
                &nbsp;Thai
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="food"
                  value="Kerala"
                  checked={foods.includes("Kerala")}
                  onChange={foodHandler}
                />
                &nbsp;Kerala
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="food"
                  value="Anything"
                  checked={foods.includes("Anything")}
                  onChange={foodHandler}
                />
                &nbsp;Anything
              </label>
            </div>
          </div>
          <div className="row">
            <div
              className="mt-2 slidecontainer"
              style={{
                width: "100",
                height: "40%",
                color: "black",
                backgroundColor: "#eeeeee",
                fontSize: "larger",
              }}
            >
              Dress
              <input
                type="range"
                min="1"
                max="101"
                className="slider"
                step="20"
                value={dressrange}
                onChange={(e) => setDressrange(parseInt(e.target.value))}
              />
            </div>
            <div className="col mt-3">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="dress"
                  value="Indian"
                  checked={dress.includes("Indian")}
                  onChange={dressHandler}
                />
                &nbsp;Indian
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="dress"
                  value="Indo Western"
                  checked={dress.includes("Indo Western")}
                  onChange={dressHandler}
                />
                &nbsp;Indo Western
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="dress"
                  value="Casual"
                  checked={dress.includes("Casual")}
                  onChange={dressHandler}
                />
                &nbsp;Casual
              </label>
            </div>
            <div className="col mt-3">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="dress"
                  value="Western"
                  checked={dress.includes("Western")}
                  onChange={dressHandler}
                />
                &nbsp;Western
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="dress"
                  value="Traditional"
                  checked={dress.includes("Traditional")}
                  onChange={dressHandler}
                />
                &nbsp;Traditional
              </label>
              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="dress"
                  value="No Preference"
                  checked={dress.includes("No Preference")}
                  onChange={dressHandler}
                />
                &nbsp;No Preference
              </label>
            </div>
          </div>

          <Link to="/personal-info">
            <button
              className="btn btn-light text-white btn-xl mt-2"
              type="button"
              onClick={submitHandler}
              disabled={buttonLoading}

              style={{ backgroundColor: "#fb9232" }}
            >
                {isLoading ? <p className="mb-0">Wait </p> : <p className="mb-0">Save & Continue</p>}

            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

// export default BasicInfo;
export default Mypersonality;
