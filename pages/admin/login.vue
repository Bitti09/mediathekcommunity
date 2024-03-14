<script setup lang="ts">
function afterLogin() {
 navigateTo("/admin/profile");
}
</script>
<template>
  <hanko-auth  @onAuthFlowCompleted="afterLogin()" class="dark" />
</template>
<style>
:root {
  --color: #424c55;
  --color-shade-1: #d6d6d6;
  --brand-color: #568aed;
  --background-color: #ffffff;
  --border-radius: 4px;
  --font-size: 14px;
  --item-height: 44px;
  --headline1-font-size: 28px;
  --headline1-font-weight: 450;
  --container-padding: 40px;
  --container-max-width: 410px;
} 
 
</style>