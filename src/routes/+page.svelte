<script>
	import { onMount } from 'svelte';
	import Miniitem from './component/miniitem.svelte';
	import Card from './component/card.svelte';
	let isLoading = true;

	onMount(() => {
		setTimeout(() => {
			isLoading = false;
		}, 2000);
	});
</script>

{#if isLoading}
	<div class="bg-gray-300 bg-opacity-20">
		<div class="flex min-h-screen items-center justify-center">
			<div class="bg-[rgba(255, 255, 255, 0.7)] w-fit animate-spin-slow rounded-full p-5 shadow-lg">
				<div class="bg-[rgba(255, 255, 255, 0.85)] rounded-full p-5 shadow-lg">
					<div class="bg-[rgba(255, 255, 255, 1)] rounded-full p-5 shadow-lg backdrop-blur-sm">
						<div class="flex h-28 w-28 flex-col items-center p-5">
							<img src="/assets/image/iconshop.png" alt="" class="h-16 w-16 animate-bounce" />
							<p class="animate-blink text-center text-base text-primary">Loading....</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="relative">
		<div class="carousel w-full">
			<div id="item1" class="carousel-item w-full">
				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img src="/assets/image/carousel-1.svg" class="h-96 w-full" alt="Carousel image 1" />
			</div>
			<div id="item2" class="carousel-item w-full">
				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img src="/assets/image/carousel-2.svg" class="h-96 w-full" alt="Carousel image 2" />
			</div>
			<div id="item3" class="carousel-item w-full">
				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img src="/assets/image/carousel-3.svg" class="h-96 w-full" alt="Carousel image 3" />
			</div>
			<div id="item4" class="carousel-item w-full">
				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img src="/assets/image/carousel-4.svg" class="h-96 w-full" alt="Carousel image 4" />
			</div>
		</div>
		<div class="absolute bottom-3 left-1/2 -translate-x-1/2 transform">
			<a
				href="#item1"
				class="btn btn-circle btn-xs bg-gray-300 hover:bg-gray-500"
				aria-label="Go to item 1"
			></a>
			<a
				href="#item2"
				class="btn btn-circle btn-xs bg-gray-300 hover:bg-gray-500"
				aria-label="Go to item 2"
			></a>
			<a
				href="#item3"
				class="btn btn-circle btn-xs bg-gray-300 hover:bg-gray-500"
				aria-label="Go to item 3"
			></a>
			<a
				href="#item4"
				class="btn btn-circle btn-xs bg-gray-300 hover:bg-gray-500"
				aria-label="Go to item 4"
			></a>
		</div>
	</div>

	<div class="mx-24 flex flex-col gap-10">
		<div class="flex justify-center gap-10">
			<img src="/assets/image/shop.png" alt="" class="h-auto w-full max-w-[300px] object-contain" />
			<img
				src="/assets/image/shop2.png"
				alt=""
				class="h-auto w-full max-w-[300px] object-contain"
			/>
			<img
				src="/assets/image/shop3.png"
				alt=""
				class="h-auto w-full max-w-[300px] object-contain"
			/>
		</div>

		<div class=" flex justify-center gap-10 rounded-md border-4 border-primary p-5">
			<Miniitem />
			<Miniitem />
			<Miniitem />
		</div>

		<div class="flex justify-center">
			<img src="/assets/image/Cat.png" alt="" />
			<div class="flex flex-col gap-4">
				<img src="/assets/image/textcat2.png" alt="" />
				<img src="/assets/image/textcat.png" alt="" class="ml-4" />
			</div>
			<a href="/"><img src="/assets/image/Facebook.png" alt="" /></a>
			<a href="/"><img src="/assets/image/Instagram.png" alt="" /></a>
			<a href="/"><img src="/assets/image/LINE.png" alt="" /></a>
			<a href="/"><img src="/assets/image/YouTube.png" alt="" /></a>
		</div>

		<div class="flex flex-col gap-0">
			<img src="/assets/image/banner1.png" alt="" />
			<img src="/assets/image/banner2.png" alt="" />
		</div>

		<div class="flex justify-center">
			<div class="flex overflow-x-scroll whitespace-nowrap px-4">
				<div class="grid min-w-[100px] grid-rows-2 justify-items-center">
					<img src="/assets/image/icon1.png" alt="" class="h-16 w-16" />
					<p class="text-center text-sm font-medium">ของใช้ทั่วไป</p>
				</div>
				<div class="grid min-w-[100px] grid-rows-2 justify-items-center">
					<img src="/assets/image/icon2.png" alt="" class="h-16 w-16" />
					<p class="text-center text-sm font-medium">เครื่องมือหุ้น</p>
				</div>
				<div class="grid min-w-[100px] grid-rows-2 justify-items-center">
					<img src="/assets/image/icon3.png" alt="" class="h-16 w-16" />
					<p class="text-center text-sm font-medium">สินค้าผู้หญิง</p>
				</div>
				<div class="grid min-w-[100px] grid-rows-2 justify-items-center">
					<img src="/assets/image/icon4.png" alt="" class="h-16 w-16" />
					<p class="text-center text-sm font-medium">สินค้าทั่วไป</p>
				</div>
				<div class="grid min-w-[100px] grid-rows-2 justify-items-center">
					<img src="/assets/image/icon5.png" alt="" class="h-16 w-16" />
					<p class="text-center text-sm font-medium">อาหาร / เครื่องดื่ม</p>
				</div>
				<div class="grid min-w-[100px] grid-rows-2 justify-items-center">
					<img src="/assets/image/icon6.png" alt="" class="h-16 w-16" />
					<p class="text-center text-sm font-medium">กล่องสุ่ม</p>
				</div>
				<div class="grid min-w-[100px] grid-rows-2 justify-items-center">
					<img src="/assets/image/icon7.png" alt="" class="h-16 w-16" />
					<p class="text-center text-sm font-medium">โปรโมชั่น</p>
				</div>
				<div class="grid min-w-[100px] grid-rows-2 justify-items-center">
					<img src="/assets/image/icon8.png" alt="" class="h-16 w-16" />
					<p class="text-center text-sm font-medium">ลดราคาพิเศษ</p>
				</div>
				<div class="grid min-w-[100px] grid-rows-2 justify-items-center">
					<img src="/assets/image/icon9.png" alt="" class="h-16 w-16" />
					<p class="text-center text-sm font-medium">ผ่อนชำระ</p>
				</div>
			</div>
		</div>
	</div>
	<div class="relative bg-[#FFDCD1] px-24 py-10">
		<div class="absolute left-[10%] top-2">
			<div class="flex items-center bg-[#FFDCD1] px-2">
				<img src="/assets/image/bolt.png" alt="" class="h-14 w-14" />
				<div class="ml-2 flex">
					<p class="block text-[35px] leading-none text-[#363636]">
						Flash Sales <span class="text-[20px] text-[#4A4A4A]">สินค้าลดราคาพิเศษ</span>
					</p>
				</div>
			</div>
		</div>

		<div class="absolute right-[10%] top-5">
			<button class="rounded-full bg-primary px-16 py-2 text-center text-[15px] text-white"
				>ดูทั้งหมด</button
			>
		</div>
		<div class=" border-4 border-primary">
			<div class="mx-10 my-10 flex justify-between gap-4">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	</div>
	<div class="mx-36 my-10">
		<div class="flex">
			<div class="w-fit rounded-full bg-primary p-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="white"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
					/>
				</svg>
			</div>
			<p class="px-2 pt-2 text-2xl text-[#4A4A4A]">
				Recommended <span class="text-lg">สินค้าแนะนำ</span>
			</p>
		</div>
		<div class="my-10 flex justify-between gap-4">
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
		<div class="my-10 flex justify-between gap-4">
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
		<div class=" rounded-full bg-primary py-2 text-center text-white">
			<p>โหลดเพิ่มเติม....</p>
		</div>
	</div>
	<div class="mx-36 my-10">
		<div class="flex">
			<div class="w-fit rounded-full bg-primary p-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="white"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
					/>
				</svg>
			</div>
			<p class="px-2 pt-2 text-2xl text-[#4A4A4A]">
				Recommended <span class="text-lg">สินค้าแนะนำ</span>
			</p>
		</div>
		<div class="my-10 flex justify-between gap-4">
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
		<div class="my-10 flex justify-between gap-4">
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
		<div class="flex justify-center">
			<div class="w-fit rounded-full bg-[rgba(255,97,48,0.7)] p-4">
				<div class="rounded-full bg-[rgba(255,97,48,0.85)] p-6">
					<div class="flex flex-col items-center">
						<img src="/assets/image/shopicon.png" alt="" class="h-16 w-16" />
						<p class="text-sm text-white">โหลดเพิ่มเติม</p>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
