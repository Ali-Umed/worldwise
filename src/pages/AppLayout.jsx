import Sidebar from '../components/Sidebar';
import styles from './AppLayout.module.css';
import Map from '../components/Map';
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      {/*  dakret bo side bar ba childern element u component e bo bnirm balam boya wam nakrdwa chunka hich prope nia kawa kysha niaw awa codamakm clean tra  */}
      <Map />
    </div>
  );
}

export default AppLayout;
