"use client"

import { client } from "@/app/client"
import { tokenContractAddress } from "@/constants/contracts"
import { baseSepolia } from "thirdweb/chains"
// import { baseChain } from "@/constants/contracts"
import { ConnectButton, lightTheme, useActiveAccount  } from "thirdweb/react"
import { inAppWallet } from "thirdweb/wallets"
import { Button } from "./ui/button"
import { useState } from "react"
import { Loader2 } from "lucide-react"

export default function HeNavbar() {
  const account = useActiveAccount();
  const [isClaiming, setIsClaiming] = useState()

  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold"> Simple Prediction Market </h1>
      <div className="items-center flex gap-2">
        { account && (
          <Button>
            {isClaiming ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Reclamando ...
              </>
            ) : (
              'Reclama Tokens'
            )}
          </Button>
        ) }
        <ConnectButton
          client={client}
          theme={lightTheme()}
          chain={baseSepolia}
          connectButton={{
            label: "Conectate bb",
            style: {
              fontSize: '0.75rem !important',
              height: '2.5rem !important',
            }
          }}
          wallets={[ inAppWallet() ]}       // Solo permite usar inApp wallets
          accountAbstraction={{             // Permite usar smart wallets y account abstraction
            chain: baseSepolia,
            sponsorGas: true,
          }}
          detailsButton={{                  // Configura el boton de detalle
            displayBalanceToken: {
              [baseSepolia.id]: tokenContractAddress
            }
          }}
        />
      </div>
    </div>
  )
}