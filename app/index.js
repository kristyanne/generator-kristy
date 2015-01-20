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
			},/*,
			{
				when: function( answers ) {
					return answers.includeGit;
				},
				name:    'gitRepo',
				message: 'Enter the repo URL (optional):'
			}*/
			{
				type:    'confirm',
				name:    'includeBourbon',
				message: 'Would you like to use bourbon in this project? \n' + chalk.green('http://bourbon.io/')
			},
			{
				type:    'confirm',
				name:    'includeNormalize',
				message: 'Would you like to include normalize in this project? \n' + chalk.green('https://github.com/hail2u/normalize.scss')
			},
			{
				type:    'confirm',
				name:    'includeAssemble',
				message: 'Do you want to use assemble to compile the HTML? \n' + chalk.green('http://assemble.io/')
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

			// CSS Options
			this.customData.includeBourbon   = answers.includeBourbon;
			this.customData.includeNormalize = answers.includeNormalize;

			// HTML
			this.customData.includeAssemble = answers.includeAssemble;

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
		this.mkdir('src/html');

		if(this.customData.includeAssemble) {
			this.mkdir('src/html/data');
			this.mkdir('src/html/layouts');
			this.mkdir('src/html/pages');
			this.mkdir('src/html/partials');
		}
	},
	copyFiles: function()
	{
		/**
		 * Create a variable to hold some data values that we got from the user
		 * in the first step.
		 */

		var useAssemble = this.customData.includeAssemble;

		var layoutContext = {
			metaTitle:       !useAssemble ? this.customData.siteName : '{{title}}',
			metaDescription: this.customData.siteDescription,
			body:            !useAssemble ? '<h1>' + this.customData.siteName + '</h1>' : '{{body}}'
		};

		/**
		 * Copies templates/_index.html into index.html and replaces template
		 * tags with corresponding context val.
		 */
		if(!useAssemble)
		{
			this.template('_layout.html', 'src/html/index.html', layoutContext);
		}
		else
		{
			this.template('_layout.html', 'src/html/layouts/base-layout.hbs', layoutContext);
			this.template('_index.html', 'src/html/pages/index.hbs');
		}

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

		this.directory('grunt', 'grunt');


		/**
		 * Git Actions.
		 * We only want to run this task if the user selected 'y' to using git.
		 */
		if(this.customData.includeGit)
		{
			this.copy('gitignore', '.gitignore');
		}

		/**
		 * CSS/SCSS
		 */
		this.template('main.scss', 'src/scss/main.scss');

		if(this.customData.includeNormalize)
		{
			this.remote('hail2u', 'normalize.scss', function(err, remote) {
				remote.directory('.', 'src/scss/lib/normalize');
			});
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