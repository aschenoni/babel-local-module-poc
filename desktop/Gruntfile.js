const grunt = require('grunt');
const child_process = require('child_process');

//run npm install grunt grunt-babel babel-core babel-preset-es2015 babel-preset-stage-2
//before running stuff in this file

//babel tasks
grunt.loadNpmTasks('grunt-babel');

grunt.initConfig({
	babel: {
		options: {presets: ['es2015', 'stage-2'] },
		dist: {
			files: [{
				expand: true,
				src: './node_modules/es6-dep/**/*.js',
				dest: './'
			}]
		}
	}
});

grunt.registerTask('install-local', () => {
	child_process.execSync('npm install local-dep');
});

grunt.registerTask('test-local', () => {
	const localDep = require('example-dependency');
	localDep();
});


grunt.registerTask('reset', () => {
	child_process.execSync('rm -rf node_modules');
});

grunt.registerTask('install-es6', () => {
	child_process.execSync('npm install local-es6-dep');
});

grunt.registerTask('test-es6', () => {
	const es6Dep = require('es6-dep');
	es6Dep.test();
	es6Dep.spreadCheck();
});
grunt.registerTask('test-non-es6', ['install-local', 'test-local']);

//This should throw -> Warning: Unexpected token ... Use --force to continue.
grunt.registerTask('full-expect-fail', ['test-non-es6', 'install-es6', 'test-es6']);

//Throw babel into the mix!
grunt.registerTask('full-expect-pass', ['test-non-es6', 'install-es6', 'babel', 'test-es6']);