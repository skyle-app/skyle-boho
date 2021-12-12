<!-- 
	This is the sign up page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<script>

	export default ({
		created() {
			if ($cookies.isKey('token')) {
				location.hash='#/manage';
			} else {
				location.hash='#/sign-in';
			}
		}
	})

</script>