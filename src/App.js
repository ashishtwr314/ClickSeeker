import Particles from "react-tsparticles";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Offerings from "./components/Offerings/Offerings";
import Button from "./UtilityComponents/Button";

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div>
      <div className="">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: true,
              zIndex: 1,
            },
            particles: {
              number: {
                value: 10,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "image",
                image: [
                  {
                    src: process.env.PUBLIC_URL + "/assets/bubble.png",
                    width: 32,
                    height: 32,
                  },
                ],
              },
              opacity: {
                value: 1,
                random: false,
                animation: {
                  enable: false,
                  speed: 1,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 20,
                random: {
                  enable: true,
                  minimumValue: 10,
                },
                animation: {
                  enable: false,
                  speed: 40,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
              lineLinked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                bounce: true,
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "bounce",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: false,
                  mode: "attract",
                  parallax: {
                    enable: true,
                    force: 60,
                    smooth: 10,
                  },
                },
                onClick: {
                  enable: true,
                  mode: "pause",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      <Hero />
      <Offerings />
      <div className="relative w-full h-[700px] consultant_wrapper ">
        <div className="consultant_container  h-[auto]  bg-[#B2DADB] rounded-3xl w-[80%]  mx-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden">
          <div className="px-6 pt-12">
            <h4 className={`text-base text-[#D4494C]`}>
              Improve Online Preformance
            </h4>
            <h2 className="mt-3 mb-2">
              Want to get your site optimized and ranked in google?
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Morbi sit eu placerat.
            </p>
            <Button className={"mt-4"}>Contact Us</Button>
          </div>
          {/* <div className="h-full absolute w-full">
            <div className="absolute sand-layer-front h-[200px] w-full bottom-0 bg-repeat-x"></div>
            <div className="absolute sand-layer-back h-[200px] w-full bottom-0 -z-10 bg-repeat-"></div>
          </div> */}
          <div className=" mt-10 px-6 mb-9 z-10 treasure-box">
            <img
              src={process.env.PUBLIC_URL + "/assets/treasure-box.png"}
              alt="treasure-mobile"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
