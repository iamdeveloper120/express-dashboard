module.exports = {
	index: (req, res) => {
		var data={};
		data.content_view='index';
		data.title='Express Auth';
		res.render('content', data);
	},
	login: (req, res) => {
		var data={};
		data.content_view='login';
		data.title='Login';
		res.render('content', data);
	},
	signup: (req, res) => {
		var data={};
		data.content_view='signup';
		data.title='signup';
		res.render('content', data);
	},
	forgotPassword: (req, res) => {
		var data={};
		data.content_view='forgot-password';
		data.title='forgot password';
		res.render('content', data);
	},
}