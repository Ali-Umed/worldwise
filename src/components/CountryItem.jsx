<<<<<<< HEAD
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
=======
import styles from './CountryItem.module.css';

const flagemojiToPNG = flag => {
  var countryCode = Array.from(flag, codeUnit => codeUnit.codePointAt())
    .map(char => String.fromCharCode(char - 127397).toLowerCase())
    .join('');
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

function CountryItem({ country }) {
  const { country: cl, emoji } = country;
  return (
    <li className={styles.CountryItem}>
      <span className={styles.emoji}>{flagemojiToPNG(emoji)}</span>
      <h3 className={styles.name}>{cl}</h3>
>>>>>>> 8db943725b5ac4d337ba1f73294ee385d05f8df1
    </li>
  );
}

export default CountryItem;
