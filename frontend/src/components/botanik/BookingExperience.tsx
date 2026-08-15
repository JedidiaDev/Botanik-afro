"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { appointmentServices } from "@/config/botanik";

const slots = ["09:00", "09:45", "10:30", "11:15", "13:00", "13:45", "14:30", "15:15", "16:00", "16:45"];
const fullSlots = new Set(["10:30", "14:30"]);
const availableDays = [3, 4, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31];
const disabledDays = [1, 2, 5, 12, 19, 26];

export default function BookingExperience() {
  const [step, setStep] = useState(1);
  const [selectedCare, setSelectedCare] = useState("");
  const [selectedDay, setSelectedDay] = useState(11);
  const [selectedSlot, setSelectedSlot] = useState("");

  function goStep(nextStep: number) {
    setStep(nextStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function confirm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    goStep(4);
  }

  return (
    <div className="booking-wrap">
      <div style={{ marginBottom: 36, textAlign: "center" }}>
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          Réservation en ligne
        </div>
        <h1 style={{ fontSize: "clamp(28px,3.4vw,38px)" }}>Réservez votre rendez-vous</h1>
        <p style={{ color: "var(--santal)", marginTop: 10 }}>Trois étapes, moins de deux minutes.</p>
      </div>

      <div className="stepper">
        {[1, 2, 3, 4].map((item, index) => (
          <FragmentStep current={step} index={index} item={item} key={item} />
        ))}
      </div>

      <div className="booking-card">
        <div className={`booking-panel ${step === 1 ? "active" : ""}`}>
          <h3 className="booking-title">Quel soin souhaitez-vous ?</h3>
          <p className="booking-sub">Sélectionnez la prestation, vous pourrez modifier plus tard.</p>
          <div className="soin-pick-grid">
            {appointmentServices.map((care) => (
              <button
                className={`soin-pick ${selectedCare === care.name ? "selected" : ""}`}
                key={care.name}
                onClick={() => setSelectedCare(care.name)}
                type="button"
              >
                <div>
                  <h4>{care.name}</h4>
                  <span>
                    {care.duration} · {care.price}
                  </span>
                </div>
                <div className="soin-radio" />
              </button>
            ))}
          </div>
          <div className="booking-nav">
            <span />
            <button className="btn btn-primary" disabled={!selectedCare} onClick={() => goStep(2)} type="button">
              Continuer
            </button>
          </div>
        </div>

        <div className={`booking-panel ${step === 2 ? "active" : ""}`}>
          <h3 className="booking-title">Choisissez date et heure</h3>
          <p className="booking-sub">Les créneaux verts sont disponibles.</p>
          <div className="cal-wrap">
            <div>
              <div className="cal-head">
                <h4>Juillet 2026</h4>
                <div className="cal-nav">
                  <button aria-label="Mois précédent" type="button">
                    ‹
                  </button>
                  <button aria-label="Mois suivant" type="button">
                    ›
                  </button>
                </div>
              </div>
              <div className="cal-grid">
                {["L", "M", "M", "J", "V", "S", "D"].map((dow, index) => (
                  <div className="cal-dow" key={`${dow}-${index}`}>
                    {dow}
                  </div>
                ))}
                <div className="cal-day empty" />
                <div className="cal-day empty" />
                {[...Array(31)].map((_, index) => {
                  const day = index + 1;
                  const isAvailable = availableDays.includes(day);
                  const isDisabled = disabledDays.includes(day);
                  return (
                    <button
                      className={`cal-day ${isAvailable ? "avail" : ""} ${isDisabled ? "disabled" : ""} ${
                        selectedDay === day ? "selected" : ""
                      }`}
                      disabled={!isAvailable}
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      type="button"
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="slots-col">
              <h4>Créneaux — Sam. {selectedDay} juillet</h4>
              <div className="slots-list">
                {slots.map((slot) => {
                  const isFull = fullSlots.has(slot);
                  return (
                    <button
                      className={`slot ${isFull ? "full" : ""} ${selectedSlot === slot ? "selected" : ""}`}
                      disabled={isFull}
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      type="button"
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="booking-nav">
            <button className="btn btn-ghost" onClick={() => goStep(1)} type="button">
              Retour
            </button>
            <button className="btn btn-primary" disabled={!selectedSlot} onClick={() => goStep(3)} type="button">
              Continuer
            </button>
          </div>
        </div>

        <form className={`booking-panel ${step === 3 ? "active" : ""}`} onSubmit={confirm}>
          <h3 className="booking-title">Vos informations</h3>
          <p className="booking-sub">Nous vous enverrons la confirmation par SMS et email.</p>
          <div className="recap-box">
            <div>
              Soin<span>{selectedCare || "—"}</span>
            </div>
            <div>
              Créneau<span>Sam. {selectedDay} juillet · {selectedSlot || "09:00"}</span>
            </div>
            <button className="recap-edit" onClick={() => goStep(1)} type="button">
              Modifier
            </button>
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="nom">Nom complet</label>
              <input className="input" id="nom" placeholder="Aïcha Mbala" required type="text" />
            </div>
            <div className="field">
              <label htmlFor="tel">Téléphone</label>
              <input className="input" id="tel" placeholder="+237 6 XX XX XX XX" required type="tel" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input className="input" id="email" placeholder="aicha@email.com" required type="email" />
          </div>
          <div className="field">
            <label htmlFor="notes">Notes pour l&apos;équipe (optionnel)</label>
            <textarea className="textarea" id="notes" placeholder="Allergies, préférences, premier rendez-vous…" />
          </div>
          <label className="checkbox-row">
            <input required type="checkbox" />
            <span>J&apos;accepte de recevoir un rappel par SMS 24h avant mon rendez-vous.</span>
          </label>

          <div className="booking-nav">
            <button className="btn btn-ghost" onClick={() => goStep(2)} type="button">
              Retour
            </button>
            <button className="btn btn-primary" type="submit">
              Confirmer le rendez-vous
            </button>
          </div>
        </form>

        <div className={`booking-panel ${step === 4 ? "active" : ""}`}>
          <div className="confirm-wrap">
            <div className="confirm-check">✓</div>
            <h3 className="booking-title">Rendez-vous confirmé !</h3>
            <p className="booking-sub">Un email de confirmation vient de vous être envoyé.</p>
            <div className="confirm-recap">
              <div className="confirm-row">
                <span>Soin</span>
                <span>{selectedCare || "Hydratation intense"}</span>
              </div>
              <div className="confirm-row">
                <span>Date</span>
                <span>Samedi {selectedDay} juillet 2026</span>
              </div>
              <div className="confirm-row">
                <span>Heure</span>
                <span>{selectedSlot || "09:00"}</span>
              </div>
              <div className="confirm-row">
                <span>Lieu</span>
                <span>Kodengui, Yaoundé</span>
              </div>
            </div>
            <div className="confirm-actions">
              <a href="#" className="btn btn-ghost">
                Ajouter au calendrier
              </a>
              <Link href="/" className="btn btn-primary">
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FragmentStep({ current, index, item }: { current: number; index: number; item: number }) {
  const labels = ["Soin", "Créneau", "Infos", "Confirmé"];

  return (
    <>
      {index > 0 ? <div className={`step-line ${current > item - 1 ? "done" : ""}`} /> : null}
      <div className={`step-item ${current === item ? "active" : ""} ${current > item ? "done" : ""}`}>
        <div className="step-dot">{item}</div>
        <span className="step-label">{labels[index]}</span>
      </div>
    </>
  );
}
