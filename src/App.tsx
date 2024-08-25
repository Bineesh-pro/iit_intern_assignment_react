
import './App.css'
import {
    Button,
    styled,
    Table,
    TableBody,
    TableCell, tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import {useState} from "react";
import {Instance} from "./model/Instance.ts";
import {Course} from "./model/Course.ts";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#2672ff",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
        backgroundColor: "#e5e9fe",
    }
}));

type InstanceRequest = {
    instanceId:number,
    yearOfDelivery:number,
    semester:number,
    courseId:number,
}

function App() {

    const [courseList,setCourseList] = useState(Array<Course>);
    const [courseInstanceList,setCourseInstanceList] = useState(Array<Instance>);
    const [courseTittle, setCourseTittle] = useState('');
    const [courseCode,setCourseCode] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [courseInstanceSelected, setCourseInstanceSelected] = useState(0);
    const [courseInstanceYear, setCourseInstanceYear] = useState(0);
    const [courseInstanceSemester, setCourseInstanceSemester] = useState(0);

    const [searchYear, setSearchYear] = useState(0);
    const [searchSemester, setSearchSemester] = useState(0);

    const semesters = [1,2,3,4,5,6,7,8];


    fetch('http://localhost:8080/api/courses')
        .then<Course[]>(t => t.json())
        .then(v => {
            setCourseList(v);
        })
        .catch(e => console.log(e));

    // fetch('http://localhost:8080/api/instances')
    //     .then(t => t.json())
    //     .then(res => {
    //         setCourseInstanceList(res);
    //     })
    //     .catch(e => console.log("Bineesh" + e));

    const postCourse = () => {
        if(courseCode.trim() != '' && courseTittle.trim() != '' && courseDescription.trim() != ''){
            fetch('http://localhost:8080/api/courses',{
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(new Course(0,courseTittle,courseCode,courseDescription))
            })
                .then<Course>(r => r.json())
                .then(c => {
                    console.log(c);
                    setCourseTittle('');
                    setCourseDescription('');
                    setCourseCode('');
                });

        }
    }

    const postInstance = () => {

        const inst:InstanceRequest = {
            instanceId : 0,
            courseId : courseInstanceSelected,
            yearOfDelivery : courseInstanceYear,
            semester : courseInstanceSemester
        }
        fetch('http://localhost:8080/api/instances',
            {
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(inst)
            })
            .then(t => t.json())
            .then(res => {
                setCourseInstanceList(res);
            })
            .catch(e => console.log("Bineesh" + e));
    }


    const fetchInstances = () => {
        fetch('http://localhost:8080/api/instances?year='+searchYear+'&semester='+searchSemester,{
        })
            .then(t => t.json())
            .then(res => {
                setCourseInstanceList(res);
                console.log(courseInstanceList)
            })
            .catch(e => console.log("Bineesh" + e));
    }

  return (
      <div className="outer-outer">
          <div className="card-outer">
              <div className="card">
                  <TextField type="text" className="tbox" value={courseTittle} onChange={e => setCourseTittle(e.target.value)} id="outlined-basic" label="Course title"></TextField>
                  <TextField className="tbox" value={courseCode} onChange={e => setCourseCode(e.target.value)} id="outlined-basic" label="Course code"></TextField>
                  <TextField className="tbox" value={courseDescription} onChange={e => setCourseDescription(e.target.value)} id="outlined-basic" label="Course description"></TextField>
                  <Button onClick={postCourse} className="but" variant="contained">Add Course</Button>
              </div>

              <div>
                  <div className="join-col">
                      <select className="sel" onChange={e => setCourseInstanceSelected(Number.parseInt(e.target.value))} value={courseInstanceSelected}>
                          {
                              courseList.map(c => (
                                  <option value={c.courseId} >{c.tittle}</option>
                              ))
                          }


                      </select>
                      <Button className="sel" variant="contained">Refresh</Button>
                  </div>
                  <div className="card">
                      <div className="join-col">
                          <TextField className="tbox" type="number" value={courseInstanceYear} onChange={e => setCourseInstanceYear(Number.parseInt(e.target.value))} id="outlined-basic" label="Year"></TextField>
                          <TextField className="tbox" type="number" value={courseInstanceSemester} onChange={e => setCourseInstanceSemester(Number.parseInt(e.target.value))} id="outlined-basic" label="Semester"></TextField>
                      </div>

                      <Button onClick={postInstance} className="but" variant="contained">Add Instance</Button>
                  </div>
              </div>

          </div>


        <div>
          <Button className="but" variant="contained">List Courses</Button>
            <br/>
            <br/>
          <TableContainer>
              <Table sx={{minWidth: 700}} aria-label="customized table">
                  <TableHead className="darkbg">
                      <TableRow className="darkbg">
                          <StyledTableCell>Course Title</StyledTableCell>
                          <StyledTableCell align="center">Course</StyledTableCell>
                          <StyledTableCell align="center">Action</StyledTableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {courseList.map(row => (
                          <StyledTableRow key={row.tittle}>
                              <StyledTableCell component="th" scope="row">
                                  {row.tittle}
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.courseCode}</StyledTableCell>
                              <StyledTableCell align="center">

                                  <div className="img-split">
                                      <img src="/src/assets/bin.png" alt=""></img>
                                      <img src="/src/assets/search.png" alt=""></img>
                                  </div>

                              </StyledTableCell>
                          </StyledTableRow>
                      ))}
                  </TableBody>
              </Table>
          </TableContainer>

        </div>

          <div>

              <div className="inner-join">
                  <TextField value={searchYear} onChange={e => setSearchYear(Number.parseInt(e.target.value))} className="tbox" id="outlined-basic" label="Year"></TextField>
                  <select className="sel" value={searchSemester} onChange={e => setSearchSemester(Number.parseInt(e.target.value))}>
                      {
                          semesters.map(s => (
                              <option key={s} value={s}>{s}</option>
                          ))
                      }
                  </select>

                  <Button onClick={fetchInstances} className="but" variant="contained">List instances</Button>

              </div>
              <br/>
              <br/>

              <TableContainer>
                  <Table sx={{minWidth: 700}} aria-label="customized table">
                      <TableHead className="darkbg">
                          <TableRow className="darkbg">
                              <StyledTableCell>Course Title</StyledTableCell>
                              <StyledTableCell align="center">Year - Sem</StyledTableCell>
                              <StyledTableCell align="center">Code</StyledTableCell>
                              <StyledTableCell align="center">Action</StyledTableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {
                              courseInstanceList.map((row) =>
                                  row.courses.map(r => (
                                    <StyledTableRow key={r?._tittle}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.courses[0]?._tittle}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.yearOfDelivery} - {row.semester}</StyledTableCell>
                                        <StyledTableCell align="center">{r?._courseCode}</StyledTableCell>
                                        <StyledTableCell align="center">

                                            <div className="img-split">
                                                <img src="/src/assets/bin.png" alt=""></img>
                                                <img src="/src/assets/search.png" alt=""></img>
                                            </div>

                                        </StyledTableCell>
                                    </StyledTableRow>
                                  )
                                 )
                              )

                          }
                      </TableBody>
                  </Table>
              </TableContainer>

          </div>


      </div>


  )
}

export default App
