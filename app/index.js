var yeoman = require('yeoman-generator'),
	yosay  = require('yosay'),
	chalk  = require('chalk');

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
		this.log(chalk.magenta('We\'re gonna build the most basic thing ever. get ready.'));

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
			},
			{
				name:    'siteAuthor',
				message: 'Who\'s the author? Probs you. Probs.'
			},
			{
				type:    'confirm',
				name:    'includeReadme',
				message: 'Include a README.md file?',
				default:  true
			},
			{
				type:    'confirm',
				name:    'includeGit',
				message: 'Will you be using git for this project? (you best be)'
			}/*,
			{
				when: function( answers ) {
					return answers.includeGit;
				},
				name:    'gitRepo',
				message: 'Enter the repo URL (optional):'
			}*/
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
		this.prompt(prompts, function(answers)
		{
			// Generic Project Details
			this.customData.siteName        = answers.siteName;
			this.customData.siteDescription = answers.siteDescription;
			this.customData.siteAuthor      = answers.siteAuthor;

			// Config/Optional Files
			this.customData.includeReadme = answers.includeReadme;

			// Git/SVN
			this.customData.includeGit = answers.includeGit;

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
			siteName:        this.customData.siteName,
			siteDescription: this.customData.siteDescription
		};

		/**
		 * Copies templates/_index.html into index.html and replaces template
		 * tags with corresponding context val.
		 */
		this.template('_index.html', 'src/index.html', context);

		/**
		 * Create our package.json file.
		 *
		 * We won't pass the context into this one cos we need values from `this`
		 * which is in the main context.
		 */
		this.template('_package.json', 'package.json');

		/**
		 * Copy over our dev environment config files and things.
		 */
		this.copy('editorconfig', '.editorconfig');
		this.copy('htmlhintrc', '.htmlhintrc');
		this.copy('jshintrc', '.jshintrc');
		this.copy('scss-lint.yml', '.scss-lint.yml');

		/**
		 * The README.md file is optional. Only copy that to the project if the user
		 * says so.
		 */
		if(this.customData.includeReadme)
		{
			this.template('_README.md', 'README.md');
		}

		/**
		 * Copy over the Gruntfile. Choosing Grunt over Gulp for now because the
		 * Gulpy assemble package is crap.
		 */
		this.template('Gruntfile.js');

		/**
		 * Git Actions.
		 * We only want to run this task if the user selected 'y' to using git.
		 */
		if(this.customData.includeGit)
		{
			this.copy('gitignore', '.gitignore');
		}
	},
	end: function()
	{
		this.installDependencies({
			bower:       false,
			npm:         true,
			skipInstall: false,
			callback: function() {
				this.log(chalk.green('WE ARE ALL DONE HERE. GOODBYE.'));
			}.bind(this) // So we don't lose the scope of 'this' inside the callback()
		});
	}
});

module.exports = kristysTestGenerator;