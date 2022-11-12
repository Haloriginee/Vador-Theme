import React from 'react';
import "./features.css";
import { Sith } from "../../components";

// maping this time !!
const featuresData = [
  {
    title: "Darth Maul",
    text: "A deadly, agile Sith Lord trained by the evil Darth Sidious, Darth Maul was a formidable warrior and scheming mastermind."
  },
  {
    title: "Emperor Palpatine / Darth Sidious",
    text: "The dark side of the Force is a pathway to many abilities some consider to be unnatural, and Sheev Palpatine is the most infamous follower of its doctrines."
  },
  {
    title: "General Grievous",
    text: "General Grievous was a brilliant Separatist military strategist and a feared Jedi hunter, known for his ruthlessness and hacking cough."
  },
  {
    title: "Count Dooku",
    text: "Count Dooku was a menacing Sith Lord and central figure in the Clone Wars. Once a Jedi -- trained by Yoda -- he became disillusioned with the Jedi Order and thirsted for greater power."
  },
]

function Features() {
  return (
    <div className="vador__features section__padding" id="bboys">
      <div className="vador__features-heading">
        <h1 className="gradient__text">
        “This will be a day long remembered. It has seen the end of Kenobi. It will soon see the end of the Rebellion.”
        </h1>
        <p>
          “Anakin was meant to bring balance and failed at the cost of everything he ever loved.…”
        </p>
      </div>
      <div className="vador__features-container">
        {featuresData.map((item, index) => (
          <Sith title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features
