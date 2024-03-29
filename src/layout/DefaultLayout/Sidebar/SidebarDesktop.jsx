// mui
import { Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    '&::-webkit-scrollbar': { display: 'none' },
});
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 2px)`,
    '&::-webkit-scrollbar': { display: 'none' },
});

const SidebarDesktop = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, isOpenSidebar }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',

    ...(isOpenSidebar && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    }),
    ...(!isOpenSidebar && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

export default SidebarDesktop;
