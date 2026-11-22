// Scaletta della presentazione: titoli, relatori e minuti dal foglio "Call" (righe 17-28).
// Ogni punto con "sfondo" si apre con una pagina generata (nome del relatore in grande, index.html);
// dopo l'apertura due pagine, una per argomento, illustrate e con poche parole. Il punto Studio Ryft: apertura con la citazione a destra, poi sito e canali.
// Niente dati di sponsor e niente cifre commerciali.
// Se una pagina nomina un comune, l'immagine deve essere di quel comune.
const vis = (img, k, h, dati = [], cls = "", extra = "") => ({
  html: `<div class="vis ${cls}"><div class="testo"><p class="k">${k}</p><h1>${h}</h1>
    <div class="dati">${dati.map(([n, t]) => `<div><b>${n}</b><span>${t}</span></div>`).join("")}</div>${extra}</div>
    <div class="foto"><img src="img/${img}" alt=""></div></div>`,
});

window.PITCH = {
  evento: {
    titolo: "Presentazione dell'Almanacco 2027",
    quando: "Lunedì 23 novembre 2026",
    ora: "18:00",
    dove: "Sala consiliare, Comune di Pontelatone",
  },
  punti: [
    {
      titolo: "Apertura e saluti", relatore: "Andrea Granito", ruolo: "Presidente", minuti: 9, sfondo: "ill/vigna.jpg",
      pagine: [vis("ill/collage-rete.jpg", "Perché siamo qui", "Un territorio si racconta meglio <em>insieme</em>",
        [["8", "comuni"], ["1", "rete di cantine, sapori e luoghi"]], "scuro"),
        vis("ill/territorio.jpg", "La rete", "Oltre 40 soci, <em>e cresciamo</em>",
          [["40+", "soci della Strada"], ["8", "comuni della DOC"]], "intera", '<p class="fonte">E la rete continua ad allargarsi.</p>')],
    },
    {
      titolo: "Ringraziamenti agli host", relatore: "Chi ci accoglie", ruolo: "Comune di Pontelatone", minuti: 1,
      sfondo: "ill/municipio.jpg", pagine: [],
    },
    {
      titolo: "Presentazione del progetto e comunicazione", relatore: "Studio Ryft", minuti: 2,
      // apertura con la citazione al posto del disegno
      destra: `<blockquote class="citazione">«Da soli possiamo fare così poco; insieme possiamo fare <em>così tanto</em>.»</blockquote>
        <p class="autore">Helen Keller</p>
        <p class="sub">È lo spirito della Strada: cantine, Comuni e territorio che comunicano con una voce sola.</p>`,
      pagine: [
        vis("esempi/sito-home.jpg", "Il sito web", "La Strada <em>in rete</em>",
          [["Voci", "brevi video girati nei luoghi della DOC"], ["Percorsi", "tre modi di attraversarla"],
           ["Aderisci", "la domanda di adesione online"]], "intera"),
        { html: `<p class="k">Una voce, tanti canali</p><h1>Digitale <em>e territorio</em></h1>
          <div class="piatt corto">
            <div><div class="loghi"><img src="img/loghi/meta.svg" alt="Meta"></div>
              <b>Facebook e Instagram</b><span>Cantine, eventi e luoghi ogni giorno</span></div>
            <div><div class="loghi"><img src="img/loghi/google.svg" alt="Google"></div>
              <b>Ricerca e Maps</b><span>Farsi trovare da chi cerca dove andare</span></div>
            <div><div class="loghi"><img src="img/loghi/linkedin.svg" alt="LinkedIn"></div>
              <b>LinkedIn</b><span>Istituzioni, partner e operatori</span></div>
            <div><div class="loghi"><img src="img/loghi/tiktok.svg" alt="TikTok"></div>
              <b>Video brevi</b><span>Per chi sceglie dal telefono</span></div>
          </div>
          <div class="canali q">
            <div><b>Newsletter</b><span>soci e appassionati sempre aggiornati</span></div>
            <div><b>Podcast</b><span>dieci puntate nei luoghi della Strada</span></div>
            <div><b>Almanacco e stampati</b><span>inviti, manifesti, guest book</span></div>
            <div><b>Cartellonistica</b><span>segni riconoscibili lungo le strade</span></div>
          </div>` },
      ],
    },
    {
      titolo: "Anteprima Casavecchia e Pallagrello, II edizione", relatore: "Andrea Granito", ruolo: "Presidente", minuti: 3,
      sfondo: "ill/cat-vigna.jpg",
      pagine: [vis("ill/cat-winebar.jpg", "II edizione", "Anteprima <em>Casavecchia e Pallagrello</em>",
        [["22-23", "gennaio 2027"], ["Reggia", "di Caserta, Archivio di Stato"], ["2025", "le annate in assaggio, alla cieca"]]),
        { html: `<p class="k">22-23 gennaio 2027</p><h1>Il programma <em>delle due giornate</em></h1>
          <div class="prog">
            <div><h2>Venerdì 22</h2><p><b>10:30</b>Saluti istituzionali</p><p><b>11:00</b>Degustazione</p>
              <p><b>15:00</b>Tiro a volo al campo «Ennio Falco»</p><p><b>19:00</b>Aperitivo al Centro Ippico Grifon d'Oro</p>
              <p><b>20:30</b>Cena con le annate storiche di Casavecchia e Pallagrello</p></div>
            <div><h2>Sabato 23</h2><p><b>10:00</b>Degustazione</p><p><b>12:00</b>Degustazione</p>
              <p><b>13:00</b>Brunch e saluti finali</p></div>
          </div>` }],
    },
    {
      titolo: "Green Days, I edizione", relatore: "Giovanni De Marco", minuti: 3, sfondo: "ill/formicola.jpg",
      pagine: [vis("ill/eco.jpg", "22-24 maggio 2027 · I edizione", "Green <em>Days</em>",
        [["Sabato", "cantine a porte aperte"], ["Domenica", "giornata dell'ambiente"], ["Lunedì", "masterclass per gli operatori"]]),
        vis("ill/cat-winebar.jpg", "Lunedì 24 maggio", "La masterclass <em>per gli operatori</em>",
          [["Prodotti", "olio, formaggi, insaccati, lumache, pomodori"]], "",
          `<div class="amb"><img src="img/ill/peppe.jpg" alt=""><span>Ambasciatore della Strada<b>Chef Peppe Aversa</b></span></div>`)],
    },
    {
      titolo: "Festival del Vino di Pontelatone", relatore: "Francesco Scaramuzzo", minuti: 3, sfondo: "ill/pontelatone.jpg",
      pagine: [vis("ill/festival.jpg", "Luglio 2027 · Pontelatone", "Festival <em>del Vino</em>",
        [["1", "comitato: Strada del Vino e Pro Loco"]]),
        vis("ill/cat-winebar.jpg", "In arrivo · luglio 2027", "La <em>masterclass</em>",
          [["Festival", "del Vino, luglio 2027"]])],
    },
    {
      titolo: "Podcast: dieci puntate nei luoghi della Strada", relatore: "Manuel Lombardi", minuti: 3, sfondo: "ill/caiazzo.jpg",
      pagine: [vis("ill/intervista.jpg", "Podcast audio e video", "Gli altri raccontano <em>chi siamo</em>",
        [["10", "puntate l'anno"], ["Audio", "e video"]]),
        { html: `<p class="k">In natura</p><h1>Produttori e <em>luoghi della Strada</em></h1>
          <div class="tappe">${[["pontelatone", "Pontelatone"], ["formicola", "Formicola"], ["caiazzo", "Caiazzo"]]
            .map(([img, c]) => `<div><img src="img/ill/${img}.jpg" alt=""><b>${c}</b></div>`).join("")}</div>` }],
    },
    {
      titolo: "Tour dell'Alta Campania", relatore: "Andrea Granito", ruolo: "Presidente", minuti: 3, sfondo: "ill/tappa-san-leucio.jpg",
      pagine: [{ html: `<p class="k">Più giorni · sei tappe</p><h1>Tour <em>dell'Alta Campania</em></h1>
        <div class="tappe">${[
          ["pontelatone", "Mura megalitiche", "Trebula, Pontelatone"],
          ["tappa-piana", "Rovine romane", "Piana di Monte Verna"],
          ["formicola", "Madonna del Castello", "Formicola"],
          ["tappa-anfiteatro", "Anfiteatro Campano", "Santa Maria Capua Vetere"],
          ["tappa-sant-angelo", "Basilica di Sant'Angelo in Formis", "Capua"],
          ["tappa-san-leucio", "Belvedere di San Leucio", "Caserta"],
        ].map(([img, t, c], i) => `<div><img src="img/ill/${img}.jpg" alt=""><b><i>0${i + 1}</i>${t}</b><span>${c}</span></div>`).join("")}</div>` },
        { html: `<p class="k">Lungo il tour · una rete che cresce</p><h1>Le esperienze <em>di chi produce</em></h1>
          <div class="esper">${[
            ["cat-caseificio", "Mozzarella", "dal caseificio"], ["cat-ristorante", "Pizza", "nel forno a legna"],
            ["pasta-patate", "Pasta e patate", "la cucina di casa"], ["cat-vigna", "Vino", "in vigna e in cantina"],
            ["cat-oleificio", "Olive", "dal frantoio"], ["cat-miele", "Miele", "dagli apicoltori"],
            ["seta", "Seta Jacquard", "i telai di San Leucio"],
          ].map(([img, t, d]) => `<div><img src="img/esperienze/${img}.jpg" alt=""><b>${t}</b><span>${d}</span></div>`).join("")}
            <div class="poi"><i>+</i><b>E altri in arrivo</b><span>maestranze e botteghe artigiane si stanno unendo al tour</span></div></div>` }],
    },
    {
      titolo: "Cartellonistica stradale", relatore: "Tommaso Tartaglione", minuti: 3, sfondo: "ill/vigna.jpg",
      pagine: [vis("ill/cartelli.jpg", "Segni lungo le strade", "La Strada <em>si vede</em>",
        [["8", "comuni"], ["Storia", "zonazione e mappe del territorio"]], "sx"),
        { html: `<p class="k">Un esempio · Pro Loco Pontelatone</p><h1>Pontelatone <em>nella storia</em></h1>
          <img class="largo" src="img/esempi/pannello-pontelatone.jpg" alt="">` }],
    },
    {
      titolo: "Educazione civica con i Maestri del Lavoro", relatore: "Andrea Granito", ruolo: "Presidente",
      contributo: "Onorino Gerarduzzi", minuti: 3, sfondo: "ill/formicola.jpg",
      pagine: [vis("ill/aula.jpg", "Con i Maestri del Lavoro", "Educazione <em>civica</em>",
        [["Ambiente", "e storia locale"], ["Scuole", "e oratori"], ["Maestri", "del Lavoro, Confindustria Caserta"]], "",
        '<p class="fonte">Insigniti della Stella al Merito del Lavoro.</p>'),
        // il contributo filmato: comandi gestiti in index.html (filmato), nessuna dissolvenza
        { html: `<div class="filmato"><div class="testo"><p class="k">Contributo filmato</p><h1>Onorino <em>Gerarduzzi</em></h1>
          <p class="sub">Educazione civica con i Maestri del Lavoro</p>
            <div class="linea"><i></i></div>
            <div class="comandi"><button data-v="capo" title="Riavvolgi all'inizio">⏮</button>
              <button data-v="indietro" title="Indietro di 10 secondi">↺</button>
              <button data-v="play" title="Play / pausa (spazio)">▶</button>
              <button data-v="audio" title="Audio sì / no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z"/><path class="onde" d="M16.5 8.5a5 5 0 0 1 0 7M19.5 5.5a9 9 0 0 1 0 13"/><path class="x" d="M16 9l6 6M22 9l-6 6"/></svg></button>
              <span class="ore">0:00 / 3:29</span></div></div>
          <div class="schermo"><video src="video/gerarduzzi.mp4" preload="auto" playsinline></video></div></div>` }],
    },
    {
      titolo: "Ricerca: analisi sensoriale e zonazione in tre anni", relatore: "Giovanni Piccirillo", minuti: 3, sfondo: "ill/cat-vigna.jpg",
      pagine: [
        vis("../slide/gen07.jpg", "Ricerca · zonazione", "La <em>zonazione</em>",
          [["50", "vigneti analizzati"], ["Macro aree", "suoli e biodiversità"]], "intera",
          `<p class="fonte">Presentazione dell'Anteprima, gennaio 2026</p>`),
        vis("../slide/gen13.jpg", "Ricerca · analisi sensoriale", "Gli <em>aromi</em>",
          [["Vegetali", "floreali e fruttati"], ["2022", "Università Federico II"]], "intera",
          `<p class="fonte">Presentazione dell'Anteprima, gennaio 2026</p>`)],
    },
    {
      titolo: "Domande e risposte", relatore: "Tutti", ruolo: "La parola a voi", minuti: 20, sfondo: "ill/caiazzo.jpg",
      pagine: [{ html: `<div class="centro">
          <blockquote class="citazione lunga">«Mettersi insieme è un inizio,<br>rimanere insieme è un progresso,<br>lavorare insieme è <em>un successo</em>.»</blockquote>
          <p class="autore">Henry Ford</p>
          <p class="grazie"><em>Grazie</em><img src="img/logo_strada.png" alt=""></p></div>` }],
    },
  ],
};
