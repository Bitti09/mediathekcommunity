import { HoudiniClient } from '$houdini';
 
export default new HoudiniClient({
     url: 'https://payload-mediathek.fly.dev/api/graphql',
    // uncomment this to configure the network call (for things like authentication)
    // for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
    fetchParams({ session }) {
         return {
             headers: {
                Authorization: `users API-Key ${import.meta.env.VITE_API_KEY}`,
             }
         }
     }
})
