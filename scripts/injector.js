hexo.extend.injector.register('body_end', `
  <div id="aplayer"></div>
  <link defer rel="stylesheet" href="https://cdn.staticfile.org/aplayer/1.10.1/APlayer.min.css" />
  <script src="https://cdn.staticfile.org/aplayer/1.10.1/APlayer.min.js"></script>
  <script defer src="/js/aplayer.js"></script>
`);

hexo.extend.injector.register('body_end', `
  <script src="https://cdn.jsdelivr.net/gh/bynotes/texiao/source/js/qipao.js"></script>
`);
