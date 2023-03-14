import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import http from "../../utils/Axios";
import { Container, Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const UserDetails = () => {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await http.get("/users");
        console.log(response);
        setUsersList(response);
        setIsLoading(false);
      } catch (error) {
        console.log("Api is not working", error);
      }
    };
    getUsers();
  }, []);

  return (
    <Box sx={{ margin: "100px 0px" }}>
      <Container>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Company</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <Box
                  sx={{
                    padding: "10px 0px",
                  }}
                  align="center"
                >
                  <CircularProgress color="secondary" />
                </Box>
              ) : (
                usersList.map((list) => (
                  <TableRow
                    key={list.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {list.id}
                    </TableCell>
                    <TableCell align="right">{list.name}</TableCell>
                    <TableCell align="right">{list.email}</TableCell>
                    <TableCell align="right">
                      {list.address.street +
                        "," +
                        list.address.suite +
                        "," +
                        list.address.city}
                    </TableCell>
                    <TableCell align="right">{list.phone}</TableCell>
                    <TableCell align="right">{list.company.name}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default UserDetails;
