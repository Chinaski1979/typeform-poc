
import { useState, useEffect } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const [ activeTab, setActiveTab ] = useState(0);
  const location = useLocation();
  console.log('location', location);

  const tabs = [
    { label: 'Home', path: '/', value: 0 },
    { label: 'Client Form', path: '/client-form', value: 1 },
    { label: 'Developer Form', path: '/developer-form', value: 2 },
    { label: 'Developer Responses', path: '/developer-responses', value: 3 },
    { label: 'Client Responses', path: '/client-responses', value: 4 },
  ];

  useEffect(() => {
    const pathValue = tabs.find(tab => tab.path === location.pathname);
    setActiveTab(pathValue.value);
  }, []);

  return (
    <AppBar position="static">
      <Tabs
        value={activeTab}
        onChange={(e, value) => setActiveTab(value)}
        aria-label="Nav bar tabs"
        centered
        style={{background: "#0984e3"}}
        indicatorColor="secondary"
      >
        { tabs.map(tab => <Tab key={tab.label} label={tab.label} component={Link} to={tab.path} />)}
      </Tabs>
    </AppBar>
  )
};

export default NavBar;
