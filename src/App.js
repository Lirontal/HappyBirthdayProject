import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./App.css"
import "./temp.css"

export default function App() {
  //const app = useRef();

  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  useEffect(() => {

    tl.current = gsap.timeline()
      .to(q(".container"), {
        duration: 0.1,
        visibility: "visible"
      })

      // .from(q(".one"), {
      //   duration: 0.4,
      //   opacity: 0,
      //   y: 0
      // })
      // .from(q(".two"), {
      //   duration: 0.4,
      //   opacity: 0,
      //   y: 10
      // }, "-=1")
      // .to(q(".one"), {
      //   duration: 0.7,
      //   opacity: 1,
      //   y: -10
      // }, "+=0.5")
      // .to(q(".two"), {
      //   duration: 0.7,
      //   opacity: 1,
      //   y: -10
      // }, "+=0.5")
      // .to(q(".one"), {
      //   duration: 0.7,
      //   opacity: 0,
      //   y: 10
      // }, "+=0.5")
      // .to(q(".two"), {
      //   duration: 0.7,
      //   opacity: 0,
      //   y: 10
      // }, "+=0.5")


      // .from(q(".three"), {
      //   duration: 0.4,
      //   opacity: 0,
      //   y: 0
      // })
      // .to(q(".three"), {
      //   duration: 0.7,
      //   opacity: 1,
      //   y: -10
      // }, "+=0.5")
      // .to(q(".three"), {
      //   duration: 0.7,
      //   opacity: 0,
      //   y: 10
      // }, "+=0.5")





      // .from(q(".text-box"), {
      //         duration: 0.1,
      //         opacity: 0,
      //         scale:0.2,

      //       })
      //       .to(q(".text-box"), {
      //         duration: 0.7,
      //         opacity: 1,
      //         scale:1,

      //       }, "+=0.5")

      .from(q(".four"), {
        duration: 0.7,
        scale: 0.2,
        opacity: 0
      })
      .from(q(".fake-btn"),{
        duration: 0.7,
        scale: 0.2,
        opacity: 0
      })
      .to(
        q(".hbd-chatbox"),
        {
          duration: 0.7,
          visibility: "visible"
        },
        0.05
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

  }, []);

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
            <p className="hbd-chatbox" data-node-name="textInChatBox">אהובה שלי ❤️
              <br />
              המון המון מזל טוב, אני מאחל לך....</p>
            <p className="fake-btn" data-node-name="sendButtonLabel">שלח</p>
          </div>
        </div>
        {/* <div className="five">
      <p className="idea-1" data-node-name="text2">That's what I was going to do.</p>
      <p className="idea-2" data-node-name="text3">But then I stopped.</p>
      <p className="idea-3">
        <span data-node-name="text4">I realised, I wanted to do something</span>
        <strong data-node-name="text4Adjective">special</strong>.</p>
      <p className="idea-4" data-node-name="text5Entry">Because,</p>
      <p className="idea-5">
        <span data-node-name="text5Content">You are Special</span>
        <span className="smiley" data-node-name="smiley">:)</span>
      </p>
      <p className="idea-6">
        <span data-node-name="bigTextPart1">S</span>
        <span data-node-name="bigTextPart2">O</span>
      </p>
    </div>
    <div className="six">
      <img src="img/lydia2.png" alt="" className="lydia-dp" data-node-name="imagePath"/>
      <img src="img/hat.svg" alt="" className="hat"/>
      <div className="wish">
        <h3 className="wish-hbd" data-node-name="wishHeading">Happy Birthday!</h3>
        <h5 data-node-name="wishText">May the js.prototypes always be with you! ;)</h5>
      </div>
    </div>
    <div className="seven">
      <div className="baloons">
        <img src="img/ballon2.svg" alt=""/>
        <img src="img/ballon1.svg" alt=""/>
        <img src="img/ballon3.svg" alt=""/>
        <img src="img/ballon1.svg" alt=""/>
        <img src="img/ballon2.svg" alt=""/>
        <img src="img/ballon3.svg" alt=""/>
        <img src="img/ballon2.svg" alt=""/>
        <img src="img/ballon3.svg" alt=""/>
        <img src="img/ballon1.svg" alt=""/>
        <img src="img/ballon2.svg" alt=""/>
        <img src="img/ballon3.svg" alt=""/>
        <img src="img/ballon2.svg" alt=""/>
        <img src="img/ballon1.svg" alt=""/>
        <img src="img/ballon3.svg" alt=""/>
        <img src="img/ballon2.svg" alt=""/>
        <img src="img/ballon3.svg" alt=""/>
        <img src="img/ballon1.svg" alt=""/>
        <img src="img/ballon2.svg" alt=""/>
        <img src="img/ballon1.svg" alt=""/>
        <img src="img/ballon3.svg" alt=""/>
        <img src="img/ballon3.svg" alt=""/>
        <img src="img/ballon1.svg" alt=""/>
        <img src="img/ballon2.svg" alt=""/>
        <img src="img/ballon3.svg" alt=""/>
        <img src="img/ballon2.svg" alt=""/>
        <img src="img/ballon1.svg" alt=""/>
        <img src="img/ballon3.svg" alt=""/>
        <img src="img/ballon2.svg" alt=""/>
        <img src="img/ballon3.svg" alt=""/>
        <img src="img/ballon1.svg" alt=""/>
        <img src="img/ballon2.svg" alt=""/>
        <img src="img/ballon1.svg" alt=""/>
        <img src="img/ballon3.svg" alt=""/>
      </div>
    </div>
    <div className="eight">
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
    </div>
    <div className="nine">
      <p data-node-name="outroText">Okay, now come back and tell me if you liked it.</p>
      <p id="replay" data-node-name="replayText">Or click, if you want to watch it again.</p>
      <p className="last-smile" data-node-name="outroSmiley">:)</p>
    </div> */}
      </div>
    </div>
  );
}