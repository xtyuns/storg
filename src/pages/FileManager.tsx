import { Box, Checkbox, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography } from "@mui/material";

export default function FileManager() {
    const fileInfoNames = ['Name', 'Size', 'Type', 'Modified'];
    const files = [
        {
            name: 'Docs',
            size: '2.4 GB',
            type: 'folder',
            modified: new Date(),
        },
        {
            name: 'Foods',
            size: '400 MB',
            type: 'folder',
            modified: new Date(),
        },
        {
            name: 'cover-12.jpg',
            size: '2.2 MB',
            type: 'jpg',
            modified: new Date(),
        },
    ];

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox />
                        </TableCell>
                        {fileInfoNames.map(n => <TableCell><TableSortLabel>{n}</TableSortLabel></TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {files.map(f => (
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox />
                            </TableCell>
                            <TableCell>
                                <Stack direction="row" alignItems="center" gap="16px">
                                    <Box component="img" src={f.type == 'folder' ? '/folder.svg' : '/img.svg'} sx={{ width: '36px', height: '36px' }} />
                                    <Typography noWrap>{f.name}</Typography>
                                </Stack>
                            </TableCell>
                            <TableCell>{f.size}</TableCell>
                            <TableCell>{f.type}</TableCell>
                            <TableCell>{f.modified.toLocaleDateString()} {f.modified.toLocaleTimeString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}