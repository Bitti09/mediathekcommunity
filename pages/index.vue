<template>
    <UDashboardPage>
        <UDashboardPanel grow>
            <UDashboardNavbar title="Home">
                <template #right>

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