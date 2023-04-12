import React from "react";

const Interest = (props: any) => {
  const data = props.data;

  return (
    <div>
      <div>
        {/* <div className="text-center fw-bold">Interest & Hobbies</div> */}
        <br />
        <br />
        <div
          className="d-flex justify-content-lg-evenly"
          style={{
            backgroundColor: "rgb(238, 234, 234)",
            padding: "2rem",
            borderRadius: "4%",
          }}
        >
          <div className="text-start ml-4">
            <li style={{ listStyle: "none", fontWeight: "300" }}>
              <ul>I Like Music </ul>
              <ul>Music</ul>
              <ul>I Like reading</ul>
              <ul>Reading</ul>
              <ul>I Like Movies</ul>
              <ul>Movies</ul>
              <ul>I Like dress</ul>
              <ul>Dress</ul>
              <ul>I Like sports</ul>
              <ul>Sports</ul>
            </li>
          </div>
          <div className="text-start">
            <li style={{ listStyle: "none" }}>
              <ul>
                {Array.isArray(data.musicRange)
                  ? data.musicRange.join("%")
                  : "Not Available"}
              </ul>
              <ul>{data.music ? data.music.join(", ") : "Not Available"}</ul>
              <ul>
                {Array.isArray(data.readingRange)
                  ? data.readingRange.join("%")
                  : "Not Available"}
              </ul>
              <ul>
                {data.reading ? data.reading.join(", ") : "Not Available"}
              </ul>
              <ul>
                {Array.isArray(data.moviesRange)
                  ? data.moviesRange.join("%")
                  : "Not Available"}
              </ul>
              <ul>{data.movies ? data.movies.join(", ") : "Not Available"}</ul>
              <ul>
                {Array.isArray(data.dressRange)
                  ? data.dressRange.join("%")
                  : "Not Available"}
              </ul>
              <ul>{data.dress ? data.dress.join(", ") : "Not Available"}</ul>
              <ul>
                {Array.isArray(data.sportsRange)
                  ? data.sportsRange.join("%")
                  : "Not Available"}
              </ul>
              <ul>{data.sports ? data.sports.join(", ") : "Not Available"}</ul>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interest;
