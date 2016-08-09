module.exports = {
  options: {
    mangle: {
      except: ['u', 'µ']
    },
    compress: {
      //drop_console: true
    },
    preserveComments: false,
    sourceMap: true
  },
  ujs: {
    options: {
      banner: '<%= banner %>'
    },
    src: ['dist/u.tmpl.js'],
    dest: 'dist/u.tmpl.min.js'
  },
  jquery: {
    options: {
      banner: '<%= banner %>'
    },
    src: ['dist/jquery.tmpl.js'],
    dest: 'dist/jquery.tmpl.min.js'
  }
};
