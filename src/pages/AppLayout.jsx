<<<<<<< HEAD
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";

import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
=======
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
>>>>>>> 8db943725b5ac4d337ba1f73294ee385d05f8df1
