import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
const routes = [
	{
		path: "/",
		redirect: '/dashboard',
		component: () => import('../components/layout/mainLayout.vue'),
		children: [
			{
				path: "/dashboard",
				name: 'dashboard',
				component: () => import('../pages/dashboard/index.vue')
			},
		]
	},
	{
		path: "/main",
		component: () => import('../pages/main/index.vue')
	},
	{
		path: "/about",
		name: '',
		component: () => import('../pages/about/index.vue')
	},
];

const router = createRouter({
	//   history: createWebHashHistory(),
	// 采用 history 模式
	history: createWebHistory(),
	routes,
});

export default router