import { businessInfo } from "@/data/bussiness-info";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          {/* SVG path remains unchanged */}
        </svg>
        <p>
          {businessInfo.denominazione}
          <br />
          {businessInfo.tipoAttivita}
        </p>
      </div>
      <div>
        <span className="footer-title">Business Info</span>
        <p>
          Tippo soggeto - {businessInfo.tipoDichiarazione}
          <br />
          Data Inizio Attività: {businessInfo.dataInizioAttivita}
          <br />
          Partita IVA: {businessInfo.partitaIVA}
          <br />
          Titolare: {businessInfo.cognomeNomeTitolare}
          <br />
          Indirizzo: {businessInfo.domicilioFiscaleTitolare.indirizzo},{" "}
          {businessInfo.domicilioFiscaleTitolare.comune} (
          {businessInfo.domicilioFiscaleTitolare.provincia})
        </p>
      </div>
      <div>{/* Social icons section remains unchanged */}</div>
    </footer>
  );
}
