import React from "react";
import Carousel from "../components/Carousel";
export default function ProductPage() {
    return (
        <div>
            <button
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span class="sr-only">Open sidebar</span>
                <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>

            </button>

            <aside id="cta-button-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
         

                    <div class="space-y-2">
                        <details
                            class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary
                                class="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                            >
                                <span class="text-sm font-medium"> Availability </span>

                                <span class="transition group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <div class="border-t border-gray-200 bg-white">
                                <header class="flex items-center justify-between p-4">
                                    <span class="text-sm text-gray-700"> 0 Selected </span>

                                    <button
                                        type="button"
                                        class="text-sm text-gray-900 underline underline-offset-4"
                                    >
                                        Reset
                                    </button>
                                </header>

                                <ul class="space-y-1 border-t border-gray-200 p-4">
                                    <li>
                                        <label for="FilterInStock" class="inline-flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                id="FilterInStock"
                                                class="h-5 w-5 rounded border-gray-300"
                                            />

                                            <span class="text-sm font-medium text-gray-700">
                                                In Stock (5+)
                                            </span>
                                        </label>
                                    </li>

                                    <li>
                                        <label for="FilterPreOrder" class="inline-flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                id="FilterPreOrder"
                                                class="h-5 w-5 rounded border-gray-300"
                                            />

                                            <span class="text-sm font-medium text-gray-700">
                                                Pre Order (3+)
                                            </span>
                                        </label>
                                    </li>

                                    <li>
                                        <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                id="FilterOutOfStock"
                                                class="h-5 w-5 rounded border-gray-300"
                                            />

                                            <span class="text-sm font-medium text-gray-700">
                                                Out of Stock (10+)
                                            </span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </details>

                        <details
                            class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary
                                class="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                            >
                                <span class="text-sm font-medium"> Price </span>

                                <span class="transition group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <div class="border-t border-gray-200 bg-white">
                                

                                <div class="border-t border-gray-200 p-4">
                                    <div class="flex justify-between gap-4">
                                        <label for="FilterPriceFrom" class="flex items-center gap-2">
                                            <span class="text-sm text-gray-600">$</span>

                                            <input
                                                type="number"
                                                id="FilterPriceFrom"
                                                placeholder="From"
                                                class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                            />
                                        </label>

                                        <label for="FilterPriceTo" class="flex items-center gap-2">
                                            <span class="text-sm text-gray-600">$</span>

                                            <input
                                                type="number"
                                                id="FilterPriceTo"
                                                placeholder="To"
                                                class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>

                </div>
            </aside>
            <div class="flex ">
                <div class="p-4 sm:ml-64 ">
                    <div class="  flex items-center justify-between  space-y-4 flex-wrap  ">
                        <div class="mx-auto ">
                            <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                                <img class="w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1580477371194-4593e3c7c6cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
                                <div>
                                    <div class="my-6 flex items-center justify-between px-4">
                                        <p class="font-bold text-gray-500">Product Name</p>
                                        <p class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">$120</p>
                                    </div>
                                    <div class="my-4 flex items-center justify-between px-4">
                                        <p class="text-sm font-semibold text-gray-500">First option</p>
                                        <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
                                    </div>
                                    <div class="my-4 flex items-center justify-between px-4">
                                        <p class="text-sm font-semibold text-gray-500">Second option</p>
                                        <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">7</p>
                                    </div>
                                    <div class="my-4 flex items-center justify-between px-4">
                                        <p class="text-sm font-semibold text-gray-500">Third option</p>
                                        <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">1</p>
                                    </div>
                                    <div class="my-4 flex items-center justify-between px-4">
                                        <p class="text-sm font-semibold text-gray-500">Fourth option</p>
                                        <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mx-auto ">
                            <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                                <img class="w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1580477371194-4593e3c7c6cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
                                <div>
                                    <div class="my-6 flex items-center justify-between px-4">
                                        <p class="font-bold text-gray-500">Product Name</p>
                                        <p class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">$120</p>
                                    </div>
                                    <div class="my-4 flex items-center justify-between px-4">
                                        <p class="text-sm font-semibold text-gray-500">First option</p>
                                        <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
                                    </div>
                                    <div class="my-4 flex items-center justify-between px-4">
                                        <p class="text-sm font-semibold text-gray-500">Second option</p>
                                        <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">7</p>
                                    </div>
                                    <div class="my-4 flex items-center justify-between px-4">
                                        <p class="text-sm font-semibold text-gray-500">Third option</p>
                                        <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">1</p>
                                    </div>
                                    <div class="my-4 flex items-center justify-between px-4">
                                        <p class="text-sm font-semibold text-gray-500">Fourth option</p>
                                        <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mx-auto ">
                            <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                                <img class="w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1580477371194-4593e3c7c6cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
                                <div>
                                    <div class="my-6 flex items-center justify-between px-4">
                                        <p class="font-bold text-gray-500">Product Name</p>
                                        <p class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">$120</p>
                                    </div>
                                    <div class="my-4 flex items-center justify-between px-4">
                                        <p class="text-sm font-semibold text-gray-500">First option</p>
                                        <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
                                    </div>
                                    <div class="my-4 flex items-center justify-between px-4">
                                        <p class="text-sm font-semibold text-gray-500">Second option</p>
                                        <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">7</p>
                                    </div>
                                    <div class="my-4 flex items-center justify-between px-4">
                                        <p class="text-sm font-semibold text-gray-500">Third option</p>
                                        <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">1</p>
                                    </div>
                                    <div class="my-4 flex items-center justify-between px-4">
                                        <p class="text-sm font-semibold text-gray-500">Fourth option</p>
                                        <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mx-auto ">
                            <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                                <img class="w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1580477371194-4593e3c7c6cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
                                <div>
                                    <div class="my-6 flex items-center justify-between px-4">
                                        <p class="font-bold text-gray-500">Product Name</p>
                                        <p class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">$120</p>
                                    </div>
                                    <div class="my-4 flex items-center justify-between px-4">
                                        <p class="text-sm font-semibold text-gray-500">First option</p>
                                        <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
                                    </div>
                                    <div class="my-4 flex items-center justify-between px-4">
                                        <p class="text-sm font-semibold text-gray-500">Second option</p>
                                        <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">7</p>
                                    </div>
                                    <div class="my-4 flex items-center justify-between px-4">
                                        <p class="text-sm font-semibold text-gray-500">Third option</p>
                                        <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">1</p>
                                    </div>
                                    <div class="my-4 flex items-center justify-between px-4">
                                        <p class="text-sm font-semibold text-gray-500">Fourth option</p>
                                        <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mx-auto ">
                            <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                                <img class="w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1580477371194-4593e3c7c6cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
                                <div>
                                    <div class="my-6 flex items-center justify-between px-4">
                                        <p class="font-bold text-gray-500">Product Name</p>
                                        <p class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">$120</p>
                                    </div>
                                    <div class="my-4 flex items-center justify-between px-4">
                                        <p class="text-sm font-semibold text-gray-500">First option</p>
                                        <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
                                    </div>
                                    <div class="my-4 flex items-center justify-between px-4">
                                        <p class="text-sm font-semibold text-gray-500">Second option</p>
                                        <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">7</p>
                                    </div>
                                    <div class="my-4 flex items-center justify-between px-4">
                                        <p class="text-sm font-semibold text-gray-500">Third option</p>
                                        <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">1</p>
                                    </div>
                                    <div class="my-4 flex items-center justify-between px-4">
                                        <p class="text-sm font-semibold text-gray-500">Fourth option</p>
                                        <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    );
}
