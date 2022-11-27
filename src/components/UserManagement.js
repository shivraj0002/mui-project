import React, { useContext, useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, ButtonGroup, Checkbox, Divider, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddTechCareRoll from './AddTechCareRoll';
import AddMapRolling from './AddMapRolling';
import RolesContext from '../Context/RolesProvider';


const Users = ["Role Title", "User Management", "Service Request", "Recent Alarms", "Troubleshoot", "Cycles", "Insights", "Device Data", "Events", `  Action`];
const TestUser = [{
    TechCareRole: "Admin",
    UserManagement: true,
    ServiceRequest: true,
    RecentAlarms: true,
    Cycles: true,
    Insights: true,
    DeviceData: true,
    TroubleShoot: true,
    Events: true,
    id: "sddd"

}]
const AddRole = ["Add Role", "TechRole", "Action"]


export default function UserManagement() {
    const { arr, deleteRole, editRole, AddAdRole, editAdRole, deleteAdRole, roles } = useContext(RolesContext)
    const [editShow, setEditShow] = useState(false)
    const [editShow2, setEditShow2] = useState(false)
    const [editShowValue, setEditShowValue] = useState(false)
    const [roleTitle, setRoleTitle] = useState('');
    const [techCareRoleTitle, setTechCareRoleTitle] = useState('');
    const [addRoleTitle, setAddRoleTitle] = useState('');
    const [techCareRoleFilter, setTechCareRoleFilter] = useState([...arr])
    const [roleMapFilter, setRoleMapFilter] = useState([...roles])



    const [tabValue, setTabValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
        // console.log(newValue);
    };
    useEffect(() => {
        if (roleTitle.length <= 0) {
            setTechCareRoleFilter([...arr])
        } else {
            var fltrArr = arr.filter((value) => {
                if (value.TechCareRole.includes(roleTitle)) {
                    return value;
                }
            }

            )
            setTechCareRoleFilter([...fltrArr])
        }
    }, [roleTitle, arr])

    useEffect(() => {
        if (techCareRoleTitle.length <= 0 && addRoleTitle.length <= 0) {
            setRoleMapFilter([...roles])
        } else {
            var fltrArr = arr.filter((value) => {
                if (addRoleTitle.length > 0 && value.AddAdRole.includes(addRoleTitle) || techCareRoleTitle.length > 0 && value.TechCareRole.includes(techCareRoleTitle)) {
                    return value;
                }
            }

            )
            setRoleMapFilter([...fltrArr])
        }
    }, [addRoleTitle, techCareRoleTitle, roles])


    const mappp = (value) => {
        return (
            <TableRow key={value.id}>
                <TableCell>{value.TechCareRole}</TableCell>
                <TableCell><Checkbox checked={value.UserManagement} /></TableCell>
                <TableCell><Checkbox checked={value.ServiceRequest} /></TableCell>
                <TableCell><Checkbox checked={value.RecentAlarms} /></TableCell>
                <TableCell><Checkbox checked={value.Cycles} /></TableCell>
                <TableCell><Checkbox checked={value.Insights} /></TableCell>
                <TableCell><Checkbox checked={value.DeviceData} /></TableCell>
                <TableCell><Checkbox checked={value.TroubleShoot} /></TableCell>
                <TableCell><Checkbox checked={value.Events} /></TableCell>
                <TableCell>
                    <ButtonGroup
                        variant="text"
                        sx={{
                            translate: '-12px 0'
                        }}
                    >
                        <Button onClick={() => {
                            // setEditShow(true)
                            // editRole(value.id)
                        }}><EditIcon /></Button>
                        <Button onClick={() => deleteRole(value.id)}><DeleteIcon /></Button>
                    </ButtonGroup>
                </TableCell>
            </TableRow>
        )
    }

    const mappp2 = (value) => {
        console.log(value);
        return (
            <TableRow key={value.id}>
                <TableCell align='left'>{value.AddAdRole}</TableCell>
                <TableCell align='left'>{value.TechCareRole}</TableCell>




                <TableCell align='right'>
                    <ButtonGroup
                        variant="text"

                    >
                        <Button><EditIcon /></Button>
                        <Button onClick={() => deleteAdRole(value.id)}><DeleteIcon /></Button>
                    </ButtonGroup>
                </TableCell>
            </TableRow>
        )
    }

    return (
        <>

            {editShow || editShow2 ?
                ((editShowValue) ? <AddMapRolling setEditShow={setEditShow} setEditShow2={setEditShow2} />
                    : <AddTechCareRoll setEditShow={setEditShow} setEditShow2={setEditShow2} />)
                : (


                    <Box>
                        <Typography variant='h6' component='h6' sx={{ padding: '15px' }}>
                            User Management
                        </Typography>
                        <Divider />
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example" sx={{ marginBottom: '10px' }}>
                                    <Tab label="Tech Care Role Management" value={1} sx={{ fontWeight: '20px', color: '#000000', padding: '15px' }} />
                                    <Tab label="Add Role Mapping" value={2} sx={{ fontWeight: '20px', color: '#000000', padding: '15px' }} />
                                </Tabs>
                            </Box>
                        </Box>


                        <Box sx={{ border: '0.5px solid #d9d9d9', padding: '10px', display: 'flex', justifyContent: 'space-between', marginTop: '15px', flexWrap: 'wrap' }} >
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Typography variant='subtitle1' sx={{ fontWeight: '20px', padding: '15px' }}>
                                    Filters
                                </Typography>
                                <Divider orientation="vertical" flexItem />

                                {
                                    (tabValue === 1) && <TextField id="standard-basic" label="Roll Title" variant="standard" sx={{ marginLeft: '15px', translate: '0 -6.5px' }} onChange={(e) => setRoleTitle(e.target.value)} value={roleTitle} />
                                }

                                {
                                    (tabValue === 2) && <><TextField id="standard-basic" label="Add Roll" variant="standard" sx={{ marginLeft: '15px', translate: '0 -6.5px' }} onChange={(e) => setAddRoleTitle(e.target.value)} value={addRoleTitle} />
                                        <TextField id="standard-basic" label="TechCare Roll" variant="standard" sx={{ marginLeft: '15px', translate: '0 -6.5px' }} onChange={(e) => setTechCareRoleTitle(e.target.value)} value={techCareRoleTitle} /></>
                                }



                            </Box>

                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Divider orientation="vertical" flexItem />


                                {
                                    (tabValue === 1) && <Button variant="contained" startIcon={<AddIcon />} sx={{ marginLeft: '15px' }} onClick={() => {

                                        setEditShow(true)
                                        setEditShowValue(false)

                                    }
                                    }>
                                        Add TechCare Role
                                    </Button>
                                }
                                {
                                    (tabValue === 2) && <Button variant="contained" startIcon={<AddIcon />} sx={{ marginLeft: '15px' }} onClick={() => {
                                        setEditShowValue(true)
                                        setEditShow2(true)
                                    }

                                    }>
                                        Roll Mapping
                                    </Button>
                                }


                            </Box>
                        </Box>
                        {
                            (tabValue === 1) && <Table stickyHeader aria-label="sticky table" sx={{
                                marginTop: '10px',
                                border: '0.5px solid #d9d9d9'

                            }}>
                                <TableHead>
                                    <TableRow>
                                        {
                                            Users.map(value => <TableCell sx={{
                                                fontWeight: 'bold'
                                            }} key={value}>{value}</TableCell>)
                                        }
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        roleTitle.length > 0 ? techCareRoleFilter.map(itm => mappp(itm)) : arr.map(itm => mappp(itm))
                                    }
                                </TableBody>
                            </Table>
                        }
                        {
                            (tabValue === 2) && <Table stickyHeader aria-label="sticky table" sx={{
                                marginTop: '10px',
                                border: '0.5px solid #d9d9d9'

                            }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{
                                            fontWeight: 'bold'
                                        }} align='left' key={AddRole[0]}>{AddRole[0]}</TableCell>
                                        <TableCell sx={{
                                            fontWeight: 'bold'
                                        }} align='center' key={AddRole[1]}>{AddRole[1]}</TableCell>
                                        <TableCell sx={{
                                            fontWeight: 'bold'
                                        }} align='right' key={AddRole[2]}>{AddRole[2]}</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        (addRoleTitle.length > 0 || techCareRoleTitle.length > 0) ? roleMapFilter.map(itm => mappp2(itm)) :
                                            roles.map(itm => mappp2(itm))
                                        // console.log(roles)
                                    }

                                </TableBody>
                            </Table>
                        }



                    </Box >
                )
            }



        </>

    );
}