function getPostsOfUser(accessToken) {
	return new Promise((resolve, reject) => {

	const RapidAPI = new require('rapidapi-connect');
	const rapid = new RapidAPI('JiboUp', '9bb11e09-8d1f-41b8-8901-6871186bf5eb');


	function getTimeline(accessToken) {
		return new Promise((resolve, reject) => {
			rapid.call('FacebookGraphAPI', 'getUsersFeed', { 
				'access_token': accessToken,
				'user_id': ''
			}).on('success', (payload)=>{
				console.log("yeh success")
				resolve(payload)
			}).on('error', (payload)=>{
				console.log("o no failed")
				reject(payload)
			})
		})
	}

	posts = []
	getTimeline(accessToken).then(
		function(timeline){
			timelineJson = JSON.parse(timeline).data
			resolve(
				timelineJson.filter( 
					(post) => post.message
				).map(
					(post) => post.message
		))}
	)
})}

var	accessToken = 'EAACEdEose0cBAOip5gPZAaSZCOAeZAXf2CXThZBJTT6SISaBqfGBiqs4g7A7TxN3jpMlYkCEh7bnSFJPNsz5kI97pdnyFqWCt6V2eRumczZAdmSVVfKzxJOrlw9183mnI2qBYm0B2DfRgODMZB8Uo8ZCfBVZAZAkyW0FkzZA0IEqjvNAZDZD'

getPostsOfUser(accessToken).then((data) => console.log(data));

function getImagesOfUser{

}
