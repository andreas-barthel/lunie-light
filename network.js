export default {
  id: 'cosmos-hub-testnet', // DEPRECATE, only used for Lunie extension, NOT CHAIN ID
  name: 'Unification',
  description: 'Unification Blockchain',
  logo: `logo.svg`,
  website: 'https://unification.com',
  apiURL: 'https://rest.unification.io', // use `npx lcp --proxyUrl http://34.123.30.100:1317`
  rpcURL: 'https://rpc1.unification.io:443',
  stakingDenom: 'FUND',
  coinLookup: [
    {
      viewDenom: 'FUND',
      chainDenom: 'nund',
      chainToViewConversionFactor: 1e-9,
      icon: `currencies/muon.png`,
    },
  ],
  addressPrefix: 'und',
  validatorAddressPrefix: 'undvaloper',
  validatorConsensusaddressPrefix: 'undvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/5555'/0'/0/0`,
  lockUpPeriod: `21 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'FUND',
          amount: 0.002,
        },
      ],
    },
  },
  icon: `https://lunie.fra1.digitaloceanspaces.com/network-icons/cosmos.png`,

  // This is only to be used as a developer tool and for testing purposes
  // NEVER ENABLE LOCALSIGNING IN PRODUCTION OR FOR MAINNETS
  localSigning: false,
}
