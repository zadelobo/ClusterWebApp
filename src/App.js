import React from "react";
import "./App.css";
import firebase from "./firebase";
import { ClusterInput } from "./SpellInput";

function App() {
  const [clusters, setClusters] = React.useState([]);
  const [newClusterName, setNewClusterName] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("clusters").get();
      setClusters(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("clusters").add({ name: newClusterName });
  };

  return (
    <ul>
      <input
        value={newClusterName}
        onChange={e => setNewClusterName(e.target.value)}
      />
      <button onClick={onCreate}>Create Cluster</button>
      {clusters.map(spell => (
        <li key={spell.name}>
          <ClusterInput spell={spell} />
        </li>
      ))}
    </ul>
  );
}

export default App;
