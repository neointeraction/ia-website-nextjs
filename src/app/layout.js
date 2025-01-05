import "@fontsource/open-sauce-two";
import "@fontsource/open-sauce-two/400.css";
import "@fontsource/open-sauce-two/500.css";
import "@fontsource/open-sauce-two/600.css";
import "@fontsource/open-sauce-two/900.css";
import "@/styles/globals.css";
import "@/styles/bootstrap-grid.css";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";

import StyledComponentsRegistry from "@/lib/registry";

import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { AOSInit } from "@/utils/AOS";

export const metadata = {
  title: "IA - India Accelerator Web",
  description: "India Accelerator web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <AOSInit />
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
