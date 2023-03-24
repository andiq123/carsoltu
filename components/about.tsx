const About = () => {
  return (
    <div>
      <div className="p-10 relative overflow-hidden" id="about">
        <h1 className="text-3xl font-bold mb-5 w-fit p-5 bg-primary color-white relative rounded-lg">
          Chi Siamo
        </h1>

        <div className="text-center lg:w-2/4 w-fit h-fit mx-auto text-2xl py-10 backdrop-blur-xl rounded-xl">
          <p>
            Siamo un&apos;azienda specializzata nella vendita di automobili di
            alta qualità. La nostra missione è quella di offrire ai nostri
            clienti un&apos;esperienza di acquisto eccezionale, fornendo veicoli
            affidabili, sicuri e di lusso a prezzi competitivi. Ci impegniamo a
            garantire la soddisfazione dei nostri clienti attraverso un servizio
            personalizzato, trasparente e professionale.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary to-primary transform rotate-45 origin-bottom-right mask-parallelogram -z-40"></div>
      </div>
    </div>
  );
};

export default About;
