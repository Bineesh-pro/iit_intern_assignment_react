
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

const courseList = [
    { "title" : "Course Title 1","code" : 123098},
    { "title" : "Course Title 2","code" : 133983},
    { "title" : "Course Title 3","code" : 901556},
    { "title" : "Course Title 4","code" : 407522},
];

const courseInstance = [
    { "title" : "Course Title 1","year-sem" : "2023 - 1", "code" : 133983},
    { "title" : "Course Title 2","year-sem" : "2023 - 1", "code" : 133983},
    { "title" : "Course Title 3","year-sem" : "2023 - 1", "code" : 133983},
    { "title" : "Course Title 4","year-sem" : "2023 - 1", "code" : 133983},
    { "title" : "Course Title 5","year-sem" : "2023 - 1", "code" : 133983},
]

function App() {

  return (
      <div className="outer-outer">
          <div className="card-outer">
              <div className="card">
                  <TextField className="tbox" id="outlined-basic" label="Course title"></TextField>
                  <TextField className="tbox" id="outlined-basic" label="Course code"></TextField>
                  <TextField className="tbox" id="outlined-basic" label="Course description"></TextField>
                  <Button className="but" variant="contained">Add Course</Button>
              </div>

              <div>
                  <div className="join-col">
                      <select className="sel">
                          <option value="default">Select Course</option>
                          <option value="Bio Maths">Bio Maths</option>
                          <option value="MicroProcessor">MicroProcessor</option>
                          <option value="DPCO">DPCO</option>
                          <option value="C programming">C programming</option>
                      </select>
                      <Button className="sel" variant="contained">Referesh</Button>
                  </div>
                  <div className="card">
                      <div className="join-col">
                          <TextField className="tbox" id="outlined-basic" label="Year"></TextField>
                          <TextField className="tbox" id="outlined-basic" label="Semester"></TextField>
                      </div>

                      <Button className="but" variant="contained">Add Course</Button>
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
                      {courseList.map((row) => (
                          <StyledTableRow key={row.title}>
                              <StyledTableCell component="th" scope="row">
                                  {row.title}
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.code}</StyledTableCell>
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
                  <TextField className="tbox" id="outlined-basic" label="Year"></TextField>
                  <select className="sel">
                      <option value="default">Select semester</option>
                      <option value="Bio Maths">Bio Maths</option>
                      <option value="MicroProcessor">MicroProcessor</option>
                      <option value="DPCO">DPCO</option>
                      <option value="C programming">C programming</option>
                  </select>

                  <Button className="but" variant="contained">List instances</Button>

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
                          {courseInstance.map((row) => (
                              <StyledTableRow key={row.title}>
                                  <StyledTableCell component="th" scope="row">
                                      {row.title}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">{row["year-sem"]}</StyledTableCell>
                                  <StyledTableCell align="center">{row.code}</StyledTableCell>
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


      </div>


  )
}

export default App
