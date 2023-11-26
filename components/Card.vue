<template >
    <a :href="'/details/' + carddata.id">
        <UCard class="max-w-md">
            <template #header>
                <div class="flex justify-between w-full">
                    <div>{{ carddata.channel }}</div>
                    <div>
                        <Icon :name=flags[carddata.country] style="font-size: 26px;" />
                    </div>
                </div>
            </template>

            <img :src="showflag1(carddata)" alt="image" />

            <template #footer>
                <div class="flex justify-between w-full">
                    <div>Audio:</div>
                    <div class="flex">
                        <span v-for="lang in carddata.audiolang" :key="lang" class="flex mx-1">
                            <Icon :name=flags[lang] style="font-size: 26px;" />
                        </span>
                    </div>
                </div>
            </template>
        </UCard>
    </a>
</template>
<script >
export default {
    props: ['carddata', 'showflag'],
    data() {
        return {
            show: true,
            // Mapping of country codes to emoji flags
            flags: {
                de: 'twemoji:flag-germany',
                at: 'twemoji:flag-austria',
                ch: 'twemoji:flag-switzerland',
                it: 'twemoji:flag-italy',
                fr: 'twemoji:flag-france',
                es: 'twemoji:flag-spain',
                uk: 'twemoji:flag-united-kingdom',
                pl: 'twemoji:flag-poland',
                nl: 'twemoji:flag-netherlands',
                be: 'twemoji:flag-belgium',
                dk: 'twemoji:flag-denmark',
                fi: 'twemoji:flag-finland',
                ie: 'twemoji:flag-ireland',
                no: 'twemoji:flag-norway',
                pt: 'twemoji:flag-portugal',
                se: 'twemoji:flag-sweden'
            }
        }
    },
    methods: {
        showflag1(carddata) {
            return carddata.poster ? 'https://img.mediathek.community/t/p/original/' + carddata.poster : 'https://img2.mediathek.community/assets/' + carddata.coverimage
        }
    }
}
</script>
<style>
.swiper-slide {
    flex-shrink: 1 !important
}
</style>
