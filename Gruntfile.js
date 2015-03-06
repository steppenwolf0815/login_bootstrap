module.exports=function(grunt)
{
	grunt.initConfig(
	{
		copy: 
		{
		  main: 
		  {
		    files: [
		      
		      {expand: true, cwd:'html/', src: ['index.html'], dest: 'dist/'},
		      {expand: true, cwd:'bower_components/jquery/dist/', src: ['jquery.min.js'], dest: 'dist/js/'},
		      {expand: true, cwd:'bower_components/angular/', src: ['angular.min.js'], dest: 'dist/js/'},
		      {expand: true, cwd:'bower_components/angular-route/', src: ['angular-route.min.js'], dest: 'dist/js/'},
		      {expand: true, cwd:'bower_components/bootstrap/dist/js/', src: ['bootstrap.min.js'], dest: 'dist/js/'},
		      {expand: true, cwd:'bower_components/bootstrap/dist/css/', src: ['bootstrap.min.css','bootstrap-theme.min.css'], dest: 'dist/css/'},
		      {expand: true, cwd:'templates/', src: ['**'], dest: 'dist/templates/'},
		      {expand: true, cwd:'js/', src: ['**'], dest: 'dist/js/'},
		      {expand: true, cwd:'css/', src: ['**'], dest: 'dist/css/'},
		      {expand: true, cwd:'dist/', src: ['**'], dest: '../../Dokumente und Einstellungen/klon/Desktop/miniweb-win32-20130309/miniweb/htdocs/dist_bootstrap'}
		    ],
		  },
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['copy']);

}