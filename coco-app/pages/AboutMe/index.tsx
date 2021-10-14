import type { NextPage } from "next";
import Layout from "../../components/Layout";

const AboutMe: any = () => {
  return (
    <>
      <Layout page={"AboutMe"}>
        <div className="d-flex">
          <div className=" w-50 d-flex flex-column justify-content-center">
            <div className="div-orange">
              <h1 className="p-l title">Hello, </h1>
            </div>
            <div className="div-blue">
              <h1 className="p-l title">Im Ali Coco</h1>
            </div>

            <span className="paragraph p-l">
              lLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              non volutpat est. Mauris luctus turpis euismod tortor elementum
              rhoncus. Fusce sed erat tortor. Vivamus ut neque vitae justo
              tempus porttitor. Curabitur sit amet fringilla eros. Nullam sed
              placerat massa, id hendrerit augue.
            </span>
          </div>
          <div className="w-50 backgroung-AboutMe">
            {/* <Image width="100%" src={Studio}/> */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutMe;
