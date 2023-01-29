import React from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "./ParticleConfig";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { polygonPathName, loadPolygonPath } from "tsparticles-path-polygon";

const Particle = () => {
  const optionsDeer = {
    detectRetina: false,
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 8,
          size: 6,
          speed: 3,
        },
      },
    },
    particles: {
      color: {
        value: "#ff0000",
        animation: {
          enable: true,
          speed: 20,
          sync: true,
        },
      },
      lineLinked: {
        blink: false,
        color: "random",
        consent: false,
        distance: 30,
        enable: true,
        opacity: 0.3,
        width: 0.5,
      },
      move: {
        attract: {
          enable: false,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        bounce: false,
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: true,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: false,
          area: 2000,
        },
        limit: 0,
        value: 200,
      },
      opacity: {
        animation: {
          enable: true,
          minimumValue: 0.05,
          speed: 2,
          sync: false,
        },
        random: false,
        value: 1,
      },
      shape: {
        type: "circle",
      },
      size: {
        animation: {
          enable: false,
          minimumValue: 0.1,
          speed: 40,
          sync: false,
        },
        random: true,
        value: 1,
      },
    },
    polygon: {
      draw: {
        enable: true,
        lineColor: "rgba(255,255,255,0.2)",
        lineWidth: 0.3,
      },
      move: {
        radius: 10,
      },
      inlineArrangement: "equidistant",
      scale: 0.5,
      type: "inline",
      url: "https://particles.js.org/images/smalldeer.svg",
    },
  };
  const optionsHex = {
    particles: {
      color: {
        value: "#FF0000",
        animation: {
          enable: true,
          speed: 10,
        },
      },
      move: {
        attract: {
          enable: false,
          distance: 100,
          rotate: {
            x: 2000,
            y: 2000,
          },
        },
        direction: "none",
        enable: true,
        outModes: {
          default: "destroy",
        },
        path: {
          clamp: false,
          enable: true,
          delay: {
            value: 0,
          },
          generator: "polygonPathGenerator",
          options: {
            sides: 6,
            turnSteps: 30,
            angle: 30,
          },
        },
        random: false,
        speed: 3,
        straight: false,
        trail: {
          fillColor: "#000",
          length: 20,
          enable: true,
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 0,
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 2,
      },
    },
    background: {
      color: "#000",
    },
    fullScreen: {
      zIndex: -1,
    },
    emitters: {
      direction: "none",
      rate: {
        quantity: 1,
        delay: 0.25,
      },
      size: {
        width: 0,
        height: 0,
      },
      position: {
        x: 50,
        y: 50,
      },
    },
  };
  const optionsHex2 = {
    fpsLimit: 100,
    onHover: {
      enable: true,
      mode: "bubble",
    },
    particles: {
      color: {
        value: "#b21df2",
        value: "#1bb9f7",
        // value: "#23dcfc",
        animation: {
          enable: true,
          speed: 10,
        },
      },
      move: {
        attract: {
          enable: true,
          distance: 100,
          rotate: {
            x: 2000,
            y: 2000,
          },
        },
        direction: "none",
        enable: true,
        outModes: {
          default: "destroy",
        },
        path: {
          clamp: false,
          enable: true,
          delay: {
            value: 0,
          },
          generator: polygonPathName,
          options: {
            sides: 6,
            turnSteps: 30,
            angle: 30,
          },
        },
        random: false,
        speed: 3,
        straight: false,
        trail: {
          fillColor: "true",
          length: 20,
          enable: false,
        },
      },
      number: {
        density: {
          enable: true,
          area: 400,
        },
        value: 0,
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 2,
      },
    },
    background: {
      color: "#000",
    },
    fullScreen: {
      zIndex: -1,
    },
    emitters: {
      direction: "none",
      rate: {
        quantity: 1,
        delay: 0.25,
      },
      //this controls the center
      size: {
        width: 5,
        height: 5,
      },
      position: {
        x: 50,
        y: 50,
      },
    },
  };
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    //console.log(container);
  }, []);
  return (
    <div className="polygon">
      <Particles
        id="tsparticles"
        init={particlesInit}
        //   style={{ position: "absolute" }}
        //   height="95%"
        //   width="95%"
        options={optionsHex2}
      ></Particles>
    </div>
  );
};

export default Particle;
