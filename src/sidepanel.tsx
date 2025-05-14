import { Button, TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SidePanel() {
    return (
        <div>
            <Box sx={{ padding: 2 }}>
                <TextField
                    fullWidth
                    placeholder="搜索..."
                    variant="outlined"
                    size="small"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                        sx: {
                            borderRadius: '20px',
                            backgroundColor: '#f5f5f5',
                            '&:hover': {
                                backgroundColor: '#eeeeee',
                            },
                        }
                    }}
                />
            </Box>
        </div>
    );
}
