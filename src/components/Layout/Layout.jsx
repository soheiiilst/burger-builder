import Aux from '../../hoc/Auxilliary';

const layout = ({children}) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{children}</main>
  </Aux>
);

export default layout;
