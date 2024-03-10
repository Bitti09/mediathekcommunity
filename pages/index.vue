<template>
    <UDashboardPage>
        <UDashboardPanel grow>
            <UDashboardNavbar title="Home">
                <template #right>
                      <UColorModeSelect class="w-28" />
                    
                </template>
            </UDashboardNavbar>
            {{ data }}
        </UDashboardPanel>
    </UDashboardPage>
</template>
<script setup>
const { getItems } = useDirectusItems();
const data = await getItems({
    collection: "mediathek",
})
const { isDashboardSidebarSlidoverOpen } = useUIState()
console.log(isDashboardSidebarSlidoverOpen.value)
const title1 = isDashboardSidebarSlidoverOpen.value ? 'Mediathek Community - Home' : 'Home'
</script>