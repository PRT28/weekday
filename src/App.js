import { useEffect, useState } from 'react';
import './App.css';
import Paper from '@mui/material/Paper';
import JobCard from './components/JobCard/JobCard';
import { Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

function App() {

  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState('');
  const [exp, setExp] = useState(null);
  const [remote, setRemote] = useState(null);
  const [minSal, setMinSal] = useState(null);
  const [searchComp, setSearchComp] = useState('');


  const filteredData = data.filter(el => {
    if (searchComp === '' && role === '' && exp === null && remote === null && minSal === null) {
      return el;
    } else {
      let out;
      if (searchComp !== '') {
        out = el.companyName.includes(searchComp);
      }
      if (role !== '') {
        console.log(el.jobRole)
        out = el.jobRole.includes(role);
      }
      if (remote !== null) {
        out = remote ? el.location.toLowerCase() === 'remote' : el.location.toLowerCase() !== 'remote'
      }
      if (minSal !== null) {
        if (minSal === 60) {
          out = parseInt(el.minJdSalary) > 50;
        } else {
          out = parseInt(el.minJdSalary) > minSal;
        }
      }
      if (exp !== null) {
        if (exp == 4) {
          out = el.minExp > 3;
        } else {
          out = el.minExp == exp;
        }
        
      }
      return out;
    }
  })

  useEffect(() => {
    setLoading(true);
    
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
  "limit": 9,
  "offset": 0
  });

  const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body
  };

  fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    setData(result.jdList);
    setTotalCount(result.totalCount);
    setLoading(false);
  })
  .catch((error) => {
    console.error(error);
    setLoading(false);
  });


  }, [])


  const scrollHandle = e => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const position = Math.ceil(
        (scrollTop / (scrollHeight - clientHeight)) * 100
    );
    console.log(position);

    if (position === 100 && !loading && data.length < totalCount) {
      setLoading(true);
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
      "limit": 9,
      "offset": data.length
      });

      const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
      };

      fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData([...data, ...result.jdList]);
        setTotalCount(result.totalCount);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
    }
  }


  return (
    <Paper className="paper-custom">

      <FormControl className='form-custom'>
        <FormControl className="form-element" >
        <InputLabel id="demo-simple-select-label">Roles</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={role}
            label="Age"
            onChange={e => setRole(e.target.value)}
          >
            <MenuItem value="frontend">Frontend</MenuItem>
            <MenuItem value="backend">Backend</MenuItem>
            <MenuItem value="ios">Ios</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="form-element" >
        <InputLabel id="demo-simple-select-label">Experience</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={exp}
            label="Age"
            onChange={e => setExp(e.target.value)}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}> {'>3'} </MenuItem>
          </Select>
        </FormControl>
        
        <FormControl className="form-element" >
        <InputLabel id="demo-simple-select-label">Remote</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={remote}
            label="Age"
            onChange={e => setRemote(e.target.value)}
          >
            <MenuItem value={true}>Yes</MenuItem>
            <MenuItem value={false}>No</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="form-element" >
        <InputLabel id="demo-simple-select-label">Minimum Base Pay Salary</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={minSal}
            label="Age"
            onChange={e => setMinSal(e.target.value)}
          >
            <MenuItem value={10}>10 LPA</MenuItem>
            <MenuItem value={30}>30 LPA</MenuItem>
            <MenuItem value={50}>50 LPA</MenuItem>
            <MenuItem value={60}>More than 50 LPA</MenuItem>
          </Select>
        </FormControl>

        <TextField value={searchComp} onChange={e => setSearchComp(e.target.value)} className="form-element" id="outlined-basic" label="Search Company" variant="outlined" />

      </FormControl>
      
      <div className='data-container' onScroll={scrollHandle}>
        {<Grid rowSpacing={4} container justifyContent="space-between">
          {
             filteredData.map(d =>
              <Grid item>
                <JobCard jobData={d} />
              </Grid>
            )
          }
        </Grid>}
        {loading && <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>}
      </div>
    </Paper>
  );
}

export default App;
