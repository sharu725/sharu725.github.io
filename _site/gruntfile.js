module.exports = function(grunt){
    
               
grunt.initConfig({
 cssmin: {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'css/webjeda.css': ['css/custom.css', 'css/foundation.min.css', 'css/normalize.css']
    }
  }
}
});    
        
     
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.registerTask('default',['cssmin']);
    
};


