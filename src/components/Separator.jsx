import { View } from "react-native";
import theme from "../assets/theme";

const Separator = () => {
    return (
        <View
            style={{
                borderBottomColor: theme.colors.background,
                borderBottomWidth: 2
            }}
        />
    )
}

export default Separator;