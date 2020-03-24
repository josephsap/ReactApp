//react library
import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

//component
import Input from "../Component/Input/Input";
import Card from "../Component/Card/Card";
import Button from "../Component/Button/Button";
import Modal from "../Component/Modal/Modal";

//style
import "../Component/Card/Card.css";

class Spotify extends React.Component {
  state = {
    data: [],
    artistName: "Burno mars"
  };

  /**
   * get Access token when expire
https://accounts.spotify.com/authorize?client_id=325804d634674f7ea914759a63d661e9&client_secret=eff1da8793c54747a5048dd8d8ffaaae&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F%20callback%2F
curl -H "Authorization: Basic MzI1ODA0ZDYzNDY3NGY3ZWE5MTQ3NTlhNjNkNjYxZTk6ZWZmMWRhODc5M2M1NDc0N2E1MDQ4ZGQ4ZDhmZmFhYWU=" -d grant_type=authorization_code -d code=AQDLefR3GAHIjjWTFoHGNzalF23w6Hxyxj3PSUrAT99hTYmY32rMDYg-cxFx91di5irjSo9tMmxJItRfnc1XQydyxuAUv79oBbtXMy1QYkYFaKz0DjgEooMkAEPkqHrIUkYTwwIYT9ffMF6BqHTqzuBe35F5JRY9VcEZglQeCYGOPnNfc3C-Lfhhv1vm_hsKTnGPWO7L -d redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F%20callback%2F auth https://accounts.spotify.com/api/token
AQCzGBW0t4DTn9F72suHzLVaTfsit2mfdbekKjO5lr_3Ceosa9h7er5-G5JZhJp_y0QCBB1EBDeNz3ON_WPZ-Sm6FaoDUf-kEmr3ND9OfW--PASe9qXAQkmZcQGo59aIwljzFPCevanzbdPv7lMt5yoT7mggF53LJx2bmmBFt2TmbSdkMX7LL3pzT_evGNnxQCzWDghZ   
*/
  /* Refresh Token
  AQBcSNaLR6VjiqEOBE3WqnXf3L77gVJwzDM2ASL0nxa-WE5N_U09LMoOZN1NTjH-fKpbwnSqrKDpCaQ-kPwaaY41q-257JJVyz14pXG4oJAU2UInq1GI_j052ndW3S7uFxU
  */

  getAPIresult = async () => {
    let apiItemReturn = [];
    await fetch(
      `https://api.spotify.com/v1/search?q=${this.state.artistName}&type=artist&limit=10&offset=0`,
      {
        headers: {
          Authorization: `Bearer BQD0vnnwHGxQHzH06WTrDik5K_nM9xfDer6tuVVlZ-2-EmYHaRfqDG3gigi3JQ8dp4xnukvSQ0DcI3OYu4f2ZOjq4k8GP24tSdBjGwixbK_iNrSXPt1AsLxxAY9HTMBFGAtcUTTpmiY_nk7y8g`
        }
      }
    )
      .then(response => response.json())
      .then(data => {
        apiItemReturn = data.artists.items[0];
      });

    return apiItemReturn;
  };

  //Call API on Enter
  handleKeyDown = async e => {
    if (e.keyCode === 13) {
      let x = await this.getAPIresult();
      this.setState({
        data: [...this.state.data, x]
      });
    }
  };

  //handle input
  handleInput = e => {
    const artistName = e.target.value;
    this.setState({
      artistName
    });
  };

  //handle close
  deleteAlbum = e => {
    const selectedAlbum = e.target.id;
    let data = [...this.state.data];
    data.splice(selectedAlbum, 1);
    this.setState({
      data
    });
  };

  render() {
    const albumArtist = this.state.data;
    return (
      <Fragment>
        <Input
          label="Search album by artist name"
          placeholder="Enter artist Name"
          onKeyDown={this.handleKeyDown}
          onChange={this.handleInput}
        />
        <Modal
          id="modal001"
          title="Are you sure?"
          body="Do you want to delete this album from playlist?"
          onYesClick={this.deleteAlbum}
        />
        {albumArtist &&
          albumArtist.map((item, idx) => (
            <Card
              content={
                <div id="album" key={idx} id={idx}>
                  <Button
                    id={idx}
                    value={JSON.stringify(item)}
                    className="delete-album"
                    btnName="X"
                    dataTarget="#modal001"
                    dataToggle="modal"
                  />

                  <iframe
                    src={`https://open.spotify.com/embed/artist/${item.id}`}
                    width="300"
                    height="300"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
              }
            />
          ))}
      </Fragment>
    );
  }
}

export default Spotify;
