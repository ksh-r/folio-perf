import Cursor from '../cursor';

class CursorControl {
  namespace = 'cursor_control';
  beforeEnter = data => {
    console.log('CursorControl beforeEnter', data);
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
    console.log('CursorControl afterEnter', data);
  };
  beforeLeave = data => {
    console.log('CursorControl beforeLeave', data);
  };
  afterLeave = data => {
    console.log('CursorControl afterLeave', data);
  };
}
export default new CursorControl();