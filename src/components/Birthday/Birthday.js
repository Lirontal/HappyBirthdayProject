import React, { useState, useRef, useEffect } from "react";
import { gsap, Expo, Elastic } from "gsap";
import "./Birthday.css"
import bal1 from '../../images/balloon1.svg';
import bal2 from '../../images/balloon2.svg';
import bal3 from '../../images/balloon3.svg';
import bal4 from '../../images/balloon4.svg';

import reut from '../../images/reut.JPG';
import hat from '../../images/hat.svg';

import { getRandomInt } from "../../utils";
import { randomizeFireworks } from "./birthdayUtils";
import CarouselComponent from "../Carousel/Carousel";

export default function Birthday() {

  const [isShowCarousel, setIsShowCarousel] = useState(false);

  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();
  const balloons = [bal1, bal2, bal3, bal4];

  const ideaTextTrans = (extra) => {
    return {
      opacity: 0,
      y: -20,
      rotationX: 5,
      skewX: "15deg",
      ...extra
    }
  };

  const ideaTextTransLeave = (extra) => {
    return {
      opacity: 0,
      y: 20,
      rotationY: 5,
      skewX: "-15deg",
      ...extra
    }
  };

  const textbox = `אהובה שלי ❤️
המון המון מזל טוב, אני מאחל לך....`;

  const b =
    textbox.split("").map((c, i) => <span key={i}>{c}</span>)

  useEffect(() => {

    const hbd = document.getElementsByClassName("wish-hbd")[0];
    hbd.innerHTML = `<span>${hbd.innerHTML.replace(/""/g, " ")
      .split("").map(a => `${a === "" ? " " : a}`)
      .join("</span><span>")}</span`;

    tl.current = gsap.timeline()
      .to(q(".container"), {
        duration: 0.1,
        visibility: "visible"
      })
      .from(q(".one"), {
        duration: 0.7,
        opacity: 0,
        y: 10
      })
      .from(q(".two"), {
        duration: 0.4,
        opacity: 0,
        y: 10
      })
      .to(
        q(".one"),
        {
          duration: 0.7,
          opacity: 0,
          y: 10
        },
        2
      )
      .to(
        q(".two"),
        {
          duration: 0.7,
          stagger: "-=1",
          opacity: 0,
          y: 10
        },
      )
      .from(q(".three"), {
        duration: 0.7,
        opacity: 0,
        y: 10
        // scale: 0.7
      })
      .to(
        q(".three"),
        {
          duration: 0.7,
          opacity: 0,
          y: 10
        },
        "+=2"
      )

      .from(q(".four"), {
        duration: 0.7,
        scale: 0.2,
        opacity: 0
      })
      .from(q(".fake-btn"), {
        duration: 0.3,
        scale: 0.2,
        opacity: 0
      })
      .to(
        q(".hbd-chatbox span"),
        {
          duration: 0.7,
          stagger: 0.05,
          visibility: "visible"
        },
      )
      .to(q(".fake-btn"), {
        duration: 0.1,
        backgroundColor: "rgb(127, 206, 248)"
      })
      .to(
        q(".four"),
        {
          duration: 0.5,
          scale: 0.2,
          opacity: 0,
          y: -150
        },
        "+=0.7"
      )


      .from(q(".idea-1"), ideaTextTrans({ duration: 0.7 }))
      .to(q(".idea-1"), ideaTextTransLeave({ stagger: 1.5, duration: 0.7 }), "+=1.5")
      .from(q(".idea-2"), ideaTextTrans({ duration: 0.7 }))
      .to(q(".idea-2"), ideaTextTransLeave({ stagger: 1.5, duration: 0.7 }), "+=1.5")
      .from(q(".idea-3"), ideaTextTrans({ duration: 0.7 }))
      .to(q(".idea-3 strong"), {
        duration: 0.5,
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
        marginRight: "30px"
      })
      .to(q(".idea-3"), ideaTextTransLeave({ stagger: 1.5, duration: 0.7 }), "+=1.5")


      .from(q(".idea-4"), ideaTextTrans({ duration: 0.7 }))
      .to(q(".idea-4"), ideaTextTransLeave({ duration: 0.7 }), "+=1.5")
      .from(
        q(".idea-5"),
        {
          duration: 0.7,
          rotationX: 15,
          rotationZ: -10,
          skewY: "-5deg",
          y: 50,
          z: 10,
          opacity: 0
        },
        "+=0.5"
      )
      .to(
        q(".idea-5 .smiley"),
        {
          duration: 0.7,
          rotation: -90,
          x: 8
        },
        "+=0.4"
      )
      .to(
        q(".idea-5"),
        {
          duration: 0.7,
          scale: 0.2,
          opacity: 0
        },
        "+=2"
      )

      .from(
        q(".idea-6 span"),
        {
          duration: 0.8,
          stagger: 0.2,
          scale: 3,
          opacity: 0,
          rotation: 15,
          ease: Expo.easeOut
        },
      )
      .to(
        q(".idea-6 span"),
        {
          duration: 0.8,
          stagger: 0.2,
          scale: 3,
          opacity: 0,
          rotation: -15,
          ease: Expo.easeOut
        },
        "+=1"
      )

      .fromTo(
        q(".baloons img"),
        {
          opacity: 0.9,
          y: 1400,
          stagger: 0.2,
        },
        {
          duration: 2.5,
          opacity: 1,
          y: -1000,
          stagger: 0.2,
        },
        "+=0.5"
      )

      .from(
        q(".reut-dp"),
        {
          duration: 0.5,
          scale: 3.5,
          opacity: 0,
          x: 25,
          y: -25,
          rotationZ: -45
        },
        "-=2"
      )
      .from(
        q(".hat"),
        {
          duration: 0.5,
          x: "20vw",
          y: "-150px",
          rotation: 20,
          opacity: 0
        }, "+=1")


      .from(
        q(".wish-hbd span"),
        {
          opacity: 0,
          y: -50,
          // scale: 0.3,
          rotation: -150,
          skewX: "30deg",
          ease: Elastic.easeOut.config(1, 0.5),
          stagger: 0.1,
        },
      )
      .fromTo(
        q(".wish-hbd span"),
        {
          duration: 0.7,
          scale: 1.4,
          rotationY: 150
        },
        {
          stagger: 0.1,
          scale: 1,
          rotationY: 0,
          color: "#ff69b4",
          ease: Expo.easeOut,
          transform: "scaleX(1)"
        },
        "party",
        4
      )

      .to(
        ".eight svg",
        {
          duration:1.5,
          visibility: "visible",
          opacity: 0,
          scale: 80,
          repeat: 2,
          repeatDelay: 0.7,
          stagger:0.3,
          onComplete:()=> {console.log("done")}
        },
      )
  }, []);

  const randomBalloons = (n = 50) => {
    const res = [];
    [...Array(n)].forEach((e, i) => {
      const indexBalloon = balloons[i % balloons.length]
      res.push(<img
         key={i} 
        src={indexBalloon}
        //style={{right:`${randomPosition}vw`,left:`${randomPosition2}vw`}}
        alt="" />)
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
            <span data-node-name="bigTextPart2">.</span>
            <span data-node-name="bigTextPart2">.</span>
            <span data-node-name="bigTextPart2">.</span>
          </p>
        </div>

        <div className="six">
          <img src={reut} alt="" className="reut-dp" data-node-name="imagePath" draggable="false" />
          <img src={hat} alt="" className="hat" />
          <div className="wish">
            <h3 className="wish-hbd" data-node-name="wishHeading">יום הולדת שמח!</h3>
          </div>
        </div>
        <div className="seven">
          <div className="baloons">
            {randomBalloons()}
          </div>
        </div>
        
        <div className="eight">
          {randomizeFireworks()}
        </div>
        {isShowCarousel && <div className="carousel">
          <CarouselComponent />
        </div>}
      </div>
    </div>
  );
}