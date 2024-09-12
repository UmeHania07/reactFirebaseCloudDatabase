import { getFirestore, collection, addDoc, doc, getDoc, query, where, getDocs, updateDoc } from 'firebase/firestore'
import { app } from './Firebase'
import './App.css';

//ise maine apne app ka instence bana liya h

const fireStore = getFirestore(app)

function App() {
  const writeData = async () => {
    //ye cities users ki tarha h collection and first para mai apne app ka instence dety hn..
    // then Path means users and cities..addDoc basically mere ID h document ki

    const result = await addDoc(collection(fireStore, ' cities'), {
      name: " Karachi",
      pinCode: 1234,
      lat: 123,
      long: 456,
    })
    // console.log("Result", result)
  }

  //mujy ab is city k ander place name bhi dene hn means k jaise users k ander purchases deye thy.
  //cities ki ID deke mai oske ander places dogi

  const makeSubCollection = async () => {
    await addDoc(collection(fireStore, 'cities/ZhNddBo7tdlJTyYUicYg/places'), {

      name: "This is a Place 2",
      desc: "Awsm Desc",
      date: Date.now(),
    })
  }

  const getDocument = async () => {
    const ref = doc(fireStore, 'cities', "ZhNddBo7tdlJTyYUicYg")
    //mujy ek single document chaiyee is liye maine getdoc mai apne document ka ref pass kiya h
    const snap = await getDoc(ref);

    console.log(snap.data())

  }
  //agr id pata h to getdoc use kro gi or agr nh pata h or koi condition pe data get krna h to getDocs use krna h

  //multiple documents get krne k liye getdocs hota h..agr mai jobhi where mai dogi to woh mujy
  // wohi return kre ga agr wo true ya false ya jobhi mai dogi


  const getDocumentsByQuery = async () => {
    const CollectionBar = collection(fireStore, 'users');
    const Q = query(CollectionBar, where('isFemale', '==', true))

    //getDoc se collection mai jitne bhi isFemale hogi sab get ke ga
    const snapShort = await getDocs(Q);

    snapShort.forEach((data) => console.log(data.data()))

  }

  const upDate = async () => {
    const docRef = doc(fireStore, 'cities', 'ZhNddBo7tdlJTyYUicYg');
    await updateDoc(docRef, {
      name: 'Islamabad'
    });
  };



  // const writeCast = async() => {
  //  const result = await addDoc(collection(fireStore , ' Casts') , {
  //    cast: " Khan",
  //    whichCast: "YousfZai",
  //    language: "Urdu Speaking",
  //    city: "Karachi",
  //   })
  //    console.log("Result",result)
  // }

  return (
    <div className="App">
      <h1>Firebase App</h1>
      <button onClick={writeData}>Put Data</button>

      <button onClick={makeSubCollection}>Put SubData</button>

      <button onClick={getDocument}>Get Data</button>

      <button onClick={getDocumentsByQuery}>Get Data By Query</button>

      <button onClick={upDate}>Update Data</button>


      {/* <button onClick={writeCast}>Put Cast</button> */}

    </div>
  );
}

export default App;
