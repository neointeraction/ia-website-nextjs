import { useEffect, useState } from "react";
import { Box } from "@mantine/core";
import Marquee from "react-fast-marquee";
import { TextSliderContainer } from "./TextSlider.styles";
import TextSliderBlock from "./components/TextSliderBlock";

const TextSlider = ({ id }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(id, "id");

  useEffect(() => {
    if (!id || typeof id !== "number") {
      console.error("Invalid id. Expected a valid number.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://13.250.1.115/wp-json/wp/v2/text-slider/${id}?acf_format=standard`
        );
        const result = await response.json();

        const textSliderData = result.acf?.TextSlider || [];
        setData(textSliderData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading || data.length === 0) {
    return null;
  }

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
