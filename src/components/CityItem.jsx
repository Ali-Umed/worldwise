<<<<<<< HEAD
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
=======
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from './CityItem.module.css';
import { Link } from 'react-router-dom';

const flagemojiToPNG = flag => {
  var countryCode = Array.from(flag, codeUnit => codeUnit.codePointAt())
    .map(char => String.fromCharCode(char - 127397).toLowerCase())
    .join('');
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

const formatDate = date =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  return (
    <li>
      {/*  wata id bo url aka zead bka  wa nabet / danem, lyeara gar na dachetaaw paray sarake u inja id zeadakat  wa dwatr hatm query stringm zeadkrd ?
      firsst the regular url then ? and and variable name =  data itself
      // aysta datakam bwa  global   chunka brdma url datwanm ka hamu shwynek bakare byenm 
      */}
      <Link
        className={styles.cityItem}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{flagemojiToPNG(emoji)}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}> {formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
>>>>>>> 8db943725b5ac4d337ba1f73294ee385d05f8df1
