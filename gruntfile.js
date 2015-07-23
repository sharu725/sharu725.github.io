module.exports = function(grunt){
    
               
grunt.initConfig({
  uglify: {
    target: {
      files: {
        'js/webjeda.min.js' : ['js/jquery.js', 'js/textRotate.js', 'js/responsiveslides.min.js', 'js/slider.js']
      }
    }
  }
});    
        
     
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default',['uglify']);
    
};


