**Basic Structure Setup**

1. Create a directory for the custom generator. Must be prefixed with `generator-`:

	`mkdir generator-beyonce`

2. change into the new generator directory:

	`cd generator-beyonce`

3. Then, once inside the directory, create a package.json. Can do it manually but automate that mo fo with `npm init`.

4. When creating the package.json, there are some rules:

	- the 'name' property must be prefixed with `generator-` (e.g. `"yeoman-beyonce"`)
	- The 'keywords' property must contain the yeoman generator `["yeoman-generator"]`

5. Then, we need the yeoman generator node module as a dependency:

	`npm install --save yeoman-generator`



**Running it Locally**

After you've done your generator (dunno exactly how to make one yet :D) you need to be able to run it
locally. To do that we need to create a global module and symlink it to our local one.

1. cd into the generator root:

	`cd generator-beyonce`

2. symlink a global module to our local one:

	`npm link`

3. One that's done, we can run our generator (hopefully):

	`yo beyonce`


