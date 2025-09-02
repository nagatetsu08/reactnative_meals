import { View, Text, StyleSheet } from "react-native";

function SubTitle({children}) {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    );
}

export default SubTitle;

const styles = StyleSheet.create({
    subTitle: {
        color: '#f3e4dcff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subTitleContainer: {
        padding: 6,
        margin: 4,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '#f3e4dcff',
        borderBottomWidth: 2,
    }
});