export const formatNamePhoto = (value: string) => {
  if (value === 'Mr. Mime')
    return value.replace('Mr. Mime', 'mr-mime').toLowerCase()
  else return value.replace(/(')+/gim, '').toLowerCase()
}
