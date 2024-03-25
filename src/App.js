import "./App.css";
import Alllinks from "./components/footer/flexesboth/Alllinks";
import Lastflex from "./components/footer/flexeslast/Lastflex";
import IconsCompo from "./components/footer/flexesone/IconsCompo";
import Head from "./components/header/Head";
import Herb from "./components/main/Herbert folder/Herb";
import Amaze from "./components/main/amaze folder/Amaze";
import Img from "./components/main/amaze folder/Img";
import Form from "./components/main/form folder/Form";
import Pricingcards from "./components/main/pricing folder/Pricingcards";
import Stat from "./components/main/stats folder/Stat";
import Title from "./components/main/title folder/Title";
import Repeatcontent from "./components/main/tour folder/Repeatcontent";
import Tourcards from "./components/main/tour folder/Tourcards";

function App() {
  return (
    <div className="parent">
      <header className="head-tag">
        <Head />
      </header>

      <main>
        <div className="title-container">
          <Title />
        </div>

        <div className="tour-container">
          <Repeatcontent
            tourT="Dance Tour"
            tourP={
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                omnis,
                <br /> suscipit aliquam inventore itaque voluptatibus maxime
                natus quidem?
              </p>
            }
          />

          <div className="tour-carding">
            <Tourcards
              olimage="/img/xxassx.png"
              olihead="America"
              olidis={
                <p>
                  Lorem ipsum dolor sit br amet <br /> consectetur adipisicing
                  elit.
                </p>
              }
            />
            <Tourcards
              olimage="/img/vsvd.png"
              olihead="Asia"
              olidis={
                <p>
                  Lorem ipsum dolor sit br amet <br /> consectetur adipisicing
                  elit.
                </p>
              }
            />
            <Tourcards
              olimage="/img/sdcssc.png"
              olihead="Australia"
              olidis={
                <p>
                  Lorem ipsum dolor sit br amet <br /> consectetur adipisicing
                  elit.
                </p>
              }
            />
          </div>
        </div>

        <div className="pricing-container">
          <Repeatcontent
            tourT="Pricing"
            tourP={
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                omnis,
                <br /> suscipit aliquam inventore itaque voluptatibus maxime
                natus quidem?
              </p>
            }
          />

          <div className="tour-carding">
            <Pricingcards
              oliprice="$150.00"
              olimage="/img/wqdwq.png"
              olihead="Basic"
              olidis={
                <p>
                  Lorem ipsum dolor sit br amet <br /> consectetur adipisicing
                  elit.
                </p>
              }
            />
            <Pricingcards
              oliprice="$200.00"
              olimage="/img/wqdwq.png"
              olihead="Profesional"
              olidis={
                <p>
                  Lorem ipsum dolor sit br amet <br /> consectetur adipisicing
                  elit.
                </p>
              }
            />
            <Pricingcards
              oliprice="$250.00"
              olimage="/img/wqdwq.png"
              olihead="Ultimate"
              olidis={
                <p>
                  Lorem ipsum dolor sit br amet <br /> consectetur adipisicing
                  elit.
                </p>
              }
            />
          </div>
        </div>

        <div className="amaze-container">
          <Img amazedance="/img/qsqqsqsqs.png" />
          <Amaze
            amazetitle="Amazing Dance"
            amazepara="Lorem ipsum dolor sit br amet consectetur adipisicing elit."
            amazeread="Read More"
          />
        </div>

        <div className="best-dance-container">
          <Amaze
            amazetitle="Best Dance"
            amazepara="Lorem ipsum dolor sit br amet consectetur adipisicing elit."
            amazeread="Read More"
          />
          <Img amazedance="/img/sdcssc.png" />
        </div>

        <div className="statistics-container">
          <Repeatcontent
            tourT="Our Statistics"
            tourP={
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                omnis,
                <br /> suscipit aliquam inventore itaque voluptatibus maxime
                natus quidem?
              </p>
            }
          />
          <div className="stats-flex">
            <Stat statsRecord="1240+" statsdetail="Club" />
            <Stat statsRecord="2000+" statsdetail="Active Member" />
            <Stat statsRecord="1.000+" statsdetail="Community" />
          </div>
        </div>

        <div className="herbert-container">
          <Herb />
        </div>

        <div className="form-container">
          <Repeatcontent
            tourT="subscribe"
            tourP={
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                omnis,
                <br /> suscipit aliquam inventore itaque voluptatibus maxime
                natus quidem?
              </p>
            }
          />

          <Form />
        </div>
      </main>

      <footer>
        <IconsCompo />

        <Alllinks
          ltag="About"
          ldis_first="History"
          ldis_second="Our Team"
          ldis_third="Brand Guidelines"
          ldis_four="Terms & Condition"
          ldis_five="Privacy Policy"
        />

        <Alllinks
          ltag="Services"
          ldis_first="How to Order"
          ldis_second="Our Product"
          ldis_third="Order Status"
          ldis_four="Promo"
          ldis_five="Payment Method"
        />

        <Lastflex
          ltag="Other"
          ldis_first="Contact Us"
          ldis_second="Help"
          ldis_third="Privacy"
        />
      </footer>
    </div>
  );
}

export default App;
