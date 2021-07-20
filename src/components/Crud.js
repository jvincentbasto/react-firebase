import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import firebase from 'firebase/firebaseApp';
import { useAuth } from 'contexts/AuthContext';



export default function Crud() {
  const { currentUser } = useAuth();
  const currentUserId = currentUser ? currentUser.uid : null;
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [score, setScore] = useState('');

  const ref = firebase.firestore().collection('schools');



  //REALTIME GET FUNCTION
  function getSchools() {
    setLoading(true);
    ref
      .where('owner', '==', currentUserId)
      //.where('title', '==', 'School1') // does not need index
      //.where('score', '<=', 10)    // needs index
      //.orderBy('owner', 'asc')
      //.limit(3)
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setSchools(items);
        setLoading(false);
      });
  }



  useEffect(() => {
    getSchools();
    // eslint-disable-next-line
  }, []);



  // ADD FUNCTION
  function addSchool() {
    const owner = currentUser ? currentUser.uid : 'unknown';
    const ownerEmail = currentUser ? currentUser.email : 'unknown';
    const newSchool = {
      title,
      desc,
      score: +score,
      id: uuidv4(),
      owner,
      ownerEmail,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
    };

    ref
      .doc(newSchool.id)
      .set(newSchool)
      .catch((err) => {
        console.error(err);
      });
  }



  //DELETE FUNCTION
  function deleteSchool(school) {
    ref
      .doc(school.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }



  // EDIT FUNCTION
  function editSchool(school) {
    const updatedSchool = {
      score: +score,
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
      desc
    };
    setLoading();
    ref
      .doc(school.id)
      .update(updatedSchool)
      .catch((err) => {
        console.error(err);
      });
  }



  return (
    <>
      <h1>Schools (Advance Snapshot | CRUD)</h1>
      <div className="inputBox">
        <h3>Add New</h3>
        <h6>Title</h6>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h6>Score 0-10</h6>
        <input
          type="number"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <h6>Description</h6>
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
        <button onClick={() => addSchool()}>Submit</button>
      </div>


      <hr />
      {loading ? <h1>Loading...</h1> : null}


      {schools.map((school) => (
        <div className="school" key={school.id}>
          <h2>{school.title}</h2>
          <p>{school.desc}</p>
          <p>{school.score}</p>
          <p>{school.ownerEmail}</p>
          <div>
            <button onClick={() => deleteSchool(school)}>X</button>
            <button onClick={() => editSchool(school)}>Edit Score</button>
          </div>
        </div>
      ))}

    </>
  );
}