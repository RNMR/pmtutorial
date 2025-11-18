// import { ThirdwebProvider } from "thirdweb/react";

// function Main() {
//   return (
//     <ThirdwebProvider>
//       <App />
//     </ThirdwebProvider>
//   )
// }

import { createThirdwebClient } from "thirdweb";

export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
})