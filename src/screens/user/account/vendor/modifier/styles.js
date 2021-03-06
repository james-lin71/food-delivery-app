import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "#F9F9F9"
    },
    container: {
        flex: 1
    },
    headerContainer: {
        paddingHorizontal: 15
    },
    accountItem: {
        width: "100%",
        height: 71,
        borderBottomWidth: 1,
        borderColor: "rgba(0,0,0,0.05)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    accountItemTitle: {
        fontSize: 16,
        color: "#1A2D5A",
        fontWeight: "bold"
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 32,
        marginLeft: 15
    },
    boldText: {
        color: "#1A2D5A",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 15
    }
});

export default styles;