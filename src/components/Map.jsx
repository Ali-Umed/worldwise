import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';
function Map() {
  const navigate = useNavigate();
  // function dagaretawa url dagoret

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  // wadatwanm updare kamawa bahy amay xwarawa set

  /// programatic navigation wata nmuna formek submate kra yaksar dachta pageketr babae away klike la parayak krdbet
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate('form');
      }}
    >
      <h1>
        position {lat}
        {lng}
      </h1>
      {/*  dabet aw objecta dw parameteraka tekamawa  wa ka gora la har kweaeak bakar hatbet aw urla abdate dabytaawa ja waku data yan url yan har che bakar hatbet waku state waya */}
      <button onClick={() => setSearchParams({ lat: 23, lng: 50 })}>
        Change position{' '}
      </button>
    </div>
  );
}

export default Map;
