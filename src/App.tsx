
import './App.css'
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@mui/material";

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function App() {

  return (
      <div>
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
                          <Button className="sel" variant="contained">Refresh</Button>
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


          <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                      <TableRow>
                          <TableCell>Course Title</TableCell>
                          <TableCell align="right">Code</TableCell>
                          <TableCell align="right">Action</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {rows.map((row) => (
                          <TableRow
                              key={row.name}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                              <TableCell component="th" scope="row">
                                  {row.name}
                              </TableCell>
                              <TableCell align="right">{row.calories}</TableCell>
                              <TableCell align="right">{row.fat}</TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </TableContainer>

          <br></br>
          <br></br>
          <br></br>

          <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                      <TableRow>
                          <TableCell>Course Title</TableCell>
                          <TableCell>Year sem</TableCell>
                          <TableCell align="right">Code</TableCell>
                          <TableCell align="right">Action</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {rows.map((row) => (
                          <TableRow
                              key={row.name}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                              <TableCell component="th" scope="row">
                                  {row.name}
                              </TableCell>
                              <TableCell align="right">{row.calories}</TableCell>
                              <TableCell align="right">{row.fat}</TableCell>
                              <TableCell align="right">{row.fat}</TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </TableContainer>

          </div>


  )
}

export default App
