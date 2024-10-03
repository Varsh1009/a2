import "./LandingPage.css";
import { FaGithub } from "react-icons/fa";
import TableRow from "./tableRows";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="row">
        <div className="col" />
        <div className="col-6">
          <div className="headings-card">
            <h1>Shrivarshini Narayanan</h1>
            <h2>Section - 03</h2>
          </div>
        </div>
        <div className="col" />
      </div>
      <div className="button-container">
        <a href="https://github.com/AxonBlAzE/CS5610---Web-Dev">
          <button className="button">
            {" "}
            Source Code Repository <FaGithub />
          </button>
        </a>

        <Link to="/">
          <button className="button">
            Go to Landing Page <BsArrowUpRightSquare />
          </button>
        </Link>

        <Link to="/labwork">
          <button className="button">
            Go to Lab Work <BsArrowUpRightSquare />
          </button>
        </Link>

        <Link to="/kanbas">
          <button className="button">
            Go to Kanbas <BsArrowUpRightSquare />
          </button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Description</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            name="A1"
            description="Created a landing page for CS5610 ."
            // url="./#/labwork"
            url="https://kanbas1.netlify.app"
          />
          <TableRow
            name="A2"
            description="Gained familiarity with different concepts of CSS and Bootstrap ."
            url="https://kanbas1.netlify.app"
          />
          <TableRow name="A3" description="Coming Soon..." url="" />
          <TableRow name="A4" description="Coming Soon..." url="" />
          <TableRow name="A5" description="Coming Soon..." url="" />
          <TableRow name="A6" description="Coming Soon..." url="" />
        </tbody>
      </table>
    </div>
  );
};

export default LandingPage;
