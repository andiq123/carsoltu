const Contact = () => {
  return (
    <div className="p-10 bg-cover" id="contact">
      <h1 className="text-3xl font-bold mb-5 w-fit p-5 bg-primary color-white relative mx-auto">
        Dove Trovarci
      </h1>
      <p className="mt-5 py-5">Il nostro indirizzo è: VIA ISOLANA M 318</p>
      <div className="map-container hero-overlay bg-op">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11176.298797328042!2d9.18462785592661!3d45.46385342292692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x204fd4e1c4a14d4b!2sVIA%20ISOLANA%20M%20318!5e0!3m2!1sen!2sit!4v1648172008705!5m2!1sen!2sit"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
