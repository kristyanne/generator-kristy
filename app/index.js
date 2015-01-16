var yeoman = require('yeoman-generator'),
	yosay  = require('yosay');

var kristysTestGenerator = yeoman.generators.Base.extend({
	promptUser: function()
	{
		var done = this.async();

		/**
		 * Does a fun picture of the yeoman. Huuurrr.
		 */
		this.log(yosay('WELCOME TO THE THUNDERDOME'));

		/**
		 * Just a basic message that gets output to the terminal.
		 */
		this.log('we\'re gonna build the most basic thing ever. get ready.');

		/**
		 * All the questions we'll ask the user during the setup. Exciting.
		 */
		var prompts = [
			{
				name:    'siteName',
				message: 'what\'s your site\'s name?'
			},
			{
				name:    'siteDescription',
				message: 'What\'s it all about?'
			}
		];

		/**
		 * I thought it'd be neater to create our own object to hold the user
		 * input from the above prompts. Aren't I clever.
		 */
		this.customData = {};

		/**
		 * Execute each prompt and store the information the user gives us for each one
		 * into the new object.
		 *
		 * Then, we're done(): move onto the next function.
		 */
		this.prompt(prompts, function(props) {
			this.customData.siteName        = props.siteName;
			this.customData.siteDescription = props.siteDescription;

			done();
		}.bind(this));
	},
	createDirectories: function()
	{
		/**
		 * Lets make some directories for our project files to
		 * live in.
		 */
		this.mkdir('src');
		this.mkdir('src/scss');
		this.mkdir('src/js');
		this.mkdir('src/img');
	},
	copyFiles: function()
	{
		/**
		 * Create a variable to hold some data values that we got from the user
		 * in the first step.
		 */
		var context = {
			site_name: this.customData.siteName
		};

		/**
		 * Copies templates/_index.html into index.html and replaces template
		 * tags with corresponding context val.
		 */
		this.template('_index.html', 'src/index.html', context);
	}
});

module.exports = kristysTestGenerator;