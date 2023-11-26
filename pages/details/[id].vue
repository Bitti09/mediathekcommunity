<template>
  <UPage>
    <UAlert v-if="alert" :icon="alert.icon" :color="alert.color" :variant="alert.variant" :title="alert.title"
      :description="alert.description" />
    <div class=" h-image1 mx-auto grid place-items-center">
      <div class="">
 			<div v-if=!showvideo class=" h-image1 mx-auto grid place-items-center">
        <img :src="showflag1(data)" alt="image" />
			</div>
	 
			<div v-if=showvideo class="h-image1 mx-auto grid place-items-center">
        <Videoplayer :vdata="modalvideo" />
  			</div>
 	</div>
    </div>
    <UDivider label="-" />

    <UTabs :items="items" class="w-full">
      <template #default="{ item, index, selected }">
        <div class="flex items-center gap-2 relative truncate">
          <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />

          <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>

          <span v-if="selected" class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400" />
        </div>
      </template>
      <template #item="{ item }">
        {{ item }}
        {{ data[item.key] }}
        <div class=" shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Play
                </th>
                <td class="px-4 py-2">
                  <button type="button" class="btn variant-filled mt-0" @click.prevent=playvideo()>
                    Play
                  </button>
                </td>
              </tr>
              <tr v-if="data.detailslink" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Direktlink
                </th>
                <td class="px-4 py-2">
                  <a :href=data.detailslink target="_blank">
                    <button type="button" class="btn variant-filled mt-0">Detailseite</button>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </UTabs>

  </UPage>
</template>

<script lang="ts" setup>
let alert = computed(() => {
  var x = undefined
  if (data.channel == 'rai') {
    x = {
      icon: 'i-heroicons-command-line',
      color: 'green',
      variant: 'subtle',
      title: 'Info',
      description: 'You can add components to your app using the cli.'
    }
  }
  if (data.channel == 'svt') {
    x = {
      icon: 'i-heroicons-command-line',
      color: 'blue',
      variant: 'subtle',
      title: 'Info',
      description: 'Select "Tydligare tal" as audio language for English audio'
    }
  }
  if (data.quality == 'uhd') {
    x = {
      icon: 'i-heroicons-command-line',
      color: 'red',
      variant: 'subtle',
      title: 'Heads up!',
      description: 'UHD ist aktuell buggy im Edge Browser - nehmt besser Chrome'
    }
  }
  return x
})
let myPlaylist = [];
let showvideo = ref(false);
let imgsrc1;
let d1;
let keyz;
let omulist1;
let omulist2;
let episodelist;
let modalvideo = ref();
let data = ref();
let data2 = ref();
const route = useRoute()

data = await $fetch('/api/details/' + route.params.id)
data2 = data
data = data.all[0]


const items = computed(() => {
  let x = []
  x.push({
    label: 'Details',
    icon: 'i-heroicons-information-circle',
    key: 'title',
  })
  if (data.category != 'series') {
    x.push({
      label: 'Links',
      icon: 'i-heroicons-information-circle',
      key: 'links',
    })
  }
  return x
})
 function showflag1(data) {
  return data.poster ? 'https://img.mediathek.community/t/p/original/' + data.backdrop : 'https://img2.mediathek.community/assets/' + data.coverimage
}
function playvideo() {
  let poster1;
  if (data.backdrop) {
    poster1 = 'https://img.mediathek.community/t/p/original/' + data.backdrop;
  } else {
    poster1 = 'https://img2.mediathek.community/assets/' + data.heroimage;
  }
  showvideo.value = true;
  //console.log(data1);
  if (data.medialink) {
    modalvideo = {
      source: [{ src: data.medialink, type: data.format }],
      type: data.format,
      poster: poster1,
      title: data.title
    }
  } else {
    let sources = [];
    if (data.directlinkfhd) {
      sources.push({
        src: data.directlinkfhd,
        type: data.format,
        res: '1080',
        label: '1080p',
        default: true
      });
    }
    if (data.directlinkhd) {
      sources.push({
        src: data.directlinkhd,
        type: data.format,
        res: '720',
        label: '720p'
      });
    }
    if (data.directlinkmd) {
      sources.push({
        src: data.directlinkmd,
        type: data.format,
        res: '480',
        label: '480p'
      });
    }
    if (data.directlinklq) {
      sources.push({
        src: data.directlinklq,
        type: data.format,
        res: '360',
        label: '360p'
      });
    }
    modalvideo.set({
      source: sources,
      type: data.format,
      poster: poster1,
      title: data.title
    });
    //console.log($modalvideo);
  }
}
</script>

<style>
.h-image1 {
  max-width: 54rem !important;
  height: auto !important;
}
</style>