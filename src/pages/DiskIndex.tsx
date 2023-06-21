import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import DiskCard from "../components/DiskCard";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function DiskIndex() {
    const disks = ['阿里云盘', '天翼云盘', 'FTP'];

    return (
        <Box sx={{ padding: '36px 0' }}>
            <Grid2 container spacing={3}>
                {disks.map(d =>
                    <Grid2 xs={12} sm={6} md={4}>
                        <Link to="/files">
                        <DiskCard name={d} />
                        </Link>
                    </Grid2>
                )}
            </Grid2>
        </Box>
    );
};