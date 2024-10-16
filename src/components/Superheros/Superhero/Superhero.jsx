import classes from "./Superhero.module.css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Superhero({
  nom,
  description = "Pas de descirption pour l instant",
  films = ["Aucun film pour ce superhero"],
  photo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDAo21VVazGW2SUx8fkhhhhCYo3cY4cMvvK2FbgbKwMCz5BRfeoqeApiDGEagQ6RFLE-k&usqp=CAU",
  details = "Aucun nouveau detail",
  estLePrefere,
  superheroClique = () => {},
  ...props
}) {
  //State
  const [montrerLesDetails, setMontrerLesDetails] = useState(false);
  const [afficherModale, setAfficherModale] = useState(false);

  //Fonction
  const nomClique = (evenement) => {
    evenement.stopPropagation();
    setAfficherModale(true);
  };
  useEffect(() => {
    if (afficherModale) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [afficherModale]);

  return (
    <div
      className={`${classes.superhero} ${
        estLePrefere && classes.superheroPrefere
      }`}
      onClick={() => superheroClique(nom)}
      style={{ position: "relative" }}
    >
      {afficherModale &&
        createPortal(
          <div
            style={{
              background: "rgba(0, 0, 0, 0.9)",
              position: "absolute",
              bottom: 0,
              right: 0,
              top: 0,
              left: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={(evenement) => {
              evenement.stopPropagation();
              setAfficherModale(false);
            }}
          >
            <div style={{ padding: 30, background: "white" }}>
              <b>Informations</b>
              <ul>
                <li>Taille : 1,85</li>
                <li>Couleur des cheveux : Noirs</li>
                <li>Couleur des yeux : Bleus</li>
              </ul>
            </div>
          </div>,
          document.querySelector("body")
        )}
      {/* Cartes */}
      <img src={photo} alt={`${nom} photo`} />
      <h2
        onClick={(evenement) => nomClique(evenement)}
        className="text-2xl font-semibold"
      >
        {nom}
      </h2>
      <p>{description}</p>
      {/* Details */}

      <div
        className={`font-bold mb-[10px] ${
          montrerLesDetails && "text-blue-700"
        } mt-3 cursor-pointer inline-block hover:text-red-marvel`}
        onClick={(evenement) => {
          evenement.stopPropagation();
          setMontrerLesDetails((statePrecedent) => !statePrecedent);
        }}
      >
        {montrerLesDetails ? "Masquer les details" : "En savoir plus"}
      </div>
      {montrerLesDetails && (
        <div
          style={{
            whiteSpace: "pre-line",
          }}
        >
          {details}
        </div>
      )}

      {/* Films */}

      <div style={{ marginTop: 10 }}>
        <b>Films : </b>
        <ul>
          {films.map((film) => (
            <li key={film}>{film}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
