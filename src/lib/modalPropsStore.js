import { writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

export const modalProps = localStorageStore('modalProps', {})
export const modalvideo = localStorageStore('modalvideo', {})