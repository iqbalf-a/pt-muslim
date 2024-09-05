import { View, Text } from "react-native";
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import theme from "../assets/theme";

const ListSchedule = (props) => {
    return (
        <View style={{
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12
            }}>
                <FontAwesome5 name="dot-circle" size={20} color={theme.colors.primary} />
                <Text style={{
                    fontSize: theme.fontSizes.medium
                }}>{props.jadwal}</Text>
            </View>
            <Text style={{
                fontSize: theme.fontSizes.medium
            }}>{props.value}</Text>

        </View>
    )
}

export default ListSchedule;