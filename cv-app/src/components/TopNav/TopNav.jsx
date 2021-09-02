import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import PersonalData from '../PersonalData';
import Interests from '../Interests';
import Education from '../Education';
import Cursos from '../Cursos';
import Habilidades from '../Habilidades';
import Experiencias from '../Experiencias';
import Portfolio from '../Portfolio';

function TabPanel(props) {
  const { children, value, index, ...other  } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TopNav(props) {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {persona, personaContacto, intereses, estudios, cursos, habilidades, experiencias, portfolio} = props
  
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab className="topNav-tabs" label="Datos Personales" {...a11yProps(0)} />
          <Tab className="topNav-tabs" label="Intereses" {...a11yProps(1)} />
          <Tab className="topNav-tabs" label="Estudios" {...a11yProps(2)} />
          <Tab className="topNav-tabs" label="Cursos" {...a11yProps(3)} />
          <Tab className="topNav-tabs" label="Habilidades" {...a11yProps(4)} />
          <Tab className="topNav-tabs" label="Experiencias" {...a11yProps(5)} />
          <Tab className="topNav-tabs" label="Mi código" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <Paper>
        <TabPanel value={value} index={0}>
            <PersonalData title="Datos Personales" persona={persona} personaContacto={personaContacto}/>    
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Interests title="Intereses" intereses={intereses} />
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Education title="Estudios Formales" estudios={estudios}/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Cursos title="Últimos Cursos" cursos={cursos}/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Habilidades title="Hard Skills" habilidades={habilidades['duras']}/>
          <Habilidades title="Soft Skills" habilidades={habilidades['blandas']}/> 
        </TabPanel>
        <TabPanel value={value} index={5}>
            <Experiencias title="Experiencias Laborales" experiencias={experiencias}/>
        </TabPanel>
        <TabPanel value={value} index={6}>
            <Portfolio title="Mi Código" portfolio={portfolio}/>
        </TabPanel>
      </Paper>
    </div>
  );
}