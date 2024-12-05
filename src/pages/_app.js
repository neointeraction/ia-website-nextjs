import { createTheme, MantineProvider } from "@mantine/core";
import "@fontsource/open-sauce-two";
import "@fontsource/open-sauce-two/400.css";
import "@fontsource/open-sauce-two/500.css";
import "@fontsource/open-sauce-two/600.css";
import "@mantine/core/styles.css";
import "@/styles/globals.css";
import "@/styles/bootstrap-grid.css";
import "@mantine/carousel/styles.css";

import Topbar from "@/components/Topbar";
import TextSlider from "@/components/TextSlider";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  const theme = createTheme({});

  return (
    <MantineProvider theme={theme}>
      <Topbar />
      <TextSlider />
      <Component {...pageProps} />
      <Footer />
    </MantineProvider>
  );
}
