import React, { useRef, useEffect } from "react";
import { gsap, Expo } from "gsap";
import "./Birthday.css"
import bal1 from '../../images/balloon1.svg';
import bal2 from '../../images/balloon2.svg';
import bal3 from '../../images/balloon3.svg';

import reut from '../../images/reut.jpg';

import { getRandomInt } from "../../utils";
export default function Birthday() {

  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();
  const balloons = [bal1, bal2, bal3];

  const ideaTextTrans = {
    opacity: 1,
    y: -20,
    duration: 0.7,

  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    duration: 0.7,
  };

  const textbox = `אהובה שלי ❤️
המון המון מזל טוב, אני מאחל לך....`;

  const a = `<span>${textbox
    .split("")
    .join("</span><span>")}</span`;
  const b =
    textbox.split("").map((c, i) => <span key={i}>{c}</span>)

  useEffect(() => {

    tl.current = gsap.timeline()
      .from(q(".text-box"), {
        visibility: "hidden"
      })
      .to(q(".container"), {
        duration: 0.1,
        visibility: "visible"
      })

      .from(q(".one"), {
        duration: 0.4,
        opacity: 0,
        y: 0
      })
      .from(q(".two"), {
        duration: 0.4,
        opacity: 0,
        y: 10
      }, "-=1")
      .to(q(".one"), {
        duration: 0.7,
        opacity: 1,
        y: -10
      }, "+=0.5")
      .to(q(".two"), {
        duration: 0.7,
        opacity: 1,
        y: -10
      }, "+=0.5")
      .to(q(".one"), {
        duration: 0.7,
        opacity: 0,
        y: 10
      }, "+=0.5")
      .to(q(".two"), {
        duration: 0.7,
        opacity: 0,
        y: 10
      }, "+=0.5")


      .from(q(".three"), {
        duration: 0.4,
        opacity: 0,
        y: 0
      })
      .to(q(".three"), {
        duration: 0.7,
        opacity: 1,
        y: -10
      }, "+=0.5")
      .to(q(".three"), {
        duration: 0.7,
        opacity: 0,
        y: 10
      }, "+=0.5")





      .from(q(".text-box"), {
        duration: 2.1,
        opacity: 0,
        scale: 0.2,
      })
      .to(q(".text-box"), {
        duration: 0.7,
        opacity: 1,
        scale: 1,
        visibility: "visible"

      }, "+=0.5")

      .from(q(".fake-btn"), {
        duration: 0.7,
        scale: 0.2,
        opacity: 0
      })
      .to(q(".fake-btn"), {
        duration: 0.7,
        scale: 1,
        opacity: 1
      }, "-=0.5")
      .to(
        q(".hbd-chatbox span"),
        {
          stagger: 0.08,
          duration: 0.7,
          visibility: "visible"
        },
      )
      .to(q(".fake-btn"), {
        duration: 0.7,
        backgroundColor: "rgb(127, 206, 248)"
      })
      .to(
        q(".four"),
        {
          duration: 0.7,
          scale: 0.2,
          opacity: 0,
          y: -150
        },
        "+=0.7"
      )



      .from(q(".idea-1"), ideaTextTransLeave)
      .to(q(".idea-1"), ideaTextTrans, "+=1")
      .to(q(".idea-1"), {
        duration: 0.7,
        opacity: 0,
        y: 20
      }, "+=1")

      .from(q(".idea-2"), ideaTextTransLeave)
      .to(q(".idea-2"), ideaTextTrans, "+=1")
      .to(q(".idea-2"), {
        duration: 0.7,
        opacity: 0,
        y: 20
      }, "+=1")

      .from(q(".idea-3"), { ...ideaTextTransLeave, visibility: "hidden" })
      .to(q(".idea-3"), {
        ...ideaTextTrans, visibility: "visible"
      }, "+=1")
      .to(".idea-3 strong", {
        duration: 0.5,
        scale: 1.2,
        x: -10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
        visibility: "visible"
      })
      .to(q(".idea-3"), {
        duration: 0.7,
        opacity: 0,
        y: 20
      }, "+=0.5")

      .from(q(".idea-4"), ideaTextTransLeave)
      .to(q(".idea-4"), ideaTextTrans, "+=1")
      .to(q(".idea-4"), {
        duration: 0.7,
        opacity: 0,
        y: 20
      }, "+=0.5")



      .from(q(".idea-5"), {
        ...ideaTextTransLeave, rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        z: 10
      })
      .to(q(".idea-5"), {
        ...ideaTextTrans, rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        z: 10
      }, "+=1")
      .to(
        q(".idea-5 .smiley"),
        {
          duration: 0.7,
          rotation: -90,
          x: 8
        },
        "+=0.4"
      )
      .to(q(".idea-5"), {
        duration: 0.6,
        opacity: 0,
        y: 20
      }, "+=0.3")

      .from(
        q(".idea-6 span"),
        {
          duration: 0.8,
          opacity: 0,
          rotation: 15,
          ease: Expo.easeIn
        },
      )
      .to(q(".idea-6 span"), {
        stagger: 0.2,
        scale: 1,
        opacity: 1,
        rotation: 0,
      }, "+=1")
      .to(
        q(".idea-6 span"),
        {
          stagger: 0.2,
          duration: 0.8,
          scale: 1,
          opacity: 0,
          rotation: -15,
          ease: Expo.easeIn
        },
        "+=1"
      )


      .fromTo(
        q(".baloons img"),
        {
          stagger: 0.2,
          opacity: 0.9,
          y: 1400,
          duration: 0,
        },
        {
          stagger: 0.2,
          opacity: 1,
          y: -1000,
          duration: 2.5,
        },
      )

      .from(
        ".reut-dp",
        {
          duration: 0.5,
          opacity: 0,
        },
        "-=11.5"

      )
      .to(
        ".reut-dp",
        {
          duration: 0.5,
          opacity: 1,
          y: -10,
        },
        "-=10.5"
      )

  }, []);

  const randomBalloons = (n = 50) => {
    // return;
    const res = [];
    [...Array(n)].forEach((e, i) => {
      const randomBalloonIndex = getRandomInt(balloons.length);
      res.push(<img key={i} src={balloons[randomBalloonIndex]} alt="" />)
    })
    return res;
  }
  return (
    <div ref={el} className="App">
      <div className="container">
        <div className="a">
          <h1 className="one">
            <span data-node-name="greeting">היי </span>
            <span data-node-name="name">רעותי</span>
          </h1>
          <p className="two" data-node-name="greetingText">היום זה לא עוד יום רגיל</p>
        </div>
        <div className="three">
          <p data-node-name="text1">היום זה יום ההולדת שלך!!</p>
        </div>
        <div className="four">
          <div className="text-box">
            <p className="hbd-chatbox" data-node-name="textInChatBox">
              {b}
            </p>
          </div>
          <p className="fake-btn" data-node-name="sendButtonLabel">שלח</p>
        </div>


        <div className="five">
          <p className="idea-1" data-node-name="text2">זה מה שהתכוונתי לעשות</p>
          <p className="idea-2" data-node-name="text3">אבל אז עצרתי</p>
          <p className="idea-3">
            <span data-node-name="text4">הבנתי שאני רוצה לעשות משהו</span>
            <strong data-node-name="text4Adjective">מיוחד</strong></p>
          <p className="idea-4" data-node-name="text5Entry">בגלל</p>
          <p className="idea-5">
            <span className="idea5text" data-node-name="text5Content">שאת מיוחדת</span>
            <span className="smiley" data-node-name="smiley">:)</span>
          </p>
          <p className="idea-6">
            <span data-node-name="bigTextPart1">א</span>
            <span data-node-name="bigTextPart2">ז</span>
          </p>
        </div>

        <div className="six">
          <img src={reut} alt="" className="reut-dp" data-node-name="imagePath" />
          <div className="wish">
            {/* <h3 className="wish-hbd" data-node-name="wishHeading">Happy Birthday!</h3>
            <h5 data-node-name="wishText">May the js.prototypes always be with you! ;)</h5> */}
          </div>
        </div>
        <div className="seven">
          <div className="baloons">
            {randomBalloons()}
          </div>
        </div>
        {/* <div className="eight">
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" />
      </svg>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" />
      </svg>
    </div> */}
        {/*<div className="nine">
      <p data-node-name="outroText">Okay, now come back and tell me if you liked it.</p>
      <p id="replay" data-node-name="replayText">Or click, if you want to watch it again.</p>
      <p className="last-smile" data-node-name="outroSmiley">:)</p>
    </div> */}
      </div>
    </div>
  );
}