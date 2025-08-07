import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Paper,
} from '@mui/material';
import {
  Refresh as RefreshIcon,
  People as PeopleIcon,
  PersonOff as PersonOffIcon,
  Event as EventIcon,
  PersonAdd as PersonAddIcon,
  Cake as CakeIcon,
  Work as WorkIcon,
} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

// Widget component for reusability
interface WidgetProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  backgroundColor: string;
  iconColor: string;
}

const Widget: React.FC<WidgetProps> = ({ title, value, icon, backgroundColor, iconColor }) => (
  <Card
    sx={{
      height: '100%',
      backgroundColor,
      borderRadius: 2,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      },
    }}
  >
    <CardContent
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: 3,
      }}
    >
      <Box
        sx={{
          color: iconColor,
          marginBottom: 1,
          '& .MuiSvgIcon-root': {
            fontSize: '2.5rem',
          },
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h3"
        component="div"
        sx={{
          fontWeight: 'bold',
          color: '#2c3e50',
          marginBottom: 1,
        }}
      >
        {value}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#2c3e50',
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>
    </CardContent>
  </Card>
);

function App() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#f8f9fa',
          padding: 3,
        }}
      >
        <Container maxWidth="lg">
          {/* Header Section */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 4,
            }}
          >
            <Box>
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  color: '#2c3e50',
                  marginBottom: 1,
                }}
              >
                Dashboard
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#7f8c8d',
                  fontSize: '1.1rem',
                }}
              >
                {formattedDate} at {formattedTime}
              </Typography>
            </Box>
            <IconButton
              sx={{
                color: '#7f8c8d',
                '&:hover': {
                  backgroundColor: 'rgba(127, 140, 141, 0.1)',
                },
              }}
            >
              <RefreshIcon />
            </IconButton>
          </Box>

          {/* Widgets Section */}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 'bold',
              color: '#2c3e50',
              marginBottom: 3,
            }}
          >
            Widgets
          </Typography>

          {/* Employees Section */}
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 'bold',
              color: '#2c3e50',
              marginBottom: 2,
              marginTop: 4,
            }}
          >
            Employees
          </Typography>
          <Grid container spacing={3} sx={{ marginBottom: 4 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Widget
                title="Total Employees"
                value="10"
                icon={<PeopleIcon />}
                backgroundColor="#e3f2fd"
                iconColor="#1976d2"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Widget
                title="New Joining This Month"
                value="2"
                icon={<PersonAddIcon />}
                backgroundColor="#fff3e0"
                iconColor="#ff9800"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Widget
                title="Absent Today"
                value="3"
                icon={<PersonOffIcon />}
                backgroundColor="#ffebee"
                iconColor="#f44336"
              />
            </Grid>
          </Grid>

          {/* Occasions Section */}
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 'bold',
              color: '#2c3e50',
              marginBottom: 2,
              marginTop: 4,
            }}
          >
            Occasions
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Widget
                title="Birthday This Month"
                value="4"
                icon={<CakeIcon />}
                backgroundColor="#e8f5e8"
                iconColor="#4caf50"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Widget
                title="Work Anniversaries This Month"
                value="2"
                icon={<WorkIcon />}
                backgroundColor="#f3e5f5"
                iconColor="#9c27b0"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Widget
                title="Employee Occasions"
                value="6"
                icon={<EventIcon />}
                backgroundColor="#e0f2f1"
                iconColor="#009688"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
