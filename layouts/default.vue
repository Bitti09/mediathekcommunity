<script setup lang="ts">
const route = useRoute()
const appConfig = useAppConfig()
const defaultColors = ref(['green', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet'].map(color => ({ label: color, chip: color, click: () => appConfig.ui.primary = color })))
const colors = computed(() => defaultColors.value.map(color => ({ ...color, active: appConfig.ui.primary === color.label })))

const footerLinks = [{
    label: 'Invite people',
    icon: 'i-heroicons-plus',
    to: '/settings/members'
}, {
    label: 'Help & Support',
    icon: 'i-heroicons-question-mark-circle',
}]
const links = [{
    id: 'home',
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
    tooltip: {
        text: 'Home',
    }
}, {
    id: 'movie',
    label: 'Movies',
    icon: 'i-heroicons-home',
    to: '/movie',
    tooltip: {
        text: 'Movies',
    }
}, {
    id: 'tv',
    label: 'TV',
    icon: 'i-heroicons-home',
    to: '/tv',
    tooltip: {
        text: 'TV',
    },
}
]
</script>
<template>
    <UDashboardLayout>
        <UDashboardPanel :width="250" :resizable="{ min: 200, max: 300 }" collapsible>
            <UDashboardNavbar class="!border-transparent" :ui="{ left: 'flex-1' }">
                <template #left>
                    Mediathek Community
                </template>
               
            </UDashboardNavbar>

            <UDashboardSidebar>
                <template #header>
                    <!--   <UDashboardSearchButton /> -->
                </template>

                <UDashboardSidebarLinks :links="links" />

                <!--  <UDashboardSidebarLinks :links="[{ label: 'Colors', draggable: true, children: colors }]"
                    @update:links="colors => defaultColors = colors" />
 -->
                <div class="flex-1" />



                <template #footer>
                    <!-- ~/components/UserDropdown.vue  -->
                    <UserDropdown />
                </template>
            </UDashboardSidebar>

        </UDashboardPanel>

        <slot />

        <!-- ~/components/HelpSlideover.vue 
      <HelpSlideover />
        ~/components/NotificationsSlideover.vue  
      <NotificationsSlideover />
  
      <ClientOnly>
        <LazyUDashboardSearch :groups="groups" />
      </ClientOnly>-->
    </UDashboardLayout>
</template>