import type { NextPage } from "next";
import Layout from "../../components/Layout";
import { createClient } from "pexels";
import { useEffect, useState } from "react";

const Gallery: any = () => {
  const [photos, setPhotos] = useState<Array<any>>();

  useEffect(() => {
    const client = createClient(
      "563492ad6f9170000100000191417c7eb6a542d3a2f418a304a68a8f"
    );
    const query = "Wedding vertical";
    client.photos
      .search({ query, per_page: 16 })
      .then((data) => data)
      .then((data) => {
        const { photos }: any = data;
        Array(photos);
        setPhotos(photos);
      });
  }, []);

  return (
    <>
      <Layout page={"Gallery"}>
        <div className="div-orange-gallery"></div>
        <div className="div-blue-gallery">
          <h1 className="p-l title title-gallery">Gallery</h1>
        </div>

        <div className="gallery-container">
          {photos ? (
            photos.map((photo) => (
              <img width={300} height={370} alt="pepe" src={photo.src.large} />
            ))
          ) : (
              <div style={{textAlign: "center"}}>
            <h2 style={{ margin: "auto" }}>Loadding...</h2>
          </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Gallery;
