<template>
  <UFooter>
    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © {{ new Date().getFullYear() }}. All rights reserved.<br>
        This project uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
    </template>
    <template #center>
      <UColorModeButton size="sm" />
    </template>
    <template #right>
      <div flex="~ row gap2" items-center>
        <p text-true-gray:90 text-sm>
          Data provided by&nbsp;
          <a op100 target="_blank" href="https://www.themoviedb.org/" title="The Movie Database" rel="noopener"
            n-link-text>
            <IconTMDB inline h4 />
          </a>
        </p>
      </div>
      <div flex="~ row gap2" items-center>
        <p text-true-gray:90 text-sm>
        </p>
      </div>
    </template>
  </UFooter>
</template>