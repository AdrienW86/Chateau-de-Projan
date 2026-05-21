"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi de formulaire (ex: API Route ou EmailJS)
    console.log("Formulaire envoyé :", formData);
  };

  return (
    <main className="w-full bg-chateau-anthracite text-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        {/* EN-TÊTE POÉTIQUE */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-chateau-or block font-medium">
            Conciergerie & Réservations
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl tracking-wide text-chateau-pierre">
            Nous <span className="italic font-normal text-white">Rejoindre</span>
          </h1>
          <div className="w-8 h-[1px] bg-chateau-or/60 mx-auto my-4" />
          <p className="font-sans text-sm text-chateau-pierre/70 leading-relaxed tracking-wide">
            Que ce soit pour une nuit suspendue, une table exclusive ou la privatisation du domaine, notre équipe est à votre entière écoute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* INFORMATIONS DE CONTACT & ACCÈS (5 colonnes) */}
          <div className="lg:col-span-5 space-y-10 font-sans">
            
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-white tracking-wide">Le Château</h2>
              <div className="space-y-2 text-sm text-chateau-pierre/80 leading-relaxed">
                <p className="font-semibold text-white">Château de Projan</p>
                <p>32400 Projan</p>
                <p>Gers, Occitanie — France</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-white tracking-wide">Liaisons</h2>
              <div className="space-y-2 text-sm text-chateau-pierre/80 leading-relaxed">
                <p>
                  <span className="text-chateau-or font-medium mr-2">Téléphone :</span> 
                  <a href="tel:+33562000000" className="hover:text-white transition-colors">+33 (0)5 62 00 00 00</a>
                </p>
                <p>
                  <span className="text-chateau-or font-medium mr-2">Email :</span> 
                  <a href="mailto:contact@chateau-projan.com" className="hover:text-white transition-colors">contact@chateau-projan.com</a>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-white tracking-wide">Venir à Nous</h2>
              <div className="space-y-3 text-xs text-chateau-pierre/70 leading-relaxed uppercase tracking-wider">
                <p>🚗 <span className="text-white">Pau :</span> 45 minutes</p>
                <p>🚗 <span className="text-white">Tarbes / Tarbes-Lourdes Airport :</span> 50 minutes</p>
                <p>🚗 <span className="text-white">Bordeaux :</span> 1h45</p>
                <p>🚗 <span className="text-white">Toulouse-Blagnac :</span> 1h50</p>
              </div>
            </div>

          </div>

          {/* FORMULAIRE DE CONTACT HAUT DE GAMME (7 colonnes) */}
          <div className="lg:col-span-7 bg-black/10 border border-chateau-pierre/5 p-8 sm:p-10 shadow-2xl">
            <h2 className="font-serif text-2xl text-white tracking-wide mb-8">Écrivez-nous</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6 font-sans text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-chateau-pierre/80">Nom Complet</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-chateau-anthracite border border-chateau-pierre/20 px-4 py-3 text-white focus:outline-none focus:border-chateau-or transition-colors rounded-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-chateau-pierre/80">Adresse Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-chateau-anthracite border border-chateau-pierre/20 px-4 py-3 text-white focus:outline-none focus:border-chateau-or transition-colors rounded-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs uppercase tracking-widest text-chateau-pierre/80">Objet de votre demande</label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-chateau-anthracite border border-chateau-pierre/20 px-4 py-3 text-white focus:outline-none focus:border-chateau-or transition-colors rounded-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-chateau-pierre/80">Votre Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-chateau-anthracite border border-chateau-pierre/20 px-4 py-4 text-white focus:outline-none focus:border-chateau-or transition-colors rounded-none resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto font-sans text-xs tracking-widest uppercase bg-chateau-or text-chateau-anthracite font-semibold px-8 py-4 hover:bg-white transition-colors duration-300 cursor-pointer rounded-none"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* CARTE GOOGLE MAPS ARTISTIQUE / ASSOMBRE */}
        <div className="w-full h-[400px] sm:h-[500px] relative shadow-2xl border border-chateau-pierre/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.948270559384!2d-0.24151742339568916!3d43.597193271104694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd56f6874e4fe5a5%3A0xc3fec72c478c90!2sCh%C3%A2teau%20de%20Projan!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation du Château de Projan dans le Gers"
            className="grayscale invert brightness-[0.6] contrast-[1.1] saturation-0 hover:brightness-[0.75] transition-all duration-700 ease-out"
          />
        </div>

      </div>
    </main>
  );
}