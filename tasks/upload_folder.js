/*
 * grunt-upload-folder
 * https://github.com/onnia/grunt-upload-folder
 *
 * Copyright (c) 2014 onnia
 * Licensed under the MIT license.
 */

'use strict';


module.exports = function(grunt) {
    
    
    function Runner(){
    
    
// load orginal module
var upload = require('upload-folder');
    
   
        
        
        
        // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      src += options.punctuation;

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
      
      grunt.read(upload);
      
      grunt.log.writeln(upload.module);
      grunt.log.writeln(upload.kala);
    });
 
  }
    
grunt.registerMultiTask('upload_folder', 'plugin that you can use upload-folder app', Runner);
};
