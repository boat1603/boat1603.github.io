const config = {
  // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
  // like '/berry-material-react/react/default'
  basename: "/",
  defaultPath: "/#",
  borderRadius: 18,
  mode: "dark",
  bgColor: "normal",
  bgList: [
    "normal",
    "JShine",
    "TheBlueLagoon",
    "Flare",
    "Wiretap",
    "Magic",
    "CrystalClear",
    "Superman",
    "Twitch",
    "Instagram",
  ],
  bgMap: (mode, name) => {
    let darkOpacity = "66"; //0.4;
    let lightOpacity = "80"; //0.5;
    let opacity = mode === "dark" ? darkOpacity : lightOpacity;
    // https://uigradients.com/#Inbox
    // https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
    let color_map = {
      normal: "rgba(0,0,0,0)",
      JShine: `linear-gradient(to right, #12c2e9${opacity}, #c471ed${opacity}, #f64f59${opacity})`,
      Flare: `linear-gradient(to right, #f12711${opacity}, #f5af19${opacity})`,
      Wiretap: `linear-gradient(to right, #009fff${opacity}, #ec2f4b${opacity})`,
      Magic: `linear-gradient(to right, #59c173${opacity}, #a17fe0${opacity}, #5d26c1${opacity})`,
      CrystalClear: `linear-gradient(to right, #159957${opacity}, #155799${opacity})`,
      TheBlueLagoon: `linear-gradient(to right, #43c6ac${opacity}, #191654${opacity})`,
      Superman: `linear-gradient(to right, #0099f7${opacity}, #f11712${opacity})`,
      Twitch: `linear-gradient(to right, #6441a5${opacity}, #2a0845${opacity})`,
      Instagram: `linear-gradient(to right, #833ab4${opacity}, #fd1d1d${opacity}, #fcb045${opacity})`,
      // Magic: ``,
    };

    return color_map[name];
  },
  magicNumber: 768,
};

export default config;
