import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { RouterConfig } from "routers/RouterConfig";

const theme = extendTheme();

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <ChakraProvider theme={theme}>
    <RouterConfig />
  </ChakraProvider>
);
