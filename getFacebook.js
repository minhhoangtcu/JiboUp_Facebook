console.log("Hello world")

const RapidAPI = new require('rapidapi-connect');
const rapid = new RapidAPI('JiboUp', '9bb11e09-8d1f-41b8-8901-6871186bf5eb');
accessToken = 'EAACEdEose0cBAJ15tfZCA2YfXRDJ5gjb3OpYruifkc28m7wNSD3uenvxk5yNpsJWarKuzokuTfu81bhdBU1q19R9Ecf8cf8Q9t9aWbVHkR85LXXxmj0GROLdaRYKuD562Aj7P0s043ih2yIbjaaibZCWoIwrKkjsk5M6bXnQZDZD'

function getTimeline(accessToken){
	return new Promise((resolve, reject) => {
		successFlag = -1
		callRapidAPI(accessToken).then(function(posts){
			resolve(posts)
		}).catch((error) => reject(error))
	})
}

function callRapidAPI(accessToken){
	return new Promise((resolve, reject) => {
		timeline = rapid.call('FacebookGraphAPI', 'getUsersFeed', { 
			'access_token': accessToken,
			'user_id': ''
		}).on('success', (payload)=>{
			console.log("yeh success")
			for(elem in payload)
				console.log(elem)
			//console.log(payload.data)
			resolve(payload)
		}).on('error', (payload)=>{
			console.log("o no failed")
			reject(new Error("Rapid API call failed"))
		})
	})
}

getTimeline(accessToken).then(function(posts){
	console.log("Hello again")
//	for(post in posts)
//		console.log(post)
}).catch((error) => console.log(error))
