import { Box } from "@mantine/core";
import Marquee from "react-fast-marquee";
import { TextSliderContainer } from "./TextSlider.styles";
import TextSliderBlock from "./components/TextSliderBlock";

const TextSliderData = [
  {
    text: "Upcoming event:  Startup Growth Accelerator Summit 2024, October 15-16, 2024",
  },
  {
    text: "Upcoming event:  Startup Growth Accelerator Summit 2024, October 15-16, 2024",
  },
  {
    text: "Upcoming event:  Startup Growth Accelerator Summit 2024, October 15-16, 2024",
  },
];

const TextSlider = () => {
  return (
    <TextSliderContainer>
      <Marquee pauseOnHover>
        {TextSliderData.map((item, index) => (
          <Box component="div" key={index}>
            <TextSliderBlock text={item.text} />
          </Box>
        ))}
      </Marquee>
    </TextSliderContainer>
  );
};

export default TextSlider;
