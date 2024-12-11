import RUMS from "@/images/header/rums.png";
import AP from "@/images/header/ap.png";

export const whatWeDoData = [
  {
    title: "Accelerate",
    path: "/accelerate",
    listItems: [
      {
        text: "Our theses",
        listSubData: [
          {
            text: "Robotics & Unmanned & Space (RUMS)",
            path: "/",
            img: RUMS,
          },
          { text: "Consumer", path: "/", img: AP },
          {
            text: "Gaming, Media & Entertainment (GaME)",
            path: "/",
            img: RUMS,
          },
          {
            text: "Energy, Mobility & Connectivity(EMC)",
            path: "/",
            img: RUMS,
          },
          { text: "Singularity/GenAI", path: "/", img: RUMS },
          { text: "Impact Labs", path: "/", img: RUMS },
        ],
      },
      {
        text: "Accelerator programs",
        listSubData: [
          { text: "Accelerator programs", path: "/", img: RUMS },
          { text: "Program detail page", path: "/", img: RUMS },
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
          { text: "iScale", path: "/", img: RUMS },
          { text: "Perks & benefits", path: "/", img: RUMS },
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
    title: "Partnership programs",
    path: "/partnership-programs",
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
