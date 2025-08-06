import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Reservation = () => {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState(0);
  const [time, setTime] = useState("");
  const [date, setdate] = useState("");
  const navigate = useNavigate();

  const HandleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/users/sendreservation",
        {
          firstname,
          lastname,
          email,
          phone,
          time,
          date,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },

          withCredentials: true,
        }
      );

      toast.success(data.message);
      setfirstName("");
      setlastName("");
      setemail("");
      setphone();
      setTime("");
      setdate("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="reservation_form_box">
          <h1>MAKE A RESERVATION</h1>
          <p> for further Questions please contact us</p>
          <form>
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setfirstName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                className="email_tag"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
            </div>
            <div>
              <input
                type="date"
                placeholder="select date"
                value={date}
                onChange={(e) => setdate(e.target.value)}
              />
              <input
                type="time"
                placeholder="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

            <button type="submit" onClick={HandleReservation}>
              Reserve Now{""}
              <span>
                <HiOutlineArrowNarrowRight />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export { Reservation };
