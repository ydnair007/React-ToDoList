import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./images/userM.png";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Login from "./components/Login";

function App() {
  const [tempUser, setTempUser] = useState({});
  useEffect(() => {
    toast.dark("🚀 App Loaded..");
  }, []);
  return (
    <div className="all" style={{ overflow: "-moz-hidden-unscrollable" }}>
      <Header tempUser={tempUser} setTempUser={setTempUser}></Header>
      {tempUser.email ? (
        <Router>
          <ToastContainer
            position="bottom-left"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Zoom}
          ></ToastContainer>
          <Container className="text-center">
            <Row>
              <Col md={3}>
                <h1>Menu</h1>
                <Menu></Menu>
              </Col>
              <Col md={9}>
                <Route path="/" exact>
                  <ToDoList tempUser={tempUser}></ToDoList>
                </Route>
                <Route path="/add-list" exact>
                  <ToDoList tempUser={tempUser}></ToDoList>
                </Route>
                <Route path="/profile" exact>
                  <Profile tempUser={tempUser}></Profile>
                </Route>
                <Route path="/contact" exact>
                  <Contact tempUser={tempUser}></Contact>
                </Route>
                <Route path="/about" component={AboutMe} exact />
              </Col>
            </Row>
          </Container>
        </Router>
      ) : (
        <Login tempUser={tempUser} setTempUser={setTempUser}></Login>
      )}
    </div>
  );
}

export default App;
