import Cursor from '../cursor';

class About {
  namespace = 'about';
  beforeEnter = data => {
    console.log('About beforeEnter', data);
    // Once
    if (data.current.namespace === '') {
      let c = new Cursor({
        inner: document.getElementById('cursor__inner'),
        outer: document.getElementById('cursor__outer')
      });
      c.startCursor();
    }
  };
  afterEnter = data => {
    console.log('About afterEnter', data);
  };
  beforeLeave = data => {
    console.log('About beforeLeave', data);
  };
  afterLeave = data => {
    console.log('About afterLeave', data);
  };
}
export default new About();