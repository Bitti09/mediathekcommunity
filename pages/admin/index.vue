<script setup lang="ts">
definePageMeta({
  middleware: ["hanko-logged-in"],
});
const hanko = useHanko()
function logout() {
  hanko!.user.logout()
}
</script>

<template>
  <hanko-profile />
  <button @click="logout">
    Log me out
  </button>

</template>