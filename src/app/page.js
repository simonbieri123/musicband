import Image from "next/image";

export default function Home() {
  return (
    <div
     className="text-center">
      Wilkommen auf der inoffizielen Webseite von Züri West!
      <Image 
        src="/band2.jpg"
        width={500}
        height={500}
        alt="Züri West Bandfoto"
        className="img-fluid rounded"
      />
      Züri West gehört zu den erfolgreichsten und einflussreichsten Rockbands der Schweiz. Seit den 1980er-Jahren prägt die Band mit ihrem einzigartigen Berndeutsch-Sound die Schweizer Musikszene und hat zahlreiche Kultsongs hervorgebracht.

Die Band steht für ehrliche Texte, eingängige Melodien und einen unverwechselbaren Stil, der Humor, Melancholie und Lebensnähe verbindet. Ob klassische Hits wie „I ha di gärn“, ruhige Balladen oder kraftvolle Rocknummern – Züri West bleibt ihrer musikalischen Identität seit Jahrzehnten treu.

    </div>
  );
}
