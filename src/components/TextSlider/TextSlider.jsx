import { Box } from "@mantine/core";
import Marquee from "react-fast-marquee";
import { TextSliderContainer } from "./TextSlider.styles";
import TextSliderBlock from "./components/TextSliderBlock";

const TextSlider = ({ data }) => {
  return (
    <TextSliderContainer data-aos="fade">
      <Marquee pauseOnHover>
        {data.map((item, index) => (
          <Box component="div" key={index}>
            <TextSliderBlock text={item.text} />
          </Box>
        ))}
      </Marquee>
    </TextSliderContainer>
  );
};

export default TextSlider;
