import style from "../styles/form.module.scss";

import { useForm, ValidationError } from "@formspree/react";

export default function Form() {
  const [state, handleSubmit] = useForm(mvoyzkgw);
  // const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

  if (state.succeeded) {
    return (
      <p style={{ textAlign: "center", fontSize: "24px", margin: "50px auto" }}>
        Thanks for your submission!
      </p>
    );
  }
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
            <input id="name" type="text" name="name" placeholder="Full name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email address"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <input id="phone" type="number" name="phone" placeholder="Phone" />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              placeholder="I’m interested in this property."
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className="button_blue"
              type="submit"
              disabled={state.submitting}
            >
              Contact
            </button>
            <ValidationError errors={state.errors} />
          </form>
        </div>
      </div>
    </div>
  );
}
