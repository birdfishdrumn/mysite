import React, { useCallback, useRef } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api"
import {Link} from "gatsby"
import { mapStyle } from "./mapStyle";
import { Description, MinTitle } from "../../style/GlobalStyle";
import PlaceInfo from "./PlaceInfo";
import styled from "styled-components";
import { Button } from "../Button";
// import mapStyles from "./mapUtils/mapStyles";
// 地図のデザインを指定することができます。
// デザインは https://snazzymaps.com からインポートすることができます。

const Container = styled.div`

text-align:center;
margin:20px;


`
const MapFlex = styled.div`
 display:grid;
 margin:0 auto;
   max-width:1054px;
      grid-template-columns:1fr 2fr;
      grid-gap:10px;
 @media(max-width:768px){
   grid-template-columns:1fr;
 }
`

const libraries = ["places"];
const mapContainerStyle = {
  height: "400px",
  width: "100%",
  flexBasis:"60%",
  textAlign: "center",
  margin: "0 auto",

};
// 地図の大きさを指定します。

const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  // デフォルトUI（衛星写真オプションなど）をキャンセルします。
  zoomControl: true,
};

const  Map = () =>{
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey:process.env.REACT_APP_googleMapsApiKey,
    // ここにAPIキーを入力します。今回は.envに保存しています。
    libraries,
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  //API読み込み後に再レンダーを引き起こさないため、useStateを使わず、useRefとuseCallbackを使っています。

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <MapFlex>
      <Container>
        <MinTitle>篠原まるよし風鈴</MinTitle>
        <Description>
          <br />
          東京都台東区台東4-25-10<br />
          佐竹商店街内<br /><br />
          営業時間:10:30〜18:00<br />
          定休日:  毎週月曜日


        </Description>
        <Link to="/shop"><Button>詳しく見る</Button></Link>
      </Container>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={18.8}
 // デフォルトズーム倍率を指定します。
        center={{
          lat: 35.706699,
          lng: 139.781221,
        }}
// 札幌周辺にデフォルトのセンターを指定しました。
        options={options}
        onLoad={onMapLoad}
    >
         <PlaceInfo/>
      </GoogleMap>
      </MapFlex>
  );
}

export default Map
