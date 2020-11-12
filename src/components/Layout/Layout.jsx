import Aux from '../../hoc/Auxilliary';

import './Layout.scss';

const layout = ({children}) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className='content'>{children}</main>
  </Aux>
);

export default layout;
