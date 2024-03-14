<template>
    <div>
        <Header />
        <UMain>
            <UAlert icon="i-heroicons-exclamation-triangle" color="red" variant="soft"
                title="Site under construction" />
            <slot />
        </UMain>
        <Footer />
    </div>
</template>
