import { ApiPromise, WsProvider } from '@polkadot/api'
import { ContractPromise } from '@polkadot/api-contract'
import { deployments } from './deployments'

let api: ApiPromise | undefined = undefined
let contract: ContractPromise | undefined = undefined

const initializeApiAndContract = async (): Promise<ContractPromise> => {
  console.log(
    'NOT PRODUCTION READY – THE ADDRESS RESOLVER IS USING A TESTNET NETWORK.',
  )
  const wsProvider = new WsProvider('wss://ws.test.azero.dev')
  api = await ApiPromise.create({ provider: wsProvider })
  const aznsABI = await deployments.azns.abi
  const aznsAddress = await deployments.azns.address
  contract = new ContractPromise(api, aznsABI, aznsAddress)
  return contract
}

/**
 * Connects the Polkadot.js API and creates & caches a ContractPromise object.
 * @returns ContractPromise object for the AZERO Domains contract
 */
export const getAznsContract = async (): Promise<ContractPromise> => {
  if (contract) {
    return contract
  }
  return initializeApiAndContract()
}
