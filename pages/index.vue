<template>
    <v-container fluid>
        Geo : {{ info }}
        <v-row>
            <v-col v-for="post in posts" :key="post.id" dense>
                <Cardhome :posts="post"></Cardhome>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
import { onMounted } from 'vue'
const router = useRouter();
const { getItems } = useDirectusItems();
const posts = await getItems({ collection: "mediathek", params: { fields: ['*,coverimage.id,heroimage.id'] } });
const { data: info } = await useFetch('/api/info')

</script>
<script>
export default {
    data: () => ({
        show: false,
    }),
}
</script>