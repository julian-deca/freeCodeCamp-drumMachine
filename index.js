function APP() {
  const [mode, setMode] = React.useState(0);
  const [display, setDisplay] = React.useState("");

  window.addEventListener("keydown", press);

  function press(event) {
    switch (event.key.toLowerCase()) {
      case "q":
        const pad1 = document.querySelector("#pads div:nth-child(1)");
        pad1.click();
        break;
      case "w":
        const pad2 = document.querySelector("#pads div:nth-child(2)");
        pad2.click();
        break;
      case "e":
        const pad3 = document.querySelector("#pads div:nth-child(3)");
        pad3.click();
        break;
      case "a":
        const pad4 = document.querySelector("#pads div:nth-child(4)");
        pad4.click();
        break;
      case "s":
        const pad5 = document.querySelector("#pads div:nth-child(5)");
        pad5.click();
        break;
      case "d":
        const pad6 = document.querySelector("#pads div:nth-child(6)");
        pad6.click();
        break;
      case "z":
        const pad7 = document.querySelector("#pads div:nth-child(7)");
        pad7.click();
        break;
      case "x":
        const pad8 = document.querySelector("#pads div:nth-child(8)");
        pad8.click();
        break;
      case "c":
        const pad9 = document.querySelector("#pads div:nth-child(9)");
        pad9.click();
        break;
    }
  }

  function hit(event) {
    const pad = event.currentTarget;
    setDisplay(pad.id);
    const clip = pad.getElementsByTagName("audio")[mode];
    clip.play();
  }

  return (
    <div id="back" className="container p-5 ">
      <div className="" id="drum-machine">
        <div id="display" className="d-flex align-items-center">
          <label id="screen">{display}</label>
        </div>
        <div id="pads" className="d-flex flex-wrap justify-content-center">
          <div onClick={hit} className="drum-pad" id="tsss">
            Q<audio src="sounds/s1.mp3" id="Q" className="clip"></audio>
          </div>
          <div onClick={hit} className="drum-pad" id="tap">
            W<audio src="sounds/s2.mp3" id="W" className="clip"></audio>
          </div>
          <div onClick={hit} className="drum-pad" id="low bass">
            E<audio src="sounds/s3.mp3" id="E" className="clip"></audio>
          </div>
          <div onClick={hit} className="drum-pad" id="steel drum">
            A<audio src="sounds/s4.mp3" id="A" className="clip"></audio>
          </div>
          <div onClick={hit} className="drum-pad" id="clapp">
            S<audio src="sounds/s5.mp3" id="S" className="clip"></audio>
          </div>
          <div onClick={hit} className="drum-pad" id="small steel drum">
            D<audio src="sounds/s6.mp3" id="D" className="clip"></audio>
          </div>
          <div onClick={hit} className="drum-pad" id="large steel drum">
            Z<audio src="sounds/s7.mp3" id="Z" className="clip"></audio>
          </div>
          <div onClick={hit} className="drum-pad" id="box">
            X<audio src="sounds/s8.mp3" id="X" className="clip"></audio>
          </div>
          <div onClick={hit} className="drum-pad" id="big box">
            C<audio src="sounds/s9.mp3" id="C" className="clip"></audio>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<APP />, document.getElementById("app"));
