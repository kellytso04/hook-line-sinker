import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

const samplePhrases = [
  'Got any WINS for me this morning?',
  'Let\'s make it a day',
  'Lemme spin up my announcement machine',
  'ETL more like Pee-TL',
  'Postgres took my lunch  money',
  'I would like to see the baby *vague horn instrument noises*',
  'Can I please just get a waffle?'
];

ReactDOM.render(<App samplePhrases={samplePhrases}/>, document.getElementById("app"));