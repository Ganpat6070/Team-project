import db from "../firebase";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";

function ShowData() {
//   const [userdata, setUserdata] = useState([]);
//   console.log(userdata);
  useEffect(
    () =>
      onSnapshot(
        collection(db, "userdata"),
        (snapshot) => 
        console.log(snapshot.docs.map((doc) => doc.data())),
        // setUserdata(snapshot.docs.map((doc) => ({...doc.data(),id:doc.id})))
      ),
    [],
  );
  return <div>showData</div>;
}

export default ShowData;
