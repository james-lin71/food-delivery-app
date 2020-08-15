import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "#F9F9F9"
    },
    scrollViewContaier: {
        paddingHorizontal: 15
    },
    container: {
        flex: 1,
        paddingBottom: 40
    },
    userInfoContainer: {
        alignItems: "center",
        marginBottom: 40
    },
    inputFieldContainer: {
        marginBottom: 8
    },
    avatarIcon: {
        width: 106,
        height: 111,
        resizeMode: "contain"
    }
});

export default styles;