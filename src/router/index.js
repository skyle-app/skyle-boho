import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
	{
		// will match everything
		path: '*',
		component: () => import('../views/404.vue'),
	},
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Launch.vue'),
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		layout: "dashboard",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "Dashboard" */ '../views/Dashboard.vue'),
	},
	{
		path: '/manage',
		name: '보호 현황',
		layout: "dashboard",
		component: () => import(/* webpackChunkName: "Tables" */ '../views/Tables.vue'),
	},
	{
		path: '/manage/new',
		name: '보호 대상자 추가',
		layout: "defaultl",
		meta: {
			layoutClass: 'layout-sign-up',
		},
		component: () => import(/* webpackChunkName: "New-Child" */ '../views/New-Child.vue'),
	},
	{
		path: '/manage/:id',
		name: '보호 대상자 관리',
		layout: "dashboard",
		component: () => import(/* webpackChunkName: "Tables2" */ '../views/Tables2.vue'),
	},
	{
		path: '/profile',
		//name: 'Profile',
		//layout: "dashboard",
		/*meta: {
			layoutClass: 'layout-profile',
		},*/
		//component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue'),
		redirect: '/profile/edit'
	},
	{
		path: '/profile/edit',
		name: '보호자 정보 수정',
		layout: "defaultl",
		meta: {
			layoutClass: 'layout-sign-up',
		},
		component: () => import(/* webpackChunkName: "Edit-Profile" */ '../views/Edit-Profile.vue'),
	},
	{
		path: '/sign-in',
		name: '로그인',
		component: () => import(/* webpackChunkName: "Sign-In" */ '../views/Sign-In.vue'),
	},
	{
		path: '/sign-out',
		name: '로그아웃',
		component: () => import(/* webpackChunkName: "Sign-Out" */ '../views/Sign-Out.vue'),
	},
	{
		path: '/sign-up',
		name: '회원 가입',
		meta: {
			layoutClass: 'layout-sign-up',
		},
		component: () => import(/* webpackChunkName: "Sign-Up" */ '../views/Sign-Up.vue'),
	},
]

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute( route, parentLayout = "default" )
{
	route.meta = route.meta || {} ;
	route.meta.layout = route.layout || parentLayout ;
	
	if( route.children )
	{
		route.children = route.children.map( ( childRoute ) => addLayoutToRoute( childRoute, route.meta.layout ) ) ;
	}
	return route ;
}

routes = routes.map( ( route ) => addLayoutToRoute( route ) ) ;

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior (to, from, savedPosition) {
		if ( to.hash ) {
			return {
				selector: to.hash,
				behavior: 'smooth',
			}
		}
		return {
			x: 0,
			y: 0,
			behavior: 'smooth',
		}
	}
})

export default router
