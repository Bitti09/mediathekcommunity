<template>
  <UPage>
     <p>{{ $route.params.id }}</p>
    <swiper-container init="false" class="'mySwiper2" :breakpoints="{
      0: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      490: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 0
      },
      1900: {
        slidesPerView: 5,
        spaceBetween: 0
      },
      2300: {
        slidesPerView: 7,
        spaceBetween: 0
      }
    }">
      <swiper-slide v-for="slide in data.all" :key="slide">
        <Card :carddata="slide" />

      </swiper-slide>
    </swiper-container>
    <div v-for="(group, key) in data.keyz" :key="key">
      <UPageHeader title=" Mediathek">
        <template #icon>
          <Icon :name=flags[group] inline style="font-size: 40px;" class="pr-1 pt-2" />
        </template>
      </UPageHeader>

      <swiper-container class="'mySwiper2" :breakpoints="{
        0: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        490: {
          slidesPerView: 2,
          spaceBetween: 0
        },
        960: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        1900: {
          slidesPerView: 5,
          spaceBetween: 0
        },
        2300: {
          slidesPerView: 7,
          spaceBetween: 0
        }
      }">
        <swiper-slide v-for="slide1 in data.grouped[group]" :key="slide">
          <Card :carddata="slide1" />

        </swiper-slide>
      </swiper-container>
    </div>
  </UPage>
</template>
<script setup>
let data = ref();
const route = useRoute()
const flags = {
  de: 'twemoji:flag-germany',
  at: 'twemoji:flag-austria',
  ch: 'twemoji:flag-switzerland',
  it: 'twemoji:flag-italy',
  fr: 'twemoji:flag-france',
  es: 'twemoji:flag-spain',
  uk: 'twenoji:flag-united-kingdom',
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
if (!route.params.id) {
  data = await $fetch('/api/index')
} else {
  data = await $fetch('/api/' + route.params.id)
}
const swiperParams = {
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    490: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 0
    },
    1900: {
      slidesPerView: 5,
      spaceBetween: 0
    },
    2300: {
      slidesPerView: 7,
      spaceBetween: 0
    }
  },
  on: {
    init() {
      // ...
    }
  }
};
onMounted(async () => {
  const swiperEl = document.querySelectorAll('swiper-container');
  for (let i = 0; i < swiperEl.length; i++) {
    Object.assign(swiperEl[i], swiperParams);
    swiperEl[i].initialize();
  }
}
);
</script>