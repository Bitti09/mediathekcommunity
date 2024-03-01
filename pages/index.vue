<template>
    <UDashboardPage>
        <UDashboardPanel grow>
            <UDashboardNavbar title="Home">
                <template #right>
                    <UTooltip text="Notifications" :shortcuts="['N']">
                        <UButton color="gray" variant="ghost" square>
                            <UChip color="red" inset>
                                <UIcon name="i-heroicons-bell" class="w-5 h-5" />
                            </UChip>
                        </UButton>
                    </UTooltip>
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
</script>