export default function Intro() {
  return (
    <div
      id="intro"
      className="hero py-64 bg-base-300"
      style={{
        backgroundImage: `url("/images/main.png")`,
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Cars Oltu Enterpise</h1>
          <p className="mb-5 text-xl">
            Benvenuti nel sito della nostra azienda di vendita di auto. Siamo
            orgogliosi di offrire una vasta gamma di automobili di alta qualità,
            a prezzi competitivi.
          </p>
        </div>
      </div>
    </div>
  );
}
