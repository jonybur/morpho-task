export const en = {
  common: {
    tryAgain: 'Try again',
    loading: 'Loading...',
  },
  search: {
    placeholder: 'Enter Vault Address or Name...',
    title: 'Vault Address or Name',
  },
  vault: {
    metadata: {
      title: (token: string) => `${token} Vault`,
      description: (token: string, company: string) => `Explore ${token} vault by ${company}`,
      notFound: {
        title: 'Vault Not Found',
        description: 'The requested vault could not be found',
      },
    },
    fields: {
      totalSupply: 'Total Supply (USD)',
      instantNetApy: 'Instant Net APY',
      vaultOwner: 'Vault Owner',
    },
    error: {
      title: 'Oops!',
      description: 'Something went wrong, please try again.',
    },
  },
  notFound: {
    title: 'Not found',
    description: 'We could not find the page you were looking for.',
  },
  components: {
    icon: {
      altText: (name: string) => `${name} icon`,
    },
  },
};
