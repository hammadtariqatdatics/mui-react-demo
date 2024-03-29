import Snorkeling from "../assets/img/snorkeling.jpg";
import Walking from "../assets/img/walking.jpg";
import Shopping from "../assets/img/shopping.jpg";
import Tour from "../assets/img/tour.jpg";
import Reading from "../assets/img/reading.jpg";
import Fitness from "../assets/img/fitness.jpg";
import Gastronomy from "../assets/img/gastronomy.jpg";
import Hiking from "../assets/img/hiking.jpg";
import Massage from "../assets/img/massage.jpg";
import Icon4 from "../assets/img/icon4.svg";
import Icon5 from "../assets/img/icon5.svg";
import Icon6 from "../assets/img/icon6.svg";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Users from "../pages/Users";
import Logout from "../pages/Logout";
import Auth from "../auth/Auth";

const benefitsData = [
  {
    img: Snorkeling,
    title: "Snorkeling",
    author: "@bkristastucchio",
  },
  {
    img: Massage,
    title: "Massage",
    author: "@rollelflex_graphy726",
  },
  {
    img: Hiking,
    title: "Hiking",
    author: "@helloimnik",
  },
  {
    img: Tour,
    title: "Tour",
    author: "@nolanissac",
  },
  {
    img: Gastronomy,
    title: "Gastronomy",
    author: "@hjrc33",
  },
  {
    img: Shopping,
    title: "Shopping",
    author: "@arwinneil",
  },
  {
    img: Walking,
    title: "Walking",
    author: "@tjdragotta",
  },
  {
    img: Fitness,
    title: "Fitness",
    author: "@katie_wasserman",
  },
  {
    img: Reading,
    title: "Reading",
    author: "@katie_wasserman",
  },
];

const stepsData = [
  {
    id: 0,
    img: Icon4,
    title: "1.",
    desc: "Appointment every Wednesday 9am.",
  },
  {
    id: 1,
    img: Icon5,
    title: "2.",
    desc: "First come, first served. Our offers are in limited quantities, so be quick.",
  },
  {
    id: 2,
    img: Icon6,
    title: "3.",
    desc: "New offers every week. New experiences, new surprises. Your Sundays will no longer be alike.",
  },
];

const routesData = [
  {
    id: 0,
    path: "/home",
    element: (
      <Auth>
        <Home />
      </Auth>
    ),
  },
  {
    id: 1,
    path: "/",
    element: <Login />,
  },
  {
    id: 2,
    path: "/signup",
    element: <Signup />,
  },
  {
    id: 3,
    path: "/users",
    element: (
      <Auth>
        <Users />
      </Auth>
    ),
  },
  {
    id: 4,
    path: "/logout",
    element: (
      <Auth>
        <Logout />
      </Auth>
    ),
  },
];

export { benefitsData, stepsData, routesData };
