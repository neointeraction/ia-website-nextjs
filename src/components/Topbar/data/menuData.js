import RUMS from "@/images/header/rums.png";
import AP from "@/images/header/ap.png";

export const whatWeDoData = [
  {
    title: "We Accelerate",
    path: "/accelerate",
    listItems: [
      {
        text: "Our theses",
        listSubData: [
          {
            text: "Robotics & Unmanned & Space (RUMS)",
            path: "/theses-robotics-rums",
            img: RUMS,
          },
          { text: "Consumer", path: "/theses-consumer", img: AP },
          {
            text: "Gaming, Media & Entertainment (GaME)",
            path: "/theses-gaming-media-entertainment-game",
            img: RUMS,
          },
          {
            text: "Energy, Mobility & Connectivity(EMC)",
            path: "/theses-energy-mobility-connectivityemc",
            img: RUMS,
          },
          {
            text: "Singularity/GenAI",
            path: "/theses-singularitygenai",
            img: RUMS,
          },
          { text: "Impact Labs", path: "/theses-impact-labs", img: RUMS },
        ],
      },
      {
        text: "Accelerator programs",
        listSubData: [
        
          { text: "IA- iAgri", path: "/accelerate-program-iagri", img: RUMS },
          { text: "IA Cipher", path: "/accelerate-program-iacipher", img: RUMS },
          { text: "IA Deep Tech", path: "/accelerate-program-ia-deep-tech", img: RUMS },
          { text: "IA'B2B Tech", path: "/accelerate-program-iab2b-tech", img: RUMS },
          { text: "IA Finseed", path: "/accelerate-program-ia-finseed", img: RUMS },
          { text: "IA Pulse", path: "/accelerate-program-ia-pulse", img: RUMS },
          

        ],
      },
      {
        text: "Startup offerings",
        listSubData: [
          {
            text: "Value added services",
            path: "/value-added-services",
            img: RUMS,
          },
          { text: "iScale", path: "/iscale", img: RUMS },
          { text: "Perks & benefits", path: "/perks-benefits", img: RUMS },
        ],
      },
      {
        text: "Global expansion",
        listSubData: [
          { text: "IAccel GBI", path: "/", img: RUMS },
          { text: "SVA US", path: "/", img: RUMS },
          { text: "Sri Lanka", path: "/", img: RUMS },
          { text: "Mauritius", path: "/", img: RUMS },
        ],
      },
      { text: "Venture studio" },
    ],
    borderColor: "#EC5427",
  },
  {
    title: "We fund you",
    path: "/we-fund-you",
    listItems: [
      {
        text: "IAngels",
        listSubData: [
          {
            text: "Value added services",
            path: "/value-added-services",
            img: "",
          },
          { text: "iScale", path: "/", img: "" },
          { text: "Perks & benefits", path: "/", img: "" },
        ],
      },
      { text: "Finvolve" },
      { text: "Funding schemes" },
      { text: "Apply as an investor" },
    ],
    borderColor: "#00A14C",
  },
  {
    title: "We mentor you",
    path: "/we-mentor-you",
    listItems: [{ text: "Apply as a mentor" }],
    borderColor: "#00AAE7",
  },
  {
    title: "We partner",
    path: "/we-partner",
    listItems: [
      { text: "Government partnerships" },
      { text: "Corporate partnerships" },
      { text: "University partnerships" },
      { text: "VCs" },
      { text: "Apply as a partner" },
    ],
    borderColor: "#F7C822",
  },
];
