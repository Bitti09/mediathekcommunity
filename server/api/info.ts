export default defineEventHandler(event => {
  const ipcountry = getHeader(event, 'cf-ipcountry')
  const ipcontinent = getHeader(event, 'cf-ipcontinent')

  return {
    ipcountry,
    ipcontinent
  }
})