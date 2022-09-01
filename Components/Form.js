import style from "../styles/form.module.scss";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      message,
    };
    console.log(data);
  };
  return (
    <div className={style.form_container}>
      <div className={style.form_all}>
        <div className={style.form_text}>
          <h4>
            Interested?
            <br /> Send us a message.
          </h4>
          <p>
            Fill in your info and leave a message. We’ll get back to you as soon
            as possible.
          </p>
        </div>
        <div className={style.form_fields}>
          <form onSubmit={handleSubmit} className={style.form}>
            <input
              id="name"
              type="text"
              placeholder="Full name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              id="email"
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              id="phone"
              type="number"
              placeholder="Phone"
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              id="message"
              type="text"
              rows="4"
              placeholder="I’m interested in this property."
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="button_blue" type="submit">
              Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
