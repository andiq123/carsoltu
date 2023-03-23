const Contact = () => {
  return (
    <div className="p-10 bg-cover" id="contact">
      <h1 className="text-3xl font-bold mb-5 w-fit p-5 bg-primary color-white relative mx-auto">
        Dove Trovarci
      </h1>
      <p className="mt-5 py-5 font-bold">
        Il nostro indirizzo è: Via Isolana, N, 318, Salizzole, VR, 37056
      </p>
      <div className="map-container hero-overlay bg-op">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2810.933048791633!2d11.136241499999999!3d45.2086903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f6e2837a4dea5%3A0xe3ca4b105edfe374!2sVia%20Isolana%2C%20318%2C%2037056%20Valmorsel%20VR%2C%20Italy!5e0!3m2!1sen!2sro!4v1679609373661!5m2!1sen!2sro"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
