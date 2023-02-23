import { Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
export default function StepThree({ formData }) {
    return (
        <Grid>
            <h3>Data Added Successfully</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Value</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {"FirstName"}
                            </TableCell>
                            <TableCell align="right">{formData.firstName}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {"MiddleName"}
                            </TableCell>
                            <TableCell align="right">{formData.middleName}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {"LastName"}
                            </TableCell>
                            <TableCell align="right">{formData.lastName}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {"MobileNo"}
                            </TableCell>
                            <TableCell align="right">{formData.mobileNo}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {"Email"}
                            </TableCell>
                            <TableCell align="right">{formData.email}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {"Birthday"}
                            </TableCell>
                            <TableCell align="right">{formData.birthday}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {"Age"}
                            </TableCell>
                            <TableCell align="right">{formData.age}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {"BloodGroup"}
                            </TableCell>
                            <TableCell align="right">{formData.bloodGroup}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {"Height"}
                            </TableCell>
                            <TableCell align="right">{formData.height}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {"Weight"}
                            </TableCell>
                            <TableCell align="right">{formData.weight}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {"Gender"}
                            </TableCell>
                            <TableCell align="right">{formData.gender}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {"MaritalStatus"}
                            </TableCell>
                            <TableCell align="right">{formData.maritalStatus}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {"AddressLine1"}
                            </TableCell>
                            <TableCell align="right">{formData.addressLine1}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {"AddressLine2"}
                            </TableCell>
                            <TableCell align="right">{formData.addressLine2}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {"City"}
                            </TableCell>
                            <TableCell align="right">{formData.city}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {"State"}
                            </TableCell>
                            <TableCell align="right">{formData.state}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {"Country"}
                            </TableCell>
                            <TableCell align="right">{formData.country}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {"PinCode"}
                            </TableCell>
                            <TableCell align="right">{formData.pincode}</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};
