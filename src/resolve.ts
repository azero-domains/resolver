import { getAznsContract } from './contract'

/**
 * Returns the resolved address for the given `.azero` domain.
 * @param domain The domain to be resolved as a string.
 *   Provide it either with or without the `.azero` tld ending).
 * @returns The resolved SS58 address. Returns `false` if there was no owner found.
 *   Returns `undefined` if there was a problem determining the address.
 */
export const resolveName = async (
  domainName: string,
  tld = 'azero',
): Promise<string | undefined | false> => {
  const name = (domainName || '').split(`.${tld}`)[0]
  const contract = await getAznsContract()
  const { result, output } = await contract.query.getOwner(
    '',
    { gasLimit: 0 },
    name,
  )

  if (!result?.isOk || !output) {
    console.error(`Error while resolving address for domain '${name}.${tld}'`)
    return undefined
  }

  if (output.isEmpty) {
    return false
  }

  const address = output.toString()
  return address
}
