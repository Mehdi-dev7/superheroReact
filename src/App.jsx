import "./App.css";
import Superhero from "./components/Superheros/Superhero/Superhero";
import Superheros from "./components/Superheros/Superheros";
import styled from "styled-components";

import hulk from "./assets/hulk.jpeg";

import { useRef, useState, useEffect } from "react";
// States
export default function App() {
  const [superheroPrefere, setSuperheroPrefere] = useState();

  const [nouveauSuperhero, setNouveauSuperhero] = useState({
    nom: "Anonyme",
    photo: "",
    description: "",
  });

  // Variables
  const nom = useRef();
  const description = useRef();
  const photo = useRef();

  // Cycle
  useEffect(() => {
    photo.current.focus();
  }, [
    nouveauSuperhero.nom,
    nouveauSuperhero.description,
    nouveauSuperhero.photo,
  ]); // le array permet de definir quand jouer la fonction
  useEffect(() => {
    nom.current.value = "";
    description.current.value = "";
    photo.current.value = "";
  }, [nouveauSuperhero.nom]);

  // Fonction
  const superheroClique = (nom) => {
    setSuperheroPrefere(nom);
  };
  const sauvergarderLeSuperhero = (e) => {
    e.preventDefault();
    setNouveauSuperhero((ancienSuperhero) => ({
      ...ancienSuperhero,
      nom: nom.current.value,
    }));
    setNouveauSuperhero((ancienSuperhero) => ({
      ...ancienSuperhero,
      description: description.current.value,
    }));
    setNouveauSuperhero((ancienSuperhero) => ({
      ...ancienSuperhero,
      photo: photo.current.value,
    }));
  };

  return (
    <>
      <main>
        <img
          src="./Marvel.png"
          alt="marvel en rouge "
          className="w-60 mx-auto mt-10"
        />
        <Superheros>
          {/* Superhero numero 1 */}
          <Superhero
            nom="Iron Man"
            description="Anthony « Tony » Stark, alias Iron Man est un super-héros évoluant dans
          'univers Marvel de la maison d'édition Marvel Comics."
            films={["Iron man 1 ", " Iron man 2", "Iron man 3"]}
            photo="./ironMan.jpeg"
            details="Au début de sa carrière de super-héros, Tony Stark avait pour principale occupation de lutter contre les communistes dans le contexte de la guerre froide, de manière beaucoup plus systématique que les autres personnages de Marvel Comics. Ce cadre historique a progressivement disparu, au profit d'aventures de science-fiction. Le contexte de la série Iron Man a ensuite continué d'évoluer avec les années, le personnage affrontant en majorité des menaces de type technologique.

            Le corps d'Iron Man est celui d'un homme normal, sans pouvoir surnaturel ou surhumain, mais rendu surpuissant quand il revêt l'une des nombreuses armures de haute technologie conçues à l'aide des impressionnantes compétences scientifiques de Stark. L'armure, pouvant voler à des vitesses supersoniques, confère à Tony Stark une force et une résistance surhumaines et est équipée de multiples armes, capteurs et systèmes électroniques."
            estLePrefere={superheroPrefere == "Iron Man"}
            superheroClique={superheroClique}
          />
          {/* Superhero numero 2 */}
          <Superhero
            nom="Hulk"
            description="Le docteur Robert Bruce Banner (souvent nommé Bruce Banner, son deuxième prénom), alias Hulk, est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. "
            photo={hulk}
            details="Hulk a été créé dans la période d'engouement pour les super-héros aux États-Unis au début des années 1960, un retour en grâce après des années de disette (les comics de super-héros étaient, dans les années 1950, soupçonnés de favoriser la violence dans le lectorat de la jeunesse)5.

            Le personnage figure dans la continuité des « Monster comics » (des récits à chute présentant des monstres, souvent des envahisseurs extraterrestres, parfois des démons ou des robots, etc.) dont le dessinateur Jack Kirby s'était fait une spécialité au sein des maisons d'édition ancêtres de Marvel Comics (Timely Comics et Atlas Comics).
            
            L'histoire de Bruce Banner / Hulk est une adaptation moderne de celle de Dr Jekyll / Mr Hyde de l'écrivain Robert Louis Stevenson, avec l'ajout du mythe du monstre de Frankenstein, selon les propres dires de Stan Lee6. Hulk est le deuxième titre publié par Marvel Comics après le lancement à succès de la série sur les Quatre Fantastiques."
            estLePrefere={superheroPrefere == "Hulk"}
            superheroClique={superheroClique}
          />
          {/* Superhero numero 3 */}
          <Superhero
            nom="Captain America"
            description="Steven « Steve » Rogers, alias Captain America est un super-héros
          évoluant dans l'univers Marvel de la maison d'édition Marvel Comics."
            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHiTFrFNmKvorE4tf9mk_Y-vv-noK1ATUIAQ&usqp=CAU"
            details="Le personnage est rapidement devenu la création de guerre la plus populaire et la plus réussie commercialement de Timely dès sa publication originale, bien que la popularité des super-héros ait diminué dans la période d'après-guerre et que Captain America Comics ait été interrompu en 1950. Le personnage a connu un renouveau de courte durée en 1953 avant retournant à la bande dessinée en 1964, et est depuis resté en publication continue. La création de Captain America en tant que personnage explicitement anti-nazi était une entreprise délibérément politique : Simon et Kirby étaient farouchement opposés aux actions de l'Allemagne nazie et partisans de l'intervention américaine dans la Seconde Guerre mondiale, Simon ayant conçu le personnage spécifiquement en réponse à l'intervention américaine. mouvement de non-interventionnisme . Les messages politiques sont restés par la suite une caractéristique déterminante des histoires de Captain America, les écrivains utilisant régulièrement le personnage pour commenter l'état de la société et du gouvernement américains."
            estLePrefere={superheroPrefere == "Captain America"}
            superheroClique={superheroClique}
          />

          <Superhero
            nom={nouveauSuperhero.nom}
            description={
              nouveauSuperhero.description != ""
                ? nouveauSuperhero.description
                : undefined
            }
            photo={
              nouveauSuperhero.photo != "" ? nouveauSuperhero.photo : undefined
            }
          />

          {/* Parametrage de notre superhero */}
          <form className="p-[15px] bg-red-marvel text-white ">
            <h3 className="text-center uppercase font-semibold my-5">
              Cree ton propre superhero
            </h3>
            <div>
              <label htmlFor="photo" className="label">
                Photo
              </label>
              <input
                type="text"
                name="photo"
                className="input"
                id="photo"
                ref={photo}
                style={{
                  padding: 5,
                  fontSize: 14,
                  display: "block",
                  width: "100%",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              />
              <label htmlFor="nom" className="label">
                Nom
              </label>
              <input
                type="text"
                name="nom"
                className="input"
                id="nom"
                ref={nom}
                style={{
                  padding: 5,
                  fontSize: 14,
                  display: "block",
                  width: "100%",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              />
              <label htmlFor="descritpion" className="label">
                Description
              </label>
              <input
                type="text"
                name="description"
                className="input"
                id="descritpion"
                ref={description}
                style={{
                  padding: 5,
                  fontSize: 14,
                  display: "block",
                  width: "100%",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: 5,
              }}
              onClick={(event) => sauvergarderLeSuperhero(event)}
            >
              <button className="bg-red-900 text-white px-3 py-1 rounded mt-5 hover:bg-red-400 duration-150">
                Modifier
              </button>
            </div>
          </form>
        </Superheros>
      </main>
    </>
  );
}
