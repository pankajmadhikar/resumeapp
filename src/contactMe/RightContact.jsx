import React from "react";
import SendIcon from "@mui/icons-material/Send";

const RightContact = () => {
  return (
    <>
      <div className="right-contact-div">
        <div className="right-contact-main">
          <div className="row right-contact-base">
            <div className="col-sm-12 ">
              <div className="card">
                <form
                  action="https://formsubmit.co/125b2bce9e1f02b325a0a9b914197786"
                  method="POST"
                  className="card-body">
                  <div>
                    <label
                      htmlFor="name"
                      className="form-label"
                      style={{ fontSize: "1.6rem" }}>
                      Name
                    </label>
                    <input
                      type="text"
                      style={{ fontSize: "1.6rem" }}
                      className="form-control"
                      id="name"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="email"
                      className="form-label"
                      style={{ fontSize: "1.6rem" }}>
                      Email
                    </label>
                    <input
                      type="text"
                      style={{ fontSize: "1.6rem" }}
                      className="form-control"
                      id="email"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="message"
                      style={{ fontSize: "1.6rem" }}
                      className="form-label">
                      Message
                    </label>
                    <textarea
                      style={{ fontSize: "1.6rem" }}
                      name=""
                      className="form-control"
                      id="message"
                      cols="30"
                      rows="3"></textarea>
                  </div>

                  <button type="submit" className="contact-btn mt-3">
                    send <SendIcon />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightContact;
