import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import PageSpinner from "./components/Spinner";
import { contactAction } from "./actions/contact.action";
import './app.css'
function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const contact = useSelector(state => state.contact);
  const { loading,message,success,contactData, error } = contact;
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(contactAction(fname,lname,email,subject, msg ));
  

  }
  return (
    <>
      <div id="contact" className="contact segments">
        <div className="container">
          <div className="box-content">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="content-left">
                  <div className="section-title section-title-left">
                    <h3>Get in touch</h3>
                  </div>
                  <h2>Feel free to reach out if you have any questions</h2>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-google" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="content-right">
                  <form
                   onSubmit={submitHandler} 
                    className="contact-form"
                    id="contact-form"
                 
                  >
                      <div className="form-group ">
                        {loading && <div>{<PageSpinner />}</div>}
                        {success && <div className= 'alert alert-success'>{message}</div>}
                        {error && <div className= 'alert alert-danger'>{error}</div>}
                      </div>
                    <div className="row">
                      <div className="col">
                        <div id="first-name-field">
                          <input
                            type="text"
                            placeholder="First Name"
                            className="form-control"
                            name="form-name"
                            required
                            onChange={(e) => setFname(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div id="last-name-field">
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="form-control"
                            name="form-name"
                            required
                            onChange={(e) => setLname(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div id="email-field">
                          <input
                            type="email"
                            placeholder="Email Address"
                            className="form-control"
                            name="form-email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div id="subject-field">
                          <input
                            type="text"
                            placeholder="Subject"
                            className="form-control"
                            name="form-subject"
                            required
                            onChange={(e) => setSubject(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div id="message-field">
                          <textarea
                            cols={30}
                            rows={5}
                            className="form-control"
                            id="form-message"
                            name="form-message"
                            placeholder="Message"
                            defaultValue={""}
                            required
                            onChange={(e) => setMsg(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      className="button"
                      type="submit"
                      id="submit"
                      name="submit"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
