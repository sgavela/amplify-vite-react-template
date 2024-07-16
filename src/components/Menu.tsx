import { Menu, MenuItem, View } from '@aws-amplify/ui-react';

const NetHousingMenu: React.FC = () => {
    return (
        <View width="4rem">
        <Menu>
            <MenuItem>Option 1</MenuItem>
            <MenuItem>Option 2</MenuItem>
            <MenuItem>Option 3</MenuItem>
        </Menu>
        </View>
    );
};
  
export default NetHousingMenu;