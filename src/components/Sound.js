import sound from "../assets/sound.mp3";

import icon from "../assets/icon.png";
import muted from "../assets/muted.png";

import useSound from "use-sound";

import styles from "./Sound.module.css";
import { useEffect, useRef, useState } from "react";

function Sound() {
  const [isMuted, setIsMuted] = useState(false);
  const audio = new Audio(sound);

  audio.play();

  return (
    <div
      className={styles.soundContainer}
      onChange={() => {
        setIsMuted(true);
      }}
    >
      {isMuted ? (
        <img src={muted} alt="muted sound icon" />
      ) : (
        <img src={icon} alt="Sound Icon" />
      )}
    </div>
  );
}
export default Sound;
