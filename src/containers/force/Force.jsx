import React from 'react';
import "./force.css";
import { Sith } from "../../components";

function Force() {
  return (
    <div className="vador__force section__margin" id="sith">
      <div className="vador__force-feature">
        <Sith title="What is a Sith" text="An ancient order of Force-wielders devoted to the dark side, the Sith practice hate, deception, and greed. Notable for their red-bladed lightsabers, black dress, and use of their aggressive feelings, the Sith look to amass power at all costs. The evil Darth Sidious, along with his apprentice Darth Vader, achieved the Sith goal of galactic conquest after a millennia of plotting." />
      </div>
      <div className="vador__force-heading">
        <h1 className="gradient__text">
          “No … I am your Father…”
        </h1>
        <p>
        “No … I dont't think so…”
        </p>
      </div>
      <div className="vador__force-container">
      <Sith title="History" text="The Sith remained a distant memory -- until the rise of Darth Sidious and his apprentice, Darth Maul, in the last days of the Republic. Sidious hid in plain sight as the unassuming Senator Palpatine of Naboo, while secretly orchestrating the Trade Federation’s invasion of the planet. This allowed him to make a play for the galaxy’s highest office in his civilian persona and sow the seeds of Sith revenge." />
      <Sith title="Anakin Skywalker" text="Discovered as a slave on Tatooine by Qui-Gon Jinn and Obi-Wan Kenobi, Anakin Skywalker had the potential to become one of the most powerful Jedi ever. Some even believed he was the prophesied Chosen One who would bring balance to the Force. Always pushing the limits of his Jedi training, seeking to excel and live up to his reputation, Skywalker's passion often brought him into conflict with his mentor, Jedi Master Obi-Wan Kenobi." />
      <Sith title="Darth Vader" text="Once the heroic Jedi Knight named Anakin Skywalker, Darth Vader was seduced by the dark side of the Force. Forever scarred by his defeat on Mustafar, Vader was transformed into a cybernetically-enhanced Sith Lord. At the dawn of the Empire, Vader led the Empire’s eradication of the Jedi Order and the search for survivors. He remained in service of the Emperor -- the evil Darth Sidious -- for decades, enforcing his Master’s will and seeking to crush the Rebel Alliance and other detractors. But there was still good in him…" />
      </div>
    </div>
  )
}

export default Force
