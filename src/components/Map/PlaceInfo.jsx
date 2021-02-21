import React, { useState } from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";
import Icon from "../../images/huurin_red.png"
export default function PlaceInfo() {
  const places = [
    { info: "篠原まるよし風鈴", location: { lat:35.706699 , lng: 139.781221 } },

  ];

  const [selected, setSelected] = useState(null);

  return (
    <>
      {places.map((marker) => (
        <Marker
          key={`${marker.location.lat * marker.location.lng}`}
          position={{
            lat: marker.location.lat,
            lng: marker.location.lng,
          }}
          onMouseOver={() => {
            setSelected(marker);
            // マウスオーバーで<InfoWindow>が描画されます。
          }}
          icon={{
            url: Icon,
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
            scaledSize: new window.google.maps.Size(60, 60),
            // ここでアイコン表示の設定ができます。
          }}
        />
      ))}

      {selected ? (
        // MarkerにマウスオーバーされたときにInfoWindowが表示されます。
        <InfoWindow
          position={{
            lat: selected.location.lat,
            lng: selected.location.lng,
          }}
          onCloseClick={() => {
            setSelected(null);
          }}
        >
          <div>{selected.info}</div>
        </InfoWindow>
      ) : null}
    </>
  );
}
