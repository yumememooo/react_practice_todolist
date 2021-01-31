import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EnhancedTable from './EnhancedTable';
import { statusList } from './helper';
import * as R from 'ramda';
import { useStyles } from './Style/SimpleTabs_Style';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="span">{children}</Typography>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          className={classes.Tabs}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
        >
          <Tab label="全部 ALL" {...a11yProps(0)} />
          <Tab label="未進行 OPEN" {...a11yProps(1)} />
          <Tab label="進行中 IN PROGRESS" {...a11yProps(2)} />
          <Tab label="已完成 DONE" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {/* Item One */}

        <EnhancedTable
          data={props.data}
          alldata={props.data}
          changefunc={props.changefunc}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
        <EnhancedTable
          data={R.filter(R.propEq('status', statusList.Open), props.data)}
          alldata={props.data}
          changefunc={props.changefunc}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
        <EnhancedTable
          data={R.filter(R.propEq('status', statusList.InProgress), props.data)}
          alldata={props.data}
          changefunc={props.changefunc}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
        <EnhancedTable
          data={R.filter(R.propEq('status', statusList.Done), props.data)}
          alldata={props.data}
          changefunc={props.changefunc}
        />
      </TabPanel>
    </div>
  );
}
