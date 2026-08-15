"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [toast, setToast] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setToast("Message envoyé — nous revenons vers vous sous 24h");
    window.setTimeout(() => setToast(""), 2800);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="field-row">
          <div className="field field-boxed">
            <label htmlFor="cnom">Nom complet</label>
            <input className="input" id="cnom" placeholder="Votre nom" required type="text" />
          </div>
          <div className="field field-boxed">
            <label htmlFor="ctel">Téléphone</label>
            <input className="input" id="ctel" placeholder="+237 6 XX XX XX XX" type="tel" />
          </div>
        </div>
        <div className="field field-boxed">
          <label htmlFor="cemail">Email</label>
          <input className="input" id="cemail" placeholder="vous@email.com" required type="email" />
        </div>
        <div className="field field-boxed">
          <label htmlFor="csujet">Sujet</label>
          <select className="select" id="csujet" defaultValue="Question sur un produit">
            <option>Question sur un produit</option>
            <option>Question sur un soin</option>
            <option>Rendez-vous existant</option>
            <option>Partenariat</option>
            <option>Autre</option>
          </select>
        </div>
        <div className="field field-boxed">
          <label htmlFor="cmessage">Message</label>
          <textarea
            className="textarea"
            id="cmessage"
            placeholder="Comment pouvons-nous vous aider ?"
            required
          />
        </div>
        <button className="btn btn-primary btn-block" type="submit">
          Envoyer le message
        </button>
      </form>
      <div className={`toast ${toast ? "show" : ""}`}>
        <span className="dot">✓</span>
        <span>{toast}</span>
      </div>
    </>
  );
}
