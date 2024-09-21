<script>
    import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder } from 'flowbite-svelte';
    import { HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid } from 'flowbite-svelte-icons';
  </script>
   <div  class="block lg:hidden"> 
  <BottomNav position="absolute" classInner="grid-cols-4">
    <BottomNavItem btnName="Home">
      <HomeSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    </BottomNavItem>
    <BottomNavItem btnName="Wallet">
      <WalletSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    </BottomNavItem>
    <BottomNavItem btnName="Settings">
      <AdjustmentsVerticalOutline class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    </BottomNavItem>
    <BottomNavItem btnName="Profile">
      <UserCircleSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    </BottomNavItem>
  </BottomNav>
</div>