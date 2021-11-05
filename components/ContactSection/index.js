import contactSectionStyles from "../../styles/Contact/ContactSection.module.css";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FiMail, FiUser } from "react-icons/fi";

const ContactSection = () => {
  return (
    <div className={contactSectionStyles.container}>
      <div className={contactSectionStyles.head}>
        <h1>Contact Me</h1>
        <div className={contactSectionStyles.line}></div>
      </div>
      <div className={contactSectionStyles.contact}>
        <div className={contactSectionStyles.emailContainer}>
          <form action="#" className={contactSectionStyles.form}>
            <h2 className={contactSectionStyles.h2}>Want to work together?</h2>
            <p className={contactSectionStyles.p}>send me an e-mail</p>
            <div className={contactSectionStyles.inputs}>
              <div className={contactSectionStyles.inputField}>
                <FiUser className={contactSectionStyles.i} />
                <div>
                  <input
                    type="text"
                    className={contactSectionStyles.input}
                    placeholder="Name"
                    name="nome"
                    // onkeydown="javascript: fMasc( this, Nome );"
                  />
                </div>
              </div>
              <div className={contactSectionStyles.inputField}>
                <FiMail className={contactSectionStyles.i} />
                <div>
                  <input
                    type="text"
                    placeholder="E-mail"
                    className={contactSectionStyles.input}
                    name="email"
                  />
                </div>
              </div>
            </div>
            <div className={contactSectionStyles.messageContainer}>
              <input
                type="text"
                placeholder="Message"
                className={contactSectionStyles.message}
                name="message"
                // onkeydown="javascript: fMasc( this, Nome );"
              />
            </div>
            <input
              type="submit"
              value="Send"
              className={contactSectionStyles.submit}
              id="btn-up"
            />
          </form>
        </div>
      </div>
      <div className={contactSectionStyles.social}>
        <a
          className={contactSectionStyles.circle}
          href="https://github.com/LeonardoSanx"
          target="_blank"
        >
          <AiFillGithub className={contactSectionStyles.icons} />
        </a>
        <a
          className={contactSectionStyles.circle}
          href="https://www.linkedin.com/in/leonardo-sanches-machado-870827191/"
          target="_blank"
        >
          <BsLinkedin className={contactSectionStyles.icons} />
        </a>
        <a className={contactSectionStyles.circle} href="/">
          <FiMail className={contactSectionStyles.icons} />
        </a>
        <a className={contactSectionStyles.circle} href="tel:+55(021)968339123">
          <BsWhatsapp className={contactSectionStyles.icons} />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
