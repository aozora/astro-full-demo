// /* eslint-disable @typescript-eslint/ban-ts-comment */
// /**
//  * Custom theme for https://github.com/zerodevx/svelte-toast
//  */
// import { toast as svelteToast } from '@zerodevx/svelte-toast';
// import ToastNotification from '../components/Notification/ToastNotification.svelte';
//
// export type ToastProps = {
// 	kind: 'error' | 'info' | 'success' | 'warning';
// 	title: string;
// 	subtitle: string;
// 	showTimestamp: boolean;
// 	hideCloseButton: boolean;
// };
//
// export function toast({
// 	kind,
// 	title,
// 	// subtitle,
// 	// showTimestamp = true,
// 	hideCloseButton = false
// }: ToastProps) {
// 	svelteToast.push({
// 		component: {
// 			// @ts-ignore
// 			src: ToastNotification,
// 			props: {
// 				kind,
// 				title,
// 				subtitle,
// 				showTimestamp,
// 				hideCloseButton
// 			}
// 			// sendIdTo: 'toastId' // forward toast id to `toastId` prop (optional)
// 		},
//
// 		// duration: 5000, // duration of progress bar tween to the `next` value
// 		initial: 0, // no expiry
// 		next: 0, // next progress value
// 		dismissable: !hideCloseButton,
// 		reversed: false,
// 		theme: {
// 			'--toastBarHeight': 0
// 		}
// 	});
// }
