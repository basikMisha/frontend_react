import { Box } from '@mui/material';
import { ITabPanelProps } from '../../common/types/tabs';

const TabPanel: React.FC<ITabPanelProps> = (props: ITabPanelProps): JSX.Element => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
}

export default TabPanel;