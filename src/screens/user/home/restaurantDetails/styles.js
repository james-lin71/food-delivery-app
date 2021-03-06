import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "#F9F9F9"
    },
    container: {
        flex: 1,
        paddingBottom: 30
    },
    scrollViewContainer: {
        paddingHorizontal: 16
    },
    inputContainer: {
        marginBottom: 23
    },
    headerNameText: {
        color: "#1A2D5A",
        fontSize: 15,
        fontWeight: "bold"
    },
    headerBlueText: {
        color: "#1A2D5A",
        fontSize: 10,
        fontWeight: "bold"
    },
    headerRightContainer: {
        alignItems: "flex-end"
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "flex-end"
    },
    headerIcon: {
        marginLeft: 9
    },
    message: {
        color: "#333333",
        marginTop: 56,
        marginBottom: 24
    },
    choppingBagPrice: {
        color: "#1A2D5A",
        fontSize: 16,
        fontWeight: "normal",
        marginRight: 9
    },
    headerShoppingButton: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    mainImage: {
        width: null,
        height: 202,
        resizeMode: "cover",
        marginTop: 11
    },
    mainGreyText: {
        color: "#8D8D89",
        fontSize: 13,
        marginTop: 14
    },
    item: {
        color: "#1A2D5A",
        fontSize: 16,
        fontWeight: "bold"
    },
    itemContainer: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
});

export default styles;