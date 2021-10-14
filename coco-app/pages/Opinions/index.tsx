import type { NextPage } from "next";
import Layout from "../../components/Layout";
import { createClient } from "pexels";
import { useEffect, useState } from "react";

const Opinions: any = () => {
  const [users, setUsers] = useState<Array<any>>();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=4")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        const { results } = data;
        Array(results);
        setUsers(results);
      });
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      <Layout page={"Opinions"}>
        <div className="div-orange-gallery"></div>
        <div className="div-blue-gallery">
          <h1 className="p-l title title-gallery">Opinions</h1>
        </div>

        <div className="gallery-container">
          {users ? (
            users.map((user) => {
              return (
                <>
                  <div  className="opinion-container">
                    <img
                      style={{ borderRadius: "80px", border: '5px solid var(--color-orange)'}}
                      width={150}
                      height={150}
                      alt="pepe"
                      src={user.picture.large}
                    />
                    <div>
                      <span className="opinion-text">{`${user.name.first} ${user.name.last}`}</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Commodi cum atque voluptatum maiores quos sed
                        nostrum facilis veniam ut nesciunt numquam cupiditate
                        nobis, debitis, nemo ex voluptas et dolorem repellendus?
                      </p>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <div style={{ textAlign: "center" }}>
              <h2 style={{ margin: "auto" }}>Loadding...</h2>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Opinions;
