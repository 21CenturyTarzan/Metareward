import BigNumber from 'bignumber.js'
import { BLOCKS_PER_YEAR, CAKE_PER_YEAR } from 'config'
import lpAprs from 'config/constants/lpAprs.json'

/**
 * Get the APR value in %
 * @param stakingTokenPrice Token price in the same quote currency
 * @param rewardTokenPrice Token price in the same quote currency
 * @param totalStaked Total amount of stakingToken in the pool
 * @param tokenPerBlock Amount of new cake allocated to the pool for each new block
 * @returns Null if the APR is NaN or infinite.
 */
export const getPoolApr = (
  stakingTokenPrice: number,
  rewardTokenPrice: number,
  rate: number,
  totalStaked: number,
  tokenPerBlock: number,
): number => {
  // const bnRate = new BigNumber(rate)
  // const totalRewardPricePerYear = new BigNumber(rewardTokenPrice).times(tokenPerBlock).times(BLOCKS_PER_YEAR).times(bnRate)
  // const totalStakingTokenInPool = new BigNumber(stakingTokenPrice).times(totalStaked)
  // const apr = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)
  console.log("[tz] calculate farm apr value: totalRewardPricePerYear", rate);
  return rate
}

/**
 * Get farm APR value in %
 * @param poolWeight allocationPoint / totalAllocationPoint
 * @param cakePriceUsd Cake price in USD
 * @param poolLiquidityUsd Total pool liquidity in USD
 * @param farmAddress Farm Address
 * @returns Farm Apr
 */
export const getFarmApr = (
  poolWeight: BigNumber,
  cakePriceUsd: BigNumber,
  poolLiquidityUsd: BigNumber,
  farmAddress: string,
  tokenPerBlock: BigNumber
): { cakeRewardsApr: number; lpRewardsApr: number } => {
  // const TokenPerYear = tokenPerBlock.times(BLOCKS_PER_YEAR)
  // const yearlyCakeRewardAllocation = poolWeight ? poolWeight.times(TokenPerYear) : new BigNumber(NaN)
  // const cakeRewardsApr = yearlyCakeRewardAllocation.times(cakePriceUsd).div(poolLiquidityUsd).times(100)
  // console.log("[tz] calculate farm apr value: yearly alloc", yearlyCakeRewardAllocation, " cakePrice: ", cakePriceUsd, " poolLiquidityusd: ", poolLiquidityUsd, " apr: ", cakeRewardsApr);
  // let cakeRewardsAprAsNumber = null
  // if (!cakeRewardsApr.isNaN() && cakeRewardsApr.isFinite()) {
  //   cakeRewardsAprAsNumber = cakeRewardsApr.toNumber()
  // }
  // const lpRewardsApr = lpAprs[farmAddress?.toLocaleLowerCase()] ?? 0
  return { cakeRewardsApr: poolWeight.toNumber(), lpRewardsApr: poolWeight.toNumber() }
}

export default null
