import { Box, Card, CardActionArea, LinearProgress, Stack, Typography } from '@mui/material';

export default function DiskCard({ name }: { name: string }) {
    const total = Math.floor(Math.random() * 996) + 5;
    const used = Math.floor(Math.random() * total + 1);

    return (
        <Card elevation={0} sx={{ borderRadius: '16px', }}>
            <CardActionArea sx={{ padding: '24px', }}>
                <Box component="img" sx={{ width: 48, height: 48, }} src="/drive.svg" />
                <Typography variant="h6">{name}</Typography>
                <LinearProgress color="inherit" variant="determinate" value={used / total * 100} sx={{ margin: '16px 0', borderRadius: '4px', height: '6px' }} />
                <Stack direction="row" justifyContent="flex-end">
                    {used} GB / {total} GB
                </Stack>
            </CardActionArea>
        </Card>
    );
}