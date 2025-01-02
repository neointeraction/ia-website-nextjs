// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports

import "@fontsource/open-sauce-two";
import "@fontsource/open-sauce-two/400.css";
import "@fontsource/open-sauce-two/500.css";
import "@fontsource/open-sauce-two/600.css";
import "@fontsource/open-sauce-two/900.css";
import "@/styles/globals.css";
import "@/styles/bootstrap-grid.css";
import "@mantine/carousel/styles.css";
// import "aos/dist/aos.css";
import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import StyledComponentsRegistry from "@/lib/registry";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "IA - India Accelerator",
  description: "India Accelerator web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <StyledComponentsRegistry>
            <Topbar />
            {children}
            <Footer />
          </StyledComponentsRegistry>
        </MantineProvider>
      </body>
    </html>
  );
}
