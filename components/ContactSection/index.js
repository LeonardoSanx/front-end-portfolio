import contactSectionStyles from "../../styles/Contact/ContactSection.module.css";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FiMail, FiUser } from "react-icons/fi";
import { server } from "../../config";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ContactSection = ({ service, template, user }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    const { name, email, message } = data;

    try {
      const templateParams = {
        name,
        email,
        message,
      };
      await emailjs.send(service, template, templateParams, user);
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={contactSectionStyles.container}>
      <div className={contactSectionStyles.head}>
        <h1>Contact Me</h1>
        <div className={contactSectionStyles.line}></div>
      </div>
      <div className={contactSectionStyles.contact}>
        <div className={contactSectionStyles.emailContainer}>
          <form
            action="#"
            className={contactSectionStyles.form}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <h2 className={contactSectionStyles.h2}>Want to work together?</h2>
            <p className={contactSectionStyles.p}>send me an e-mail</p>
            <div className={contactSectionStyles.inputs}>
              <div className={contactSectionStyles.errorSpace}>
                <div className={contactSectionStyles.inputField}>
                  <FiUser className={contactSectionStyles.i} />
                  <input
                    type="text"
                    className={contactSectionStyles.input}
                    placeholder="Name"
                    name="name"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Required",
                      },
                    })}
                  />
                </div>
                {errors.name && (
                  <span className={contactSectionStyles.errorMessage}>
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className={contactSectionStyles.errorSpace}>
                <div className={contactSectionStyles.inputField}>
                  <FiMail className={contactSectionStyles.i} />
                  <input
                    type="text"
                    placeholder="Email"
                    className={contactSectionStyles.input}
                    name="email"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                  />
                </div>
                {errors.email && (
                  <span className={contactSectionStyles.errorMessage}>
                    Invalid email
                  </span>
                )}
              </div>
            </div>
            <div className={contactSectionStyles.errorSpace}>
              <div className={contactSectionStyles.messageContainer}>
                <textarea
                  rows={3}
                  placeholder="Message"
                  className={contactSectionStyles.message}
                  name="message"
                  {...register("message", {
                    required: true,
                  })}
                />
              </div>
              {errors.message && (
                <span className={contactSectionStyles.errorMessage}>
                  Please enter a message
                </span>
              )}
            </div>
            <button
              type="submit"
              className={contactSectionStyles.submit}
              id="btn-up"
            >
              Send
            </button>
          </form>
        </div>
        <ToastContainer />
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
        <a
          className={contactSectionStyles.circle}
          href={`${server}://wa.me/5521968339123?text=`}
          target="_blank"
        >
          <BsWhatsapp className={contactSectionStyles.icons} />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
