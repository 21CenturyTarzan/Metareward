import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'WealthSecrets',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by WealthSecrets), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('WealthSecrets')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('WealthSecrets')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('WealthSecrets')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('WealthSecrets')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('WealthSecrets')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('WealthSecrets')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('WealthSecrets')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('WealthSecrets')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('WealthSecrets')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('WealthSecrets')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('WealthSecrets')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('WealthSecrets')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('WealthSecrets')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('WealthSecrets')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('WealthSecrets')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('WealthSecrets')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('WealthSecrets')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('WealthSecrets')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('WealthSecrets Info & Analytics')}`,
        description: 'View statistics for WealthSecrets exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('WealthSecrets Info & Analytics')}`,
        description: 'View statistics for WealthSecrets exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('WealthSecrets Info & Analytics')}`,
        description: 'View statistics for WealthSecrets exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('WealthSecrets')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('WealthSecrets')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('WealthSecrets')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('WealthSecrets')}`,
      }
    default:
      return null
  }
}
