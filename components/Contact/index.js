import ContactSectionStyles from "../../styles/Contact/ContactSection.module.css";

const ContactSection = () => {
  return (
    <div className={ContactSectionStyles.container}>
      <div className={ContactSectionStyles.head}>
        <h1>Projects</h1>
        <div className={ContactSectionStyles.line}></div>
      </div>
    </div>
  );
};

export default ContactSection;
