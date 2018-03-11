import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD9YHwpe1Tyo0TbjSVLbcXihq1wX1xiHzU",
    authDomain: "residetestrachelmoore.firebaseapp.com",
    databaseURL: "https://residetestrachelmoore.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;