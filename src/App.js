import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Orders from 'pages/Orders';
import CRM from 'pages/CRM';
import Notifications from 'pages/Notifications';
import Stats from 'pages/Stats';
import UserControl from 'pages/UserControl';
import Settings from 'pages/Settings';
import Maps from 'pages/Maps';
import Footer from 'components/Footer';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

function App() {
  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/crm" component={CRM} />
          <Route exact path="/notifications" component={Notifications} />
          <Route exact path="/stats" component={Stats} />
          <Route exact path="/user-control" component={UserControl} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/maps" component={Maps} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
