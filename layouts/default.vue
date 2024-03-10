<script setup lang="ts">
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
    </UDashboardLayout>
</template>