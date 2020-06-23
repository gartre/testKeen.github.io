(function(name,path,ctx){ctx[name]=ctx[name]||{ready:function(fn){var h=document.getElementsByTagName('head')[0],s=document.createElement('script'),w=window,loaded;s.onload=s.onreadystatechange=function(){if((s.readyState&&!(/^c|loade/.test(s.readyState)))||loaded){return}s.onload=s.onreadystatechange=null;loaded=1;ctx[name].ready(fn)};s.async=1;s.src=path;h.parentNode.insertBefore(s,h)}}})
  ('KeenTracking', 'https://cdn.jsdelivr.net/npm/keen-tracking@latest/dist/keen-tracking.min.js', this);

  KeenTracking.ready(function(){
    const client = new KeenTracking({
      projectId: '5d7f9a3ac9e77c0001d056a1',
      writeKey: 'D2FC97F6029851794638ED0A17BF1BFCDCA3781ED6DBF5628D403EA1FE5B28FF3D6A178D20FB728A8D62CACF877BE90E3F04976FB633B487270A8B3392103667E68C78F4448EA52E9E78B55A70401F48668FA988CDC0588E884F7B0713B58A90'
    });

    // Record an event
    // client.recordEvent('purchases', {
    //   item: 'Avocado'
    // });

    const helpers = KeenTracking.helpers;

KeenTracking.listenTo({
  'click .navbar a': (e) => {
    return client.recordEvent('click', {
      action: {
        intent: 'navigate',
        target_path: helpers.getDomNodePath(e.target.value)
      },
    });
  },
  'submit form#signup': (e) => {
    return client.recordEvent('form-submit', {
      action: {
        intent: 'signup',
        target_path: helpers.getDomNodePath(e.target)
      },
      visitor: {
        email_address: document.getElementById('signup-email').value,
      }
    });
  }
});

  });